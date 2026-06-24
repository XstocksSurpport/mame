import { PENDING_DIVIDEND_MAME } from '../config/constants'
import type { WalletData } from '../lib/token'

interface DashboardProps {
  data: WalletData | null
  address: string
  onClaim: () => void
  claiming: boolean
  canClaim: boolean
  historyLoading?: boolean
  walletConnected?: boolean
}

function formatTime(ts: number): string {
  if (!ts) return '-'
  return new Date(ts * 1000).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatAmount(value: string): string {
  const num = parseFloat(value)
  if (Number.isNaN(num)) return value
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`
  return num.toLocaleString('zh-CN', { maximumFractionDigits: 4 })
}

export function Dashboard({
  data,
  address,
  onClaim,
  claiming,
  canClaim,
  historyLoading = false,
  walletConnected = false,
}: DashboardProps) {
  const showDividend = walletConnected || Boolean(data)
  const mameDividends =
    data?.dividendIncome.filter((item) => item.type === 'claim') ?? []

  if (!data && !walletConnected) {
    return (
      <div className="empty-state">
        <p>输入钱包地址后点击查询</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="main-panel">
        {data ? (
          <>
            <section className="card">
              <div className="card-label">持仓</div>
              <div className="balance-row">
                <span className="balance-value">
                  {formatAmount(data.balance)}
                </span>
                <span className="balance-symbol">{data.symbol}</span>
              </div>
              <p className="token-name">{data.name}</p>
              <p className="address-meta">{address}</p>
            </section>

            <section className="card">
              <div className="card-header">
                <span className="card-label">最近交易</span>
                <span className="card-hint">最近 20 笔</span>
              </div>

              {historyLoading ? (
                <p className="muted loading-text">交易记录加载中...</p>
              ) : data.transfers.length === 0 ? (
                <p className="muted">暂无交易记录</p>
              ) : (
                <ul className="tx-list">
                  {data.transfers.map((tx) => (
                    <li key={`${tx.hash}-${tx.direction}`} className="tx-item">
                      <div className="tx-main">
                        <span
                          className={`tx-badge ${tx.direction === 'in' ? 'in' : 'out'}`}
                        >
                          {tx.direction === 'in' ? '转入' : '转出'}
                        </span>
                        <span className="tx-amount">
                          {tx.direction === 'in' ? '+' : '-'}
                          {formatAmount(tx.value)} {data.symbol}
                        </span>
                      </div>
                      <div className="tx-meta">
                        <span>{formatTime(tx.timestamp)}</span>
                        <a
                          href={`https://bscscan.com/tx/${tx.hash}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          查看
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        ) : (
          <section className="card">
            <p className="muted">持仓数据加载中...</p>
          </section>
        )}
      </div>

      {showDividend && (
        <aside className="side-panel">
          <section className="card dividend-card">
            <div className="card-label">分红收入</div>

            <div className="dividend-stat dividend-highlight">
              <span className="stat-label">待领取分红</span>
              <span className="stat-value pending-value">
                {formatAmount(PENDING_DIVIDEND_MAME)} MAME
              </span>
            </div>

            {data && (
              <div className="dividend-stat">
                <span className="stat-label">已累计领取</span>
                <span className="stat-value">
                  {historyLoading
                    ? '...'
                    : `${formatAmount(data.totalClaimedTokens)} MAME`}
                </span>
              </div>
            )}

            {!historyLoading && mameDividends.length > 0 && (
              <ul className="dividend-list">
                {mameDividends.map((item) => (
                  <li key={item.hash} className="dividend-item">
                    <span>
                      已领取 {formatAmount(item.amount)} {item.symbol}
                    </span>
                    <span className="muted">{formatTime(item.timestamp)}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              type="button"
              className="btn btn-accent btn-full"
              onClick={onClaim}
              disabled={!canClaim || claiming}
            >
              {claiming ? '发起中...' : '领取分红'}
            </button>

            {!canClaim && (
              <p className="hint-text">请先连接钱包</p>
            )}
          </section>
        </aside>
      )}
    </div>
  )
}
