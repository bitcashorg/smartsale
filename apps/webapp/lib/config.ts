import { getValidSmartsaleEnv, smartsaleEnv } from 'app-env'

const env = getValidSmartsaleEnv(process.env.NEXT_PUBLIC_APP_ENV || 'dev')

export const appConfig = {
  env,
  eosRpc: 'https://eos.greymass.com',
  features: {
    enableWalletAccess:
      process.env.NEXT_PUBLIC_ENABLE_WALLET_REDIRECT === 'true',
    newNavStruct: process.env.NEXT_PUBLIC_FEAT_NEW_NAV_STRUCT === 'true',
    presale: process.env.NEXT_PUBLIC_FEAT_PRESALE === 'true',
    sections: process.env.NEXT_PUBLIC_NEW_SECTIONS === 'true',
    learn: process.env.NEXT_PUBLIC_LEARN_SECTION === 'true',
    i18n: process.env.NEXT_PUBLIC_NEW_I18N === 'true',
    explorations: process.env.NEXT_PUBLIC_EXPLORATIONS === 'true'
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

// console.log('🧑🏻‍💻 appConfig', appConfig)
