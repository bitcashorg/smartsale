import type { Abi, Address } from 'abitype';

export interface ContractDataParams {
  abi: Abi;
  address: Address;
  indexFromBlock: number;
}

export const createContractData = (params: ContractDataParams) => {
  return { ...params, getEvents: () => params.abi.filter(item => item.type === 'event') };
};

export interface ERC20ContractDataParams extends ContractDataParams {
  name: string;
  symbol: string;
  decimals: number;
  image?: string;
}

export const createERC20ContractData = ({ abi, address, indexFromBlock, ...erc20params }: ERC20ContractDataParams) => {
  return {
    ...createContractData({ abi, address, indexFromBlock }),
    ...erc20params
  };
};


export type ERC20ContractData = ReturnType<typeof createERC20ContractData>
export type ContractData = ReturnType<typeof createContractData>
