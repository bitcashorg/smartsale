import { getValidSmartsaleEnv, smartsaleEnv } from 'smartsale-env'

const env = getValidSmartsaleEnv(process.env.NEXT_PUBLIC_APP_ENV || 'test')

export const appConfig = {
  env,
  eosRpc: 'https://eos.greymass.com',
  features: {
    enableWalletAccess: process.env.NEXT_PUBLIC_ENABLE_WALLET_REDIRECT === 'true'
  },
  ...smartsaleEnv[env]
} as const

console.log('⚙️⚙️⚙️ appconfig ⚙️⚙️⚙️', appConfig)
