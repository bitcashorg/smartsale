export * from "./auction/testnet-easy-auction";
export * from "./auction/testnet-deposit-order";
export * from "./tokens/testnet-usd-cred";
export * from "./tokens/testnet-mbots-prelaunch";
export * from "./tokens/sepolia-usdt";
export * from "./tokens/testnet-usdt";
export * from "./tokens/eos-fake-bitusd";
export * from "./tokens/eos-fake-usdt";

import { TestnetEasyAuction } from "./auction/testnet-easy-auction";
import { TestnetDepositOrder } from "./auction/testnet-deposit-order";
import { TestnetUSDCred } from "./tokens/testnet-usd-cred";
import { TestnetMBOTSPL } from "./tokens/testnet-mbots-prelaunch";
import { SepoliaUSDT } from "./tokens/sepolia-usdt";
import { TestnetUSDT } from "./tokens/testnet-usdt";
import { EOSFakeBITUSD } from "./tokens/eos-fake-bitusd";
import { EOSFakeUSDT } from "./tokens/eos-fake-usdt";
import {ContractData, EOSTokenContractData, EVMTokenContractData} from '../types';

 const evmTokens: EVMTokenContractData[]  = [
  TestnetUSDCred,
  TestnetMBOTSPL,
  SepoliaUSDT,
  TestnetUSDT,
]

const eosTokens: EOSTokenContractData[] = [
    EOSFakeBITUSD,
  EOSFakeUSDT,
]

 const auctions: ContractData[] = [
  TestnetEasyAuction,
  TestnetDepositOrder,
]

export const devContracts = {
  tokens: {
    evm: evmTokens,
    eos: eosTokens
  },
  auctions
}