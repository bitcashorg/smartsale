import type { Abi, Address } from 'viem'

export type SmartsaleContractName = 'AllowList' | 'DepositOrder' | 'EasyAuction'

export type SmartsaleAddresses = Record<SmartsaleContractName, Address>
export type SmartsaleAbis = Record<SmartsaleContractName, Abi>
