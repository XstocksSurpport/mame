import { useCallback } from 'react'
import { useConnectWallet, usePrivy, useWallets } from '@privy-io/react-auth'

export function useWalletConnect() {
  const { ready, authenticated, login, logout, user } = usePrivy()
  const { connectWallet } = useConnectWallet({
    onError: (error) => {
      console.error('连接钱包失败:', error)
    },
  })
  const { wallets, ready: walletsReady } = useWallets()

  const connectedAddress = authenticated
    ? (wallets[0]?.address ?? user?.wallet?.address ?? null)
    : null

  const isConnected = authenticated && Boolean(connectedAddress)

  const openWalletModal = useCallback(() => {
    login({
      loginMethods: ['wallet'],
    })
  }, [login])

  const connectExternalWallet = useCallback(() => {
    connectWallet({
      walletChainType: 'ethereum-only',
      walletList: [
        'metamask',
        'detected_ethereum_wallets',
        'coinbase_wallet',
        'rainbow',
        'binance',
        'okx_wallet',
        'bybit_wallet',
        'bitget_wallet',
        'wallet_connect',
        'wallet_connect_qr',
      ],
    })
  }, [connectWallet])

  const handleConnect = useCallback(() => {
    if (!ready || !walletsReady) return
    openWalletModal()
  }, [ready, walletsReady, openWalletModal])

  const handleDisconnect = useCallback(async () => {
    for (const wallet of wallets) {
      try {
        wallet.disconnect()
      } catch {
        // MetaMask 等扩展钱包可能不支持程序化断开
      }
    }
    await logout()
  }, [wallets, logout])

  return {
    ready: ready && walletsReady,
    authenticated,
    connectedAddress,
    isConnected,
    wallets,
    handleConnect,
    handleDisconnect,
    connectExternalWallet,
  }
}
