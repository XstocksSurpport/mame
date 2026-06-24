import { createPublicClient, fallback, http } from 'viem'
import { bsc } from 'viem/chains'
import { BSC_RPC_URL } from '../config/constants'

export const publicClient = createPublicClient({
  chain: bsc,
  transport: fallback([
    http(BSC_RPC_URL),
    http('https://bsc-dataseed.binance.org'),
  ]),
})
