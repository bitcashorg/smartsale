import { TestnetBLPL } from '@repo/auction'
import { eosEvmTestnet } from '@repo/chains'
import { createWalletClient } from 'viem'
import { http, type Address } from 'viem'
import { appConfig } from '~/config'

export async function issuePresaleTokens(to: Address, amount: bigint) {
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
      address: TestnetBLPL.address,
      abi: TestnetBLPL.abi,
      functionName: 'issue',
      args: [to, amount],
    })
  } catch (error) {
    console.log((error as Error).message)
    return null
  }
}
