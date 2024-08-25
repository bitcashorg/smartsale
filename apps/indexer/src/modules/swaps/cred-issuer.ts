import { TestnetUSDCred } from '@repo/contracts'
import { eosEvmTestnet } from 'app-env'
import { createWalletClient } from 'viem'
import { http, type Address } from 'viem'
import { appConfig } from '~/config'

export async function issueTokens(to: Address, amount: bigint) {
  console.log('issueTokens', {
    args: [to, amount],
  })

  try {
    const walletClient = createWalletClient({
      chain: eosEvmTestnet,
      transport: http(),
      key: appConfig.evm.issuerKey,
      account: appConfig.evm.issuerAccount,
    })
    return walletClient.writeContract({
      address: TestnetUSDCred.address,
      abi: TestnetUSDCred.abi,
      functionName: 'issue',
      args: [to, amount],
    })
  } catch (error) {
    console.log((error as Error).message)
    return null
  }
}
