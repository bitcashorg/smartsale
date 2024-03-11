import { smartsaleChains } from "./chains"
import { EOSFakeUSDT, EOSUSDT, SepoliaUSDT, TokenContractData, TestnetUSDT, EOSFakeBITUSD } from 'smartsale-contracts'
import { Address, Chain } from "viem"

const prod: SmartsaleEnvConfig = {
  chains: smartsaleChains.prod,
  issuer: {
    eos: 'launchpad.bk',
    evm: '0x'
  },
  bitcash: {
    bank: 'bank.bk',
    token: 'token.bk',
    accounts: 'accounts.bk',
  },
  smartsale: {
    auction: '0x',
    bk:'launchpad.bk'
  },
  usdt: [EOSUSDT],
}

const test: SmartsaleEnvConfig = {
  chains: smartsaleChains.test,
  issuer: {
    eos: 'gaboesquivel',
    evm: '0x'
  },
  bitcash: {
    bank: 'bkbbanktest3',
    token: 'bkbtokentest',
    accounts: 'bkbaccountst',
  },
  smartsale: {
    auction: '0x',
    bk:'bkblaunchpad'
  },
  usdt: [
    EOSFakeBITUSD,
    EOSFakeUSDT,
    SepoliaUSDT,
    TestnetUSDT
  ],
}

// common environment configs
export const smartsaleEnv = {
  prod,
  test
} as const


export type SmartsaleEnv = typeof smartsaleEnv
// expiclit type to enforce it
export interface SmartsaleEnvConfig  {
    chains: Map<number, Chain>,
    issuer: {
      eos: string,
      evm: Address
    },
    bitcash: {
      bank: string,
      token: string,
      accounts: string,
    },
    smartsale: {
      auction: Address
      bk: string
    },
    usdt: TokenContractData[]
  }