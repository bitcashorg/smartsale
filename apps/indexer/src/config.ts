if (!String(process.env.DFUSE_API_KEY)) {
  console.error('DFUSE_API_KEY is not defined')
  process.exit(1)
}

export const serverEnv = {
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
  },
  supabase: {},
}
