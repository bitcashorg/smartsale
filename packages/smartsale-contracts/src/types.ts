import type { Abi, Address } from 'abitype';

export interface ContractData {
  abi: Abi;
  address: Address;
  chainId: number
  indexFromBlock: number;
}
export interface ERC20ContractData extends ContractData {
  name: string;
  symbol: string;
  decimals: number;
  image?: string;
}