import { Address, Log } from 'viem'

declare global {
  interface BigInt {
    toJSON(): string
  }
}

BigInt.prototype.toJSON = function (): string {
  return String(this)
}

export interface AuctionClearedEvent extends Log {
  eventName: 'AuctionCleared'
  args: {
    auctionId: bigint
    soldAuctioningTokens: bigint
    soldBiddingTokens: bigint
    clearingPriceOrder: string
  }
}

export interface CancellationSellOrderEvent extends Log {
  eventName: 'CancellationSellOrder'
  args: {
    auctionId: bigint
    userId: bigint
    buyAmount: bigint
    sellAmount: bigint
  }
}

export interface ClaimedFromOrderEvent extends Log {
  eventName: 'ClaimedFromOrder'
  args: {
    auctionId: bigint
    userId: bigint
    buyAmount: bigint
    sellAmount: bigint
  }
}

export interface NewAuctionEvent extends Log {
  eventName: 'NewAuction'
  args: {
    auctionId: bigint
    _auctioningToken: Address
    _biddingToken: Address
    orderCancellationEndDate: bigint
    auctionEndDate: bigint
    userId: bigint
    _auctionedSellAmount: bigint
    _minBuyAmount: bigint
    minimumBiddingAmountPerOrder: bigint
    minFundingThreshold: bigint
    allowListContract: Address
    allowListData: Address
  }
}

export interface NewSellOrderEvent extends Log {
  eventName: 'NewSellOrder'
  args: {
    auctionId: bigint
    userId: bigint
    buyAmount: bigint
    sellAmount: bigint
  }
}

export interface NewUserEvent extends Log {
  eventName: 'NewUser'
  args: {
    userId: bigint
    userAddress: string
  }
}

export interface OwnershipTransferredEvent extends Log {
  eventName: 'OwnershipTransferred'
  args: {
    previousOwner: string
    newOwner: string
  }
}

export interface UserRegistrationEvent extends Log {
  eventName: 'UserRegistration'
  args: {
    user: string
    userId: bigint
  }
}
