import type { Address } from 'viem'
import { isAddress } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { z } from 'zod'

const envSchema = z.object({
  ISSUER_KEY: z
    .string()
    .length(64)
    .regex(/^[a-f0-9]+$/i, 'Invalid issuer key format')
    .nullable()
    .optional(),
  ISSUER_ADDRESS: z
    .string()
    .refine(isAddress, 'Invalid issuer address')
    .nullable()
    .optional(),
})

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) {
  console.error(
    `Environment validation failed: ${JSON.stringify(parsedEnv.error.format())}`,
  )
  process.exit(1)
}

export const appConfig = {
  eosEvmApi: 'https://api.testnet.evm.eosnetwork.com',
  issuerKey: parsedEnv.data.ISSUER_KEY,
  issuerAddress: parsedEnv.data.ISSUER_ADDRESS,
  issuerAccount: privateKeyToAccount(`0x${parsedEnv.data.ISSUER_KEY}`),
  supabase: {
    url: 'https://jvpdyxpjpodxsuvhufpw.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cGR5eHBqcG9keHN1dmh1ZnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzMxMDcsImV4cCI6MjAyODcwOTEwN30.KkwK6Px8MG03QPDScsKjLc48GU-RkTs9beT946vD2vI',
  },
} as const
