import { http, createPublicClient, PublicClient, createWalletClient } from 'viem'
import { sepolia } from 'viem/chains'
import { appenv } from './config'
import { eosEvmTestnet } from 'smartsale-env'

export const client: PublicClient = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})

export const walletClient = createWalletClient({
  chain: eosEvmTestnet,
  transport: http(),
  key: appenv.evm.issuerKey,
  account: appenv.evm.issuerAccount,
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

export async function getCurrentBlockHeight() {
  try {
    const blockNumber = await client.getBlockNumber()
    return blockNumber
  } catch (error) {
    console.error('Failed to fetch current block height:', error)
    throw error // Rethrow the error for handling upstream
  }
}
