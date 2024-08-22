import { smartsaleEnv } from 'app-env'
import type { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { z } from 'zod'
import { logger } from './lib/logger'

const envSchema = z.object({
  SENTRY_DSN: z.string().min(1),
  DFUSE_API_KEY: z.string().min(1),
  TRIGGER_SECRET_KEY: z.string().min(1),
  SEPOLIA_RPC: z.string().url(),
  ISSUER_KEY: z.string().min(1),
  ISSUER_ADDRESS: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  ALCHEMY_ACTIVITY_SIGNING_KEY: z.string().min(1),
})

let env
try {
  env = envSchema.parse(process.env)
} catch (error) {
  logger.error('Environment validation failed:', error)
  process.exit(1)
}

export const appConfig = {
  sentry: {
    dsn: env.SENTRY_DSN,
  },
  eos: {
    dfuseKey: env.DFUSE_API_KEY,
  },
  trigger: {
    secretKey: env.TRIGGER_SECRET_KEY,
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
    sepoliaApi: env.SEPOLIA_RPC,
    issuerKey: env.ISSUER_KEY,
    issuerAddress: env.ISSUER_ADDRESS as Address,
    issuerAccount: privateKeyToAccount(`0x${env.ISSUER_KEY}`),
    alchemy: {
      activitySigningKey: env.ALCHEMY_ACTIVITY_SIGNING_KEY,
    },
  },
  ...smartsaleEnv.test,
}
