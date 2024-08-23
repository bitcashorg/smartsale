import { z } from 'zod'
import type { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { isAddress } from 'viem'

const envSchema = z.object({
  ISSUER_KEY: z.string().min(1).length(64).regex(/^[a-f0-9]+$/i, 'Invalid issuer key format'),
  ISSUER_ADDRESS: z.string().refine((value): value is Address => isAddress(value), 'Invalid issuer address'),
})

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) {
  console.error(`Environment validation failed: ${JSON.stringify(parsedEnv.error.format())}`)
  process.exit(1)
}

export const appenv = {
  eosEvmApi: 'https://api.testnet.evm.eosnetwork.com',
  issuerKey: parsedEnv.data.ISSUER_KEY,
  issuerAddress: parsedEnv.data.ISSUER_ADDRESS,
  issuerAccount: privateKeyToAccount(`0x${parsedEnv.data.ISSUER_KEY}`),
}
