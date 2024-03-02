import { http, createPublicClient, PublicClient } from 'viem'
import { sepolia } from 'viem/chains'
import { eosEvmTestnet } from 'smartsale-chains'
import { appenv } from './config'

export const client: PublicClient = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})

export const sepoliaClient: PublicClient = createPublicClient({
  chain: {
    ...sepolia,
    rpcUrls: {
      default: {
        http: [appenv.evm.sepoliaApi],
      },
    },
  },
  transport: http(),
})
