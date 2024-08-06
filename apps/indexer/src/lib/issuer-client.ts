import { http, createPublicClient, PublicClient, createWalletClient } from 'viem'
import { appenv } from '../config'
import { eosEvmTestnet } from 'app-env'

export const walletClient = createWalletClient({
  chain: eosEvmTestnet,
  transport: http(),
  key: appenv.evm.issuerKey,
  account: appenv.evm.issuerAccount,
})

export async function getCurrentBlockHeight() {
  try {
    const client = createPublicClient({
      chain: eosEvmTestnet,
      transport: http(),
    })
    const blockNumber = await client.getBlockNumber()
    return blockNumber
  } catch (error) {
    console.error('Failed to fetch current block height:', error)
    throw error // Rethrow the error for handling upstream
  }
}
