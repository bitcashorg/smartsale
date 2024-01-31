import { http, createPublicClient } from 'viem'
import { eosEvmTestnet } from 'smartsale-chains'

export const client = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})
