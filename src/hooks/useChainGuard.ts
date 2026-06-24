import { useEffect, useRef } from 'react'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import { BSC_CHAIN_ID } from '../config/constants'

function parseChainId(chainId: string | number | undefined): number | null {
  if (chainId === undefined) return null
  if (typeof chainId === 'number') return chainId
  if (chainId.startsWith('eip155:')) {
    return Number(chainId.split(':')[1])
  }
  const parsed = Number(chainId)
  return Number.isNaN(parsed) ? null : parsed
}

export function useChainGuard() {
  const { ready } = usePrivy()
  const { wallets, ready: walletsReady } = useWallets()
  const switching = useRef(false)

  useEffect(() => {
    if (!ready || !walletsReady || wallets.length === 0 || switching.current) {
      return
    }

    const wallet = wallets[0]

    const ensureBsc = async () => {
      const current = parseChainId(wallet.chainId)
      if (current === BSC_CHAIN_ID) return

      switching.current = true
      try {
        await wallet.switchChain(BSC_CHAIN_ID)
      } catch {
        // User rejected or wallet doesn't support switch
      } finally {
        switching.current = false
      }
    }

    void ensureBsc()
  }, [ready, walletsReady, wallets])
}
