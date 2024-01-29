if (!String(process.env.DFUSE_API_KEY)) {
  console.error('DFUSE_API_KEY is not defined')
  process.exit(1)
}

export const serverEnv = {
  dfuse: {
    apiKey: process.env.DFUSE_API_KEY,
    rpc: process.env.DFUSE_API_RPC || 'eos.dfuse.eosnation.io',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  supabase: {},
}
