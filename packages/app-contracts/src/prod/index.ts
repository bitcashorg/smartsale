
export * from './tokens/eos-usdt'
export * from './tokens/eos-bitusd'
export * from './tokens/usdt'
export * from './tokens/usdc'

import {usdtContracts} from './tokens/usdt'
// import {usdcContracts} from './tokens/usdc'
import {EOSUSDT} from './tokens/eos-usdt';
import {EOSBITUSD} from './tokens/eos-bitusd';
import { ContractData, EOSTokenContractData, EVMTokenContractData } from '../types'

const evmTokens: EVMTokenContractData[] = [
  ...usdtContracts,
  // ...usdcContracts
]

const eosTokens: EOSTokenContractData[] =[
  EOSUSDT,
  EOSBITUSD
]

const auctions:ContractData[] = [

]

export const prodContracts = {
  tokens: {
    evm: evmTokens,
    eos: eosTokens
  },
  auctions
}