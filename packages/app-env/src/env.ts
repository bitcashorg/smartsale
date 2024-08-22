import {
  EOSFakeBITUSD,
  EOSFakeUSDT,
  EOSUSDT,
  SepoliaUSDT,
  TestnetUSDT,
  type TokenContractData,
  usdcContracts,
  usdtContracts,
} from 'app-contracts'
import type { Address, Chain } from 'viem'
import { appChains } from './chains'

const prod: SmartsaleEnvConfig = {
  supabase: {
    url: 'https://byqpuulbryhqwvxpoobc.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5cXB1dWxicnlocXd2eHBvb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMjkxNTMsImV4cCI6MjAyODcwNTE1M30.2kikQFX8PhOIzTnojaE0J06E94j92dtpPBI832EktK8',
  },
  chains: appChains.prod,
  esrCallbackUrl: 'https://bitlauncher.ai/api/esr',
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
    bk: 'launchpad.bk',
  },
  stables: [EOSUSDT, ...usdcContracts, ...usdtContracts],
}

const dev: SmartsaleEnvConfig = {
  supabase: {
    url: 'https://jvpdyxpjpodxsuvhufpw.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cGR5eHBqcG9keHN1dmh1ZnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzMxMDcsImV4cCI6MjAyODcwOTEwN30.KkwK6Px8MG03QPDScsKjLc48GU-RkTs9beT946vD2vI',
  },
  chains: appChains.dev,
  esrCallbackUrl: 'https://dev.bitlauncher.ai/api/esr',
  issuer: {
    eos: 'gaboesquivel',
    evm: '0x',
  },
  bitcash: {
    bank: 'bkbbanktest3',
    token: 'bkbtokentest',
    accounts: 'bkbaccountst',
  },
  smartsale: {
    auction: '0x',
    bk: 'bkblaunchpad',
  },
  stables: [EOSFakeBITUSD, EOSFakeUSDT, SepoliaUSDT, TestnetUSDT],
}
// pre production tests
const test: SmartsaleEnvConfig = {
  ...prod,
  // supabase: {
  //   url : 'https://mitkjznioyrucenuzsdb.supabase.co',
  //   anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdGtqem5pb3lydWNlbnV6c2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzA3MzgsImV4cCI6MjAyODcwNjczOH0.uVdiJfaonQfWvL--71QFAdiXGMiN1SRYlYGLNiSuNC0',
  // },
  esrCallbackUrl: 'https://test.bitlauncher.ai/api/esr',
}

// common environment configs
export const smartsaleEnv = {
  prod,
  dev,
  test,
}

// expiclit type to enforce it
export type SmartsaleEnv = keyof typeof smartsaleEnv

// Utility function to validate a string as a valid SmartsaleEnv key
export function isValidSmartsaleEnv(env: string): env is SmartsaleEnv {
  return Object.keys(smartsaleEnv).includes(env)
}

// Utility function that throws an error if the string is not a valid SmartsaleEnv key, otherwise returns the key
export function getValidSmartsaleEnv(env: string): SmartsaleEnv {
  if (isValidSmartsaleEnv(env)) {
    return env as SmartsaleEnv
  } else {
    throw new Error(`Invalid environment: ${env}`)
  }
}

export interface SmartsaleEnvConfig {
  chains: Map<number, Chain>
  issuer: {
    eos: string
    evm: Address
  }
  bitcash: {
    bank: string
    token: string
    accounts: string
  }
  smartsale: {
    auction: Address
    bk: string
  }
  stables: TokenContractData[]
  esrCallbackUrl: string
  supabase: {
    url: string
    anonKey: string
  }
}
