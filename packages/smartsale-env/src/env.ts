import { smartsaleChains } from "./chains";
import {
  EOSFakeUSDT,
  EOSUSDT,
  SepoliaUSDT,
  TokenContractData,
  TestnetUSDT,
  EOSFakeBITUSD,
} from "smartsale-contracts";
import { Address, Chain } from "viem";

const prod: SmartsaleEnvConfig = {
  chains: smartsaleChains.prod,
  esrCallbackUrl: 'https://bitlauncher.ai',
  issuer: {
    eos: "launchpad.bk",
    evm: "0x",
  },
  bitcash: {
    bank: "bank.bk",
    token: "token.bk",
    accounts: "accounts.bk",
  },
  smartsale: {
    auction: "0x",
    bk: "launchpad.bk",
  },
  usdt: [EOSUSDT],
};

const test: SmartsaleEnvConfig = {
  chains: smartsaleChains.test,
  esrCallbackUrl: 'https://dev.bitlauncher.ai',
  issuer: {
    eos: "gaboesquivel",
    evm: "0x",
  },
  bitcash: {
    bank: "bkbbanktest3",
    token: "bkbtokentest",
    accounts: "bkbaccountst",
  },
  smartsale: {
    auction: "0x",
    bk: "bkblaunchpad",
  },
  usdt: [EOSFakeBITUSD, EOSFakeUSDT, SepoliaUSDT, TestnetUSDT],
};

const canary: SmartsaleEnvConfig = {
  chains: smartsaleChains.test,
  esrCallbackUrl: 'https://canary.bitlauncher.ai',
  issuer: {
    eos: "gaboesquivel",
    evm: "0x",
  },
  bitcash: {
    bank: "bkbbanktest3",
    token: "bkbtokentest",
    accounts: "bkbaccountst",
  },
  smartsale: {
    auction: "0x",
    bk: "bkblaunchpad",
  },
  usdt: [EOSFakeBITUSD, EOSFakeUSDT, SepoliaUSDT, TestnetUSDT],
};

// common environment configs
export const smartsaleEnv = {
  prod,
  test,
  canary
};

// expiclit type to enforce it
export type SmartsaleEnv = keyof typeof smartsaleEnv

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
  usdt: TokenContractData[]
  esrCallbackUrl: string
}
