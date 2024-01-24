import {type Abi, type Address} from 'viem'

export interface ERC20Data {
  abi:Abi, 
  address: Address, 
  name:string,
  symbol:string,
  decimals: number
  image?: string
}