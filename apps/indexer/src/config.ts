//TODO: add cofig validation

export const appenv = {
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
    sepoliaApi: process.env.SEPOLIA_RPC || '',
  },
}
