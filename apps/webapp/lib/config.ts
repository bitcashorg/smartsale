import { SmartsaleEnv, smartsaleEnv } from 'smartsale-env'

const env = (process.env.NEXT_PUBLIC_APP_ENV ||
  'test') as unknown as SmartsaleEnv

export const appConfig = {
  env,
  ...smartsaleEnv[env]
} as const
