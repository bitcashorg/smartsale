import { http, createPublicClient, PublicClient } from 'viem'
import { eosEvmTestnet } from 'smartsale-chains'

export const client: PublicClient = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})
