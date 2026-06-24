import {
  erc20Abi,
  formatUnits,
  isAddress,
  type Address,
} from 'viem'
import {
  BSC_CHAIN_ID,
  BSCSCAN_URL,
  CLAIM_ADDRESS,
  EXPLORER_API_BASE,
  TOKEN_ADDRESS,
} from '../config/constants'
import { publicClient } from './client'
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

type TokenTxRow = {
  hash: string
  from: string
  to: string
  value: string
  timeStamp: string
}

const CACHE_TTL_MS = 30_000
const queryCache = new Map<string, { data: WalletData; expires: number }>()

async function fetchExplorer<T>(
  module: string,
  action: string,
  params: Record<string, string>,
): Promise<T[]> {
  const apiKey = import.meta.env.VITE_BSCSCAN_API_KEY
  if (!apiKey) return []

  const query = new URLSearchParams({
    chainid: String(BSC_CHAIN_ID),
    module,
    action,
    ...params,
    apikey: apiKey,
  })

  try {
    const res = await fetch(`${EXPLORER_API_BASE}?${query}`)
    const json = (await res.json()) as {
      status: string
      result: T[] | string
    }

    if (json.status !== '1' || !Array.isArray(json.result)) {
      return []
    }

    return json.result
  } catch {
    return []
  }
}

function parseTransfers(
  rows: TokenTxRow[],
  wallet: Address,
  decimals: number,
): TokenTransfer[] {
  const walletLower = wallet.toLowerCase()

  return rows.map((row) => ({
    hash: row.hash,
    from: row.from,
    to: row.to,
    value: formatUnits(BigInt(row.value), decimals),
    timestamp: Number(row.timeStamp),
    direction:
      row.to.toLowerCase() === walletLower
        ? ('in' as const)
        : ('out' as const),
  }))
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
  const hasApiKey = Boolean(import.meta.env.VITE_BSCSCAN_API_KEY)

  if (!hasApiKey) {
    return {
      transfers: [],
      dividendIncome: [],
      totalDividendBnb: '0.000000',
      totalClaimedTokens: '0.0000',
    }
  }

  const tokenTxs = await fetchExplorer<TokenTxRow>('account', 'tokentx', {
    contractaddress: TOKEN_ADDRESS,
    address: wallet,
    page: '1',
    offset: '20',
    sort: 'desc',
  })

  const claimLower = CLAIM_ADDRESS.toLowerCase()
  const walletLower = wallet.toLowerCase()

  const claimRecords: DividendRecord[] = tokenTxs
    .filter(
      (tx) =>
        tx.from.toLowerCase() === walletLower &&
        tx.to.toLowerCase() === claimLower,
    )
    .map((tx) => ({
      hash: tx.hash,
      amount: formatUnits(BigInt(tx.value), decimals),
      symbol,
      timestamp: Number(tx.timeStamp),
      type: 'claim' as const,
    }))

  const totalClaimed = claimRecords.reduce(
    (sum, r) => sum + parseFloat(r.amount),
    0,
  )

  return {
    transfers: parseTransfers(tokenTxs, wallet, decimals),
    dividendIncome: claimRecords
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10),
    totalDividendBnb: '0.000000',
    totalClaimedTokens: totalClaimed.toFixed(4),
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
