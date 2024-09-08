import { isValidEnv, loadEnvConfig } from '@repo/config'
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_MULTIBASE_API_KEY: z.string().default(''),
  NEXT_PUBLIC_ENABLE_WALLET_REDIRECT: z.string().default('false'),
  NEXT_PUBLIC_FEAT_NEW_NAV_STRUCT: z.string().default('false'),
  NEXT_PUBLIC_FEAT_PRESALE: z.string().default('false'),
  NEXT_PUBLIC_NEW_SECTIONS: z.string().default('false'),
  NEXT_PUBLIC_LEARN_SECTION: z.string().default('false'),
  NEXT_PUBLIC_NEW_I18N: z.string().default('false'),
  NEXT_PUBLIC_EXPLORATIONS: z.string().default('false'),
  NEXT_PUBLIC_CMS_GRAPHQL_API: z.string().min(1),
  NEXT_PUBLIC_CMS_API_KEY: z.string().min(1),
  APP_ENV: z
    .string()
    .refine(isValidEnv, {
      message: 'Invalid environment value',
    })
    .default(process.env.NEXT_PUBLIC_APP_ENV || 'dev'),
})

const validatedEnv = envSchema.parse(process.env)

export const appConfig = {
  env: validatedEnv.APP_ENV,
  ...loadEnvConfig(validatedEnv.APP_ENV),
  eosRpc: 'https://eos.greymass.com',
  multibase: {
    key: validatedEnv.NEXT_PUBLIC_MULTIBASE_API_KEY,
  },
  features: {
    enableWalletAccess: validatedEnv.NEXT_PUBLIC_ENABLE_WALLET_REDIRECT === 'true',
    newNavStruct: validatedEnv.NEXT_PUBLIC_FEAT_NEW_NAV_STRUCT === 'true',
    presale: validatedEnv.NEXT_PUBLIC_FEAT_PRESALE === 'true',
    sections: validatedEnv.NEXT_PUBLIC_NEW_SECTIONS === 'true',
    learn: validatedEnv.NEXT_PUBLIC_LEARN_SECTION === 'true',
    i18n: validatedEnv.NEXT_PUBLIC_NEW_I18N === 'true',
    explorations: validatedEnv.NEXT_PUBLIC_EXPLORATIONS === 'true',
  },
  datocms: {
    endpoint: validatedEnv.NEXT_PUBLIC_CMS_GRAPHQL_API,
    key: validatedEnv.NEXT_PUBLIC_CMS_API_KEY,
  },
} as const
