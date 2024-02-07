import { ERC20ContractData } from "./types"
import { erc20Abi } from 'abitype/abis'

export const TestnetMBOTSPL : ERC20ContractData = {
  address: '0x5EdB28FBa146371A5f4A1C5812111C887EC9Ae73',
  name: 'MBOTS Prelaunch Token',
  symbol: 'MBOTSPL',
  decimals: 6,
  indexFromBlock: 26677224,
  abi: erc20Abi
}