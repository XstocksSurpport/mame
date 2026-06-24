import { useWalletConnect } from '../hooks/useWalletConnect'

function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function Header() {
  const { ready, connectedAddress, isConnected, handleConnect, handleDisconnect } =
    useWalletConnect()

  return (
    <header className="header">
      <div className="brand">
        <span className="brand-dot" />
        <h1>MAME 持仓查询</h1>
      </div>

      <div className="header-actions">
        {!ready ? (
          <button type="button" className="btn btn-outline" disabled>
            加载中...
          </button>
        ) : isConnected && connectedAddress ? (
          <div className="wallet-chip">
            <span>{shortenAddress(connectedAddress)}</span>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => void handleDisconnect()}
            >
              断开
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleConnect}
          >
            连接钱包
          </button>
        )}
      </div>
    </header>
  )
}
