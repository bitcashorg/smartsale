import { getValidSmartsaleEnv, smartsaleEnv } from 'smartsale-env'

const env = getValidSmartsaleEnv(process.env.NEXT_PUBLIC_APP_ENV || 'test')

export const appConfig = {
  env,
  eosRpc: 'https://eos.greymass.com',
  ...smartsaleEnv[env]
} as const
