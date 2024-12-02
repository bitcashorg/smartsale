const getEnvVar = (key: string) => process.env[key] || ''

export const AVAILABLE_LANGS = ['en', 'es', 'pt', 'fr', 'vi', 'ko', 'zh']

export const appConfig = {
  supabase: {
    url: getEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    anonKey: getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    serviceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY'),
  },
  chaingraph: {
    url: 'https://chaingraph-hasura-37160526315.us-central1.run.app/v1/graphql',
    key: getEnvVar('CHAINGRAPH_API_KEY'),
  },
  esrCallbackUrl: 'https://test.bitlauncher.ai/api/esr',
  issuer: {
    eos: 'launchpad.bk',
    evm: '0x',
  },
  bitcash: {
    bank: 'bank.bk',
    token: 'token.bk',
    accounts: 'accounts.bk',
  },
  smartsale: {
    auction: '0x',
  },
  eosRpc: 'https://eos.greymass.com',
  trigger: {
    apiKey: getEnvVar('TRIGGER_SECRET_KEY'),
  },
  alchemy: {
    notifyToken: getEnvVar('ALCHEMY_NOTIFY_TOKEN'),
  },
  analytics: {
    google: {
      siteVerification: getEnvVar('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN'),
    },
    pinterest: {
      domainVerification: getEnvVar(
        'NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFICATION_TOKEN',
      ),
    },
    multibase: {
      key: getEnvVar('NEXT_PUBLIC_MULTIBASE_API_KEY'),
    },
  },
  features: {
    wallet: getEnvVar('NEXT_PUBLIC_ENABLE_WALLET_REDIRECT') === 'true',
    newNavStruct: getEnvVar('NEXT_PUBLIC_FEAT_NEW_NAV_STRUCT') === 'true',
    presale: getEnvVar('NEXT_PUBLIC_FEAT_PRESALE') === 'true',
    sections: getEnvVar('NEXT_PUBLIC_NEW_SECTIONS') === 'true',
    learn: getEnvVar('NEXT_PUBLIC_LEARN_SECTION') === 'true',
    i18n: getEnvVar('NEXT_PUBLIC_NEW_I18N') === 'true',
    auction: getEnvVar('NEXT_PUBLIC_FEAT_AUCTION') === 'true',
  },
  datocms: {
    endpoint: getEnvVar('NEXT_PUBLIC_CMS_GRAPHQL_API'),
    key: getEnvVar('NEXT_PUBLIC_CMS_API_KEY'),
  },
} as const
