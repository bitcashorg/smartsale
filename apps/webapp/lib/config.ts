import { getValidSmartsaleEnv, smartsaleEnv } from 'smartsale-env'

const env = getValidSmartsaleEnv(process.env.NEXT_PUBLIC_APP_ENV || 'test')

export const appConfig = {
  env,
  eosRpc: 'https://eos.greymass.com',
  features: {
    enableWalletAccess:
      process.env.NEXT_PUBLIC_ENABLE_WALLET_REDIRECT === 'true'
  },
  ...smartsaleEnv[env],
  datocms: {
    endpoint: process.env.NEXT_PUBLIC_CMS_GRAPHQL_API || '',
    key: process.env.NEXT_PUBLIC_CMS_API_KEY || ''
  },
  seo: {
    name: 'Bitlauncher',
    description: ''
  },
  links: {
    twitter: 'https://twitter.com/bitcashorg',
    github: 'https://github.com/bitcashorg',
    docs: 'https://docs.bitcash.org'
  }
} as const
