import type { Database } from '@repo/supabase'
import {
  http,
  type Address,
  type Chain,
  ContractFunctionExecutionError,
  Hex,
  HttpRequestError,
  createWalletClient,
  encodeFunctionData,
  erc20Abi,
  formatUnits,
  isAddress,
  isHex,
  stringify,
} from 'viem'

import { privateKeyToAccount } from 'viem/accounts'
import { z } from 'zod'
import { insertTransaction } from './supabase'

const envSchema = z.object({
  ISSUER_KEY: z
    .string()
    .length(64)
    .regex(/^[a-f0-9]+$/i, 'Invalid issuer key format'),
  ISSUER_ADDRESS: z
    .string()
    .refine(isAddress, 'Invalid issuer address')
    .transform((value) => value as Address),
})

/**
 * Issues presale tokens to a specified address.
 * @param to The address to receive the presale tokens
 * @param amount The amount of presale tokens to issue
 */
export async function issuePresaleTokens(
  to: Address,
  amount: bigint,
  tokenAddress: Address,
) {
  try {
    const parsedEnv = envSchema.safeParse(process.env)
    if (!parsedEnv.success)
      throw new Error(`Environment validation failed: ${parsedEnv.error.message}`)

    const account = privateKeyToAccount(`0x${parsedEnv.data.ISSUER_KEY}`)

    const walletClient = createWalletClient({
      // key: parsedEnv.data.ISSUER_KEY,
      account,
      chain: eosEvmTestnet, // TODO: make this dynamic based on token data
      transport: http(),
    })

    const trxHash = await walletClient.writeContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'transfer',
      args: [to, amount],
    })

    console.log(
      `Issued ${formatUnits(amount, 6)} tokens to ${to} on transaction ${trxHash}`,
    )

    const result = await insertTransaction({
      hash: trxHash,
      // TODO: make this dynamic based on token.chain_id and chain data
      chain_id: 15557, // eos_evm tesnet,
      chain_type: 'evm',
      trx_type: 'presale_token_issuance',
    })

    if (!result) throw new Error('Failed to insert transaction')

    return trxHash
  } catch (error) {
    console.log('===========================================')
    if (error instanceof ContractFunctionExecutionError) {
      console.error('Contract execution failed:', error.shortMessage)
      // Handle contract-specific errors
    } else if (error instanceof HttpRequestError) {
      console.error('Network request failed:', error.shortMessage)
      // Handle network-related errors
    } else {
      console.error('Unexpected error:')
    }
    console.error(error)
    console.log('===========================================')
    return null
  }
}

// import from packages arent working
export const eosEvmTestnet: Chain = {
  nativeCurrency: {
    name: 'EOS',
    symbol: 'EOS',
    decimals: 18,
  },
  id: 15557,
  name: 'EOS EVM Testnet',
  rpcUrls: {
    default: { http: ['https://api.testnet.evm.eosnetwork.com'] },
    public: { http: ['https://api.testnet.evm.eosnetwork.com'] },
  },
  blockExplorers: {
    default: {
      name: 'EOS EVM Testnet Explorer',
      url: 'https://explorer.testnet.evm.eosnetwork.com',
    },
  },
  testnet: true,
}
