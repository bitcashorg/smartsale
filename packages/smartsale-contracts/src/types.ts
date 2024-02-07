import type { Abi, Address } from 'abitype';

export interface ContractData {
  abi: Abi;
  address: Address;
  indexFromBlock: number;
}
export interface ERC20ContractData extends ContractData {
  name: string;
  symbol: string;
  decimals: number;
  image?: string;
}