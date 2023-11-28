import { BigNumber } from '@ethersproject/bignumber'

import { encodeOrder } from '../hooks/Order'
import { AuctionInfo } from '../hooks/useAllAuctionInfos'
import { AuctionInfoDetail } from '../hooks/useAuctionDetails'

const formatAuctionInfoFromApi = (auctionData): AuctionInfo => {
  return {
    auctionId: parseInt(auctionData.auctionId),
    order: {
      price: parseFloat(auctionData.exactOrder.price),
      volume: parseFloat(auctionData.exactOrder.volume),
    },
    exactOrder: encodeOrder({
      sellAmount: BigNumber.from(auctionData.exactOrder.sellAmount),
      buyAmount: BigNumber.from(auctionData.exactOrder.buyAmount),
      userId: BigNumber.from(0),
    }),
    symbolAuctioningToken: auctionData.symbolAuctioningToken,
    symbolBiddingToken: auctionData.symbolBiddingToken,
    addressAuctioningToken: auctionData.addressAuctioningToken,
    addressBiddingToken: auctionData.addressBiddingToken,
    decimalsAuctioningToken: auctionData.decimalsAuctioningToken,
    decimalsBiddingToken: auctionData.decimalsBiddingToken,
    endTimeTimestamp: parseInt(auctionData.endTimeTimestamp),
    orderCancellationEndDate: parseInt(auctionData.orderCancellationEndDate),
    startingTimestamp: parseInt(auctionData.startingTimeStamp),
    minimumBiddingAmountPerOrder: `0x${parseInt(
      auctionData.minimumBiddingAmountPerOrder,
      10,
    ).toString(16)}`,
    minFundingThreshold: `0x${parseInt(auctionData.minFundingThreshold, 10).toString(16)}`,
    allowListManager: auctionData.allowListManager,
    allowListSigner: auctionData.allowListSigner,
    currentClearingPrice: parseFloat(auctionData.currentClearingPrice),
    currentBiddingAmount: `0x${parseInt(auctionData.currentBiddingAmount, 10).toString(16)}`,
    isPrivateAuction: auctionData.isPrivateAuction,
    chainId: auctionData.chainId,
    interestScore: parseFloat(auctionData.interestScore),
    usdAmountTraded: parseFloat(auctionData.usdAmountTraded),
  }
}

const formatAuctionInfoDetailFromApi = (auctionData): AuctionInfoDetail => {
  return {
    ...formatAuctionInfoFromApi(auctionData),
    isAtomicClosureAllowed: auctionData.isAtomicClosureAllowed,
  }
}

export { formatAuctionInfoFromApi, formatAuctionInfoDetailFromApi }
