import { PrivyProvider } from '@privy-io/react-auth'
import { bsc } from 'viem/chains'
import App from './App'

const walletList = [
  'detected_ethereum_wallets',
  'metamask',
  'coinbase_wallet',
  'rainbow',
  'binance',
  'okx_wallet',
  'bybit_wallet',
  'bitget_wallet',
  'wallet_connect',
  'wallet_connect_qr',
] as const

const appId = import.meta.env.VITE_PRIVY_APP_ID

export function Providers() {
  if (!appId) {
    return (
      <div className="setup-error">
        <h2>缺少 Privy App ID</h2>
        <p>
          请在项目根目录创建 <code>.env</code> 文件并设置{' '}
          <code>VITE_PRIVY_APP_ID</code>
        </p>
        <p>
          前往{' '}
          <a href="https://dashboard.privy.io" target="_blank" rel="noreferrer">
            dashboard.privy.io
          </a>{' '}
          创建应用
        </p>
      </div>
    )
  }

  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ['wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#1a1a1a',
          walletChainType: 'ethereum-only',
          walletList: [...walletList],
          showWalletLoginFirst: true,
        },
        defaultChain: bsc,
        supportedChains: [bsc],
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'off',
          },
        },
        externalWallets: {
          walletConnect: {
            enabled: true,
          },
        },
      }}
    >
      <App />
    </PrivyProvider>
  )
}
