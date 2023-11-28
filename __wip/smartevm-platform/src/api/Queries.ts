export const GET_DETAILS_OF_MOST_INTERESTING_AUCTIONS = `
query DetailsOfMostInterestingAuctions($currentTimeStamp: BigInt, $count: Int) {
    auctionDetails(
    first: $count
    where: {endTimeTimestamp_gt: $currentTimeStamp}
    orderBy: interestScore
    ) {
        id
        chainId
        addressAuctioningToken
        addressBiddingToken
        allowListManager
        allowListSigner
        auctionId
        decimalsBiddingToken
        endTimeTimestamp
        decimalsAuctioningToken
        currentClearingPrice
        currentBiddingAmount
        interestScore
        isAtomicClosureAllowed
        minFundingThreshold
        isPrivateAuction
        minimumBiddingAmountPerOrder
        exactOrder {
          price
          volume
          buyAmount
          sellAmount
        }
        orderCancellationEndDate
        symbolAuctioningToken
        startingTimeStamp
        usdAmountTraded
        symbolBiddingToken
    }
}
`

export const GET_DETAILS_OF_MOST_INTERESTING_CLOSED_AUCTIONS = `
query DetailsOfMostInterestingClosedAuctions($currentTimeStamp: BigInt, $count: Int) {
    auctionDetails(
      first: $count
      where: {endTimeTimestamp_lt: $currentTimeStamp}
      orderBy: interestScore
      orderDirection: asc
    ) {
      id
      chainId
      addressAuctioningToken
      addressBiddingToken
      allowListManager
      allowListSigner
      auctionId
      decimalsBiddingToken
      endTimeTimestamp
      decimalsAuctioningToken
      currentClearingPrice
      currentBiddingAmount
      interestScore
      isAtomicClosureAllowed
      minFundingThreshold
      isPrivateAuction
      minimumBiddingAmountPerOrder
      exactOrder {
        price
        volume
        buyAmount
        sellAmount
      }
      orderCancellationEndDate
      symbolAuctioningToken
      startingTimeStamp
      usdAmountTraded
      symbolBiddingToken
    }
  }  
`

export const GET_ALL_AUCTION_DETAILS = `
query AllAuctionDetails {
    auctionDetails(orderBy: auctionId, orderDirection: desc) {
      id
      chainId
      addressAuctioningToken
      addressBiddingToken
      allowListManager
      allowListSigner
      auctionId
      decimalsBiddingToken
      endTimeTimestamp
      decimalsAuctioningToken
      currentClearingPrice
      currentBiddingAmount
      interestScore
      isAtomicClosureAllowed
      minFundingThreshold
      isPrivateAuction
      minimumBiddingAmountPerOrder
      order: exactOrder {
        price
        volume
      }
      orderCancellationEndDate
      symbolAuctioningToken
      startingTimeStamp
      usdAmountTraded
      symbolBiddingToken
    }
  }
`

export const GET_ORDER_BOOK_DISPLAY = `
  query GetOrderbookDisplay($id: ID) {
    asks: auctionDetail(id: $id) {
      exactOrder {
        id
        price
        volume
      }
    }
    bids: auctionDetail(id: $id) {
      orders(orderBy: price, orderDirection: desc) {
        price
        volume
      }
    }
  }
`

export const GET_AUCTION_DETAIL = `
  query GetAuctionDetail($id: ID) {
    auctionDetail(id: $id) {
      addressAuctioningToken
      addressBiddingToken
      allowListManager
      allowListSigner
      auctionId
      chainId
      currentBiddingAmount
      currentClearingPrice
      decimalsAuctioningToken
      decimalsBiddingToken
      endTimeTimestamp
      id
      interestScore
      isAtomicClosureAllowed
      isPrivateAuction
      minFundingThreshold
      minimumBiddingAmountPerOrder
      order: exactOrder {
        price
        volume
      }
      orderCancellationEndDate
      startingTimeStamp
      symbolAuctioningToken
      symbolBiddingToken
      usdAmountTraded
      exactOrder {
        buyAmount
        sellAmount
        price
        volume
      }
    }
  }
`

export const GET_USER_ORDERS = `
  query GetUserOrders($auctionId: ID, $userAddress: Bytes) {
    auctionDetail(id: $auctionId) {
      orders(where: {userAddress: $userAddress}) {
        sellAmount
        userAddress
        userId
        buyAmount
      }
    }
  }
`

export const GET_USER_ORDERS_WITHOUT_CLAIMED = `
  query GetUserOrdersWithoutClaimed($auctionId: ID, $userId: ID) {
    auctionDetail(id: $auctionId) {
      ordersWithoutClaimed(where: {userId: $userId}) {
        buyAmount
        sellAmount
      }
    }
  }
`

export const GET_CLEARING_ORDER_AND_VOLUME = `
  query GetClearingOrderAndVolume($id: ID) {
    auctionDetail(id: $id) {
      currentBiddingAmount
      currentClearingOrderBuyAmount
      currentClearingOrderSellAmount
      currentVolume
      exactOrder {
        sellAmount
        buyAmount
      }
    }
  }
`

export const GET_PREVIOUS_ORDER = `
  query GetPreviousOrder($id: ID, $price: String) {
    auctionDetail(id: $id) {
      ordersWithoutClaimed(orderBy: price, orderDirection: asc, where: {price_gt: $price}) {
        buyAmount
        sellAmount
        userId
        price
        volume
      }
    }
  }
`

export const GET_ALL_AUCTION_DETAILS_WITH_USER_PARTICIPATION = `
  query GetAuctionDetailsWithUserParticipation($userAddress: Bytes) {
    auctionDetails(orderBy: auctionId, orderDirection: desc) {
      addressAuctioningToken
      addressBiddingToken
      allowListManager
      allowListSigner
      auctionId
      chainId
      currentBiddingAmount
      currentClearingOrderBuyAmount
      currentClearingOrderSellAmount
      currentClearingPrice
      currentVolume
      decimalsAuctioningToken
      endTimeTimestamp
      decimalsBiddingToken
      id
      interestScore
      isAtomicClosureAllowed
      isPrivateAuction
      minFundingThreshold
      minimumBiddingAmountPerOrder
      orderCancellationEndDate
      exactOrder {
        buyAmount
        sellAmount
        price
      }
      startingTimeStamp
      symbolAuctioningToken
      symbolBiddingToken
      usdAmountTraded
      orders(where: {userAddress: $userAddress}) {
        buyAmount
        sellAmount
        price
      }
    }
  }
`

export const GET_USER_ID = `
  query GetUserId($address: Bytes) {
    users(where: {address: $address}) {
      id
    }
  }
`
