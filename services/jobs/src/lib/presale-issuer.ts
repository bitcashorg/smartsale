// import { TestnetBLPL } from '@repo/auction'
import { createWalletClient, erc20Abi, formatUnits } from 'viem'
import { http, type Address, isAddress } from 'viem'
import { z } from 'zod'
import { eosEvmTestnet } from '../../../../packages/chains'
import { insertTransaction } from './supabase'

const envSchema = z.object({
  ISSUER_KEY: z
    .string()
    .length(64)
    .regex(/^[a-f0-9]+$/i, 'Invalid issuer key format'),
  ISSUER_ADDRESS: z.string().refine(isAddress, 'Invalid issuer address'),
})

/**
 * Issues presale tokens to a specified address.
 * @param to The address to receive the presale tokens
 * @param amount The amount of presale tokens to issue
 */
export async function issuePresaleTokens(to: Address, amount: bigint) {
  try {
    const parsedEnv = envSchema.safeParse(process.env)
    if (!parsedEnv.success)
      throw new Error(`Environment validation failed: ${parsedEnv.error.message}`)
    const walletClient = createWalletClient({
      chain: eosEvmTestnet,
      transport: http(),
      key: parsedEnv.data.ISSUER_KEY,
      account: parsedEnv.data.ISSUER_ADDRESS,
    })
    const trxHash = await walletClient.writeContract({
      address: TestnetBLPL.address,
      abi: TestnetBLPL.abi,
      functionName: 'transfer',
      args: [to, amount],
      account: parsedEnv.data.ISSUER_ADDRESS,
    })
    console.log(
      `Issued ${formatUnits(amount, 6)} tokens to ${to} on transaction ${trxHash}`,
    )

    await insertTransaction({
      hash: trxHash,
      chain_id: TestnetBLPL.chainId,
      chain_type: TestnetBLPL.chainType,
      trx_type: 'presale_token_issuance',
    })
    return trxHash
  } catch (error) {
    console.error(error)
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
