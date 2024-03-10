import { smartsaleChains } from "./chains"
import { SepoliaUSDT } from 'smartsale-contracts'
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
    auction: '0x'
  },
  usdt: [
    {
      address: 'tethertether',
      chainType: 'antelope',
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      chainName: 'EOS',
    },
  ],
}

const test: SmartsaleEnvConfig = {
  chains: smartsaleChains.test,
  issuer: {
    eos: 'bkblaunchpad',
    evm: '0x'
  },
  bitcash: {
    bank: 'bkbbanktest3',
    token: 'bkbtokentest',
    accounts: 'bkbaccountst',
  },
  smartsale: {
    auction: '0x'
  },
  usdt: [
    {
      address: 'bkbtokentest',
      chainType: 'antelope',
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      chainName: 'EOS',
    },
    { ...SepoliaUSDT, chainType: 'evm' }
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
    },
    usdt: USDTContract[]
  }

  export type USDTContract = {
    address: string | Address
    chainId: number | string 
    chainType: 'evm' | 'antelope'
    chainName?: string
  }