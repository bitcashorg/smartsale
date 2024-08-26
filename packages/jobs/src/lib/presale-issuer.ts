// import { TestnetBLPL } from '@repo/contracts'
import { createWalletClient, erc20Abi, formatUnits } from 'viem'
import { http, type Address } from 'viem'
import { appConfig } from '../config'
import { eosEvmTestnet } from '../tmp'

/**
 * Issues presale tokens to a specified address.
 * @param to The address to receive the presale tokens
 * @param amount The amount of presale tokens to issue
 */
export async function issuePresaleTokens(to: Address, amount: bigint) {
  try {
    const walletClient = createWalletClient({
      chain: eosEvmTestnet,
      transport: http(),
      key: appConfig.issuerKey,
      account: appConfig.issuerAccount,
    })
    const trxHash = await walletClient.writeContract({
      address: TestnetBLPL.address,
      abi: TestnetBLPL.abi,
      functionName: 'transfer',
      args: [to, amount],
    })
    return `Issued ${formatUnits(amount, 6)} tokens to ${to} on transaction ${trxHash}`
  } catch (error) {
    console.log((error as Error).message)
    return null
  }
}

export const TestnetBLPL = {
  address: '0x2BF8feebD09B2520E69f27294768774544c98985',
  name: 'Bitlauncher Prelaunch Token',
  symbol: 'BLPL',
  decimals: 18,
  indexFromBlock: 30051449,
  chainId: 15557, // eos_evm
  chainType: 'evm',
  chainName: 'EOS EVM Tesnet',
  chain: eosEvmTestnet,
  abi: erc20Abi,
} as const