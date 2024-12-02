import type { SmartsaleAbis } from '../types/index'
import { AllowListAbi } from './allow-list'
import { DepositOrderAbi } from './deposit-order'
import { EasyAuctionAbi } from './easy-auction'

export const smartsaleAbis: SmartsaleAbis = {
  AllowList: AllowListAbi,
  DepositOrder: DepositOrderAbi,
  EasyAuction: EasyAuctionAbi,
}

export { AllowListAbi, DepositOrderAbi, EasyAuctionAbi }

export * from './testnet-token'
