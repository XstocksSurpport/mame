import {
  erc20Abi,
  formatUnits,
  isAddress,
  parseAbiItem,
  type Address,
} from 'viem'
import {
  BSCSCAN_URL,
  CLAIM_ADDRESS,
  LOG_CHUNK_SIZE,
  MAX_BLOCKS_TO_SCAN,
  MAX_LOG_CHUNKS,
  TOKEN_ADDRESS,
} from '../config/constants'
import { publicClient, sleep } from './client'
import { TOKEN_META } from './tokenMeta'

export interface TokenTransfer {
  hash: string
  from: string
  to: string
  value: string
  timestamp: number
  direction: 'in' | 'out'
}

export interface DividendRecord {
  hash: string
  amount: string
  symbol: string
  timestamp: number
  type: 'bnb' | 'claim'
}

export interface WalletData {
  balance: string
  symbol: string
  name: string
  decimals: number
  transfers: TokenTransfer[]
  dividendIncome: DividendRecord[]
  totalDividendBnb: string
  totalClaimedTokens: string
}

const transferEvent = parseAbiItem(
  'event Transfer(address indexed from, address indexed to, uint256 value)',
)

const CACHE_TTL_MS = 30_000
const PARALLEL_CHUNKS = 2
const CHUNK_DELAY_MS = 120

const queryCache = new Map<string, { data: WalletData; expires: number }>()

async function getBlockTimestamps(
  blockNumbers: bigint[],
): Promise<Map<bigint, number>> {
  const cache = new Map<bigint, number>()
  const unique = [...new Set(blockNumbers)]

  await Promise.all(
    unique.map(async (blockNumber) => {
      const block = await publicClient.getBlock({ blockNumber })
      cache.set(blockNumber, Number(block.timestamp))
    }),
  )

  return cache
}

async function fetchLogsInRange(
  wallet: Address,
  fromBlock: bigint,
  toBlock: bigint,
  direction: 'in' | 'out',
) {
  const args =
    direction === 'in' ? { to: wallet } : { from: wallet }

  return publicClient.getLogs({
    address: TOKEN_ADDRESS,
    event: transferEvent,
    args,
    fromBlock,
    toBlock,
  })
}

function processLogs(
  logs: Awaited<ReturnType<typeof fetchLogsInRange>>,
  wallet: Address,
  decimals: number,
  symbol: string,
  blockTimestamps: Map<bigint, number>,
  transferMap: Map<string, TokenTransfer>,
  claimMap: Map<string, DividendRecord>,
) {
  const walletLower = wallet.toLowerCase()
  const claimLower = CLAIM_ADDRESS.toLowerCase()

  for (const log of logs) {
    if (!log.blockNumber || !log.transactionHash) continue

    const from = log.args.from ?? ''
    const to = log.args.to ?? ''
    const isIncoming = to.toLowerCase() === walletLower
    const key = `${log.transactionHash}-${isIncoming ? 'in' : 'out'}`

    if (!transferMap.has(key)) {
      transferMap.set(key, {
        hash: log.transactionHash,
        from,
        to,
        value: formatUnits(log.args.value ?? 0n, decimals),
        timestamp: blockTimestamps.get(log.blockNumber) ?? 0,
        direction: isIncoming ? 'in' : 'out',
      })
    }

    if (
      from.toLowerCase() === walletLower &&
      to.toLowerCase() === claimLower
    ) {
      claimMap.set(log.transactionHash, {
        hash: log.transactionHash,
        amount: formatUnits(log.args.value ?? 0n, decimals),
        symbol,
        timestamp: blockTimestamps.get(log.blockNumber) ?? 0,
        type: 'claim',
      })
    }
  }
}

async function getHistoryFromChain(
  wallet: Address,
  decimals: number,
  symbol: string,
): Promise<{
  transfers: TokenTransfer[]
  dividendIncome: DividendRecord[]
  totalClaimed: string
}> {
  const latest = await publicClient.getBlockNumber()
  const transferMap = new Map<string, TokenTransfer>()
  const claimMap = new Map<string, DividendRecord>()

  let endBlock = latest
  let chunksScanned = 0

  while (
    transferMap.size < 20 &&
    chunksScanned < MAX_LOG_CHUNKS &&
    latest - endBlock < MAX_BLOCKS_TO_SCAN
  ) {
    const ranges: { fromBlock: bigint; toBlock: bigint }[] = []

    for (let i = 0; i < PARALLEL_CHUNKS; i++) {
      const toBlock = endBlock - BigInt(i) * LOG_CHUNK_SIZE
      if (toBlock < 0n) break
      const fromBlock =
        toBlock > LOG_CHUNK_SIZE ? toBlock - LOG_CHUNK_SIZE + 1n : 0n
      ranges.push({ fromBlock, toBlock })
      chunksScanned += 1
      if (chunksScanned >= MAX_LOG_CHUNKS) break
    }

    if (ranges.length === 0) break

    const results = await Promise.allSettled(
      ranges.flatMap(({ fromBlock, toBlock }) => [
        fetchLogsInRange(wallet, fromBlock, toBlock, 'in'),
        fetchLogsInRange(wallet, fromBlock, toBlock, 'out'),
      ]),
    )

    const logs = results
      .filter(
        (
          r,
        ): r is PromiseFulfilledResult<
          Awaited<ReturnType<typeof fetchLogsInRange>>
        > => r.status === 'fulfilled',
      )
      .flatMap((r) => r.value)

    if (logs.length > 0) {
      const blockTimestamps = await getBlockTimestamps(
        logs
          .map((log) => log.blockNumber)
          .filter((b): b is bigint => b !== undefined),
      )
      processLogs(
        logs,
        wallet,
        decimals,
        symbol,
        blockTimestamps,
        transferMap,
        claimMap,
      )
    }

    const oldestFrom = ranges[ranges.length - 1]?.fromBlock ?? 0n
    if (oldestFrom === 0n) break
    endBlock = oldestFrom - 1n

    await sleep(CHUNK_DELAY_MS)
  }

  const transfers = [...transferMap.values()]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 20)

  const dividendIncome = [...claimMap.values()]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 10)

  const totalClaimed = dividendIncome.reduce(
    (sum, r) => sum + parseFloat(r.amount),
    0,
  )

  return {
    transfers,
    dividendIncome,
    totalClaimed: totalClaimed.toFixed(4),
  }
}

export async function fetchWalletBalance(
  address: string,
): Promise<WalletData | null> {
  if (!isAddress(address)) return null

  const wallet = address as Address
  const { name, symbol, decimals } = TOKEN_META

  const balance = await publicClient.readContract({
    address: TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [wallet],
  })

  return {
    balance: formatUnits(balance, decimals),
    symbol,
    name,
    decimals,
    transfers: [],
    dividendIncome: [],
    totalDividendBnb: '0.000000',
    totalClaimedTokens: '0.0000',
  }
}

export async function fetchWalletHistory(
  address: string,
): Promise<
  Pick<
    WalletData,
    'transfers' | 'dividendIncome' | 'totalDividendBnb' | 'totalClaimedTokens'
  >
> {
  if (!isAddress(address)) {
    return {
      transfers: [],
      dividendIncome: [],
      totalDividendBnb: '0.000000',
      totalClaimedTokens: '0.0000',
    }
  }

  const wallet = address as Address
  const { symbol, decimals } = TOKEN_META

  try {
    const history = await getHistoryFromChain(wallet, decimals, symbol)
    return {
      transfers: history.transfers,
      dividendIncome: history.dividendIncome,
      totalDividendBnb: '0.000000',
      totalClaimedTokens: history.totalClaimed,
    }
  } catch (err) {
    console.error('链上交易记录查询失败:', err)
    return {
      transfers: [],
      dividendIncome: [],
      totalDividendBnb: '0.000000',
      totalClaimedTokens: '0.0000',
    }
  }
}

export async function fetchWalletData(
  address: string,
): Promise<WalletData | null> {
  const cacheKey = address.toLowerCase()
  const cached = queryCache.get(cacheKey)
  if (cached && cached.expires > Date.now()) {
    return cached.data
  }

  const balanceData = await fetchWalletBalance(address)
  if (!balanceData) return null

  const history = await fetchWalletHistory(address)
  const data = { ...balanceData, ...history }

  queryCache.set(cacheKey, {
    data,
    expires: Date.now() + CACHE_TTL_MS,
  })

  return data
}

export function txUrl(hash: string): string {
  return `${BSCSCAN_URL}/tx/${hash}`
}
