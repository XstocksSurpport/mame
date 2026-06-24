import { createPublicClient, fallback, http } from 'viem'
import { bsc } from 'viem/chains'
import { BSC_RPC_URL } from '../config/constants'

export const publicClient = createPublicClient({
  chain: bsc,
  transport: fallback([
    http('https://bsc.drpc.org'),
    http(BSC_RPC_URL),
    http('https://bsc-dataseed1.bnbchain.org'),
  ]),
})

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export { sleep }
