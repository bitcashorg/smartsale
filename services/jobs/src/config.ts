import { isValidEnv, loadEnvConfig } from '@repo/config'
import type { Address } from 'viem'
import { z } from 'zod'

const envSchema = z
  .string()
  .refine(isValidEnv, {
    message: 'Invalid environment value',
  })
  .default(process.env.NEXT_PUBLIC_APP_ENV || 'dev')

const validatedEnv = envSchema.parse(process.env)

export const appConfig = {
  env: validatedEnv,
  ...loadEnvConfig(validatedEnv),
} as const
