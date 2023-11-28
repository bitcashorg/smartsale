import { useMemo } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import { Token } from '@josojo/honeyswap-sdk'
import { prepareWriteContract, writeContract } from '@wagmi/core'

import { encodeOrder } from './Order'
import { useActiveWeb3React } from './index'
import { useGetUserId } from './useGetUserId'
import { additionalServiceApi } from '../api'
import DEPOSIT_AND_PLACE_ORDER_ABI from '../constants/abis/easyAuction/depositAndPlaceOrder.json'
import EASY_AUCTION_ABI from '../constants/abis/easyAuction/easyAuction.json'
import { NUMBER_OF_DIGITS_FOR_INVERSION } from '../constants/config'
import { useOrderPlacementState } from '../state/orderPlacement/hooks'
import { AuctionIdentifier } from '../state/orderPlacement/reducer'
import { useOrderbookActionHandlers } from '../state/orderbook/hooks'
import { useOrderActionHandlers } from '../state/orders/hooks'
import { OrderStatus } from '../state/orders/reducer'
import { useTransactionAdder } from '../state/transactions/hooks'
import {
  ChainId,
  DEPOSIT_AND_PLACE_ORDER,
  getEasyAuctionAddress,
  getTokenDisplay,
  isTokenWETH,
  isTokenWMATIC,
  isTokenXDAI,
} from '../utils'
import { getLogger } from '../utils/logger'
import { abbreviation } from '../utils/numeral'
import { convertPriceIntoBuyAndSellAmount, getInverse } from '../utils/prices'

const logger = getLogger('usePlaceOrderCallback')

export const queueStartElement =
  '0x0000000000000000000000000000000000000000000000000000000000000001'
export const queueLastElement = '0xffffffffffffffffffffffffffffffffffffffff000000000000000000000001'

// returns a function that will place an order, if the parameters are all valid
// and the user has approved the transfer of tokens
export function usePlaceOrderCallback(
  auctionIdentifer: AuctionIdentifier,
  signature: string | null,
  isPriceInverted: boolean,
  auctioningToken: Token,
  biddingToken: Token,
): null | (() => Promise<string>) {
  const { account, chainId, library } = useActiveWeb3React()
  const { auctionId } = auctionIdentifer

  const isXdaiWethOrMatic = getIsXdaiWethOrWmatic(biddingToken, chainId)

  const addTransaction = useTransactionAdder()
  const { onNewOrder } = useOrderActionHandlers()
  const { price: priceFromSwapState, sellAmount } = useOrderPlacementState()
  const { onNewBid } = useOrderbookActionHandlers()

  const price = (
    isPriceInverted
      ? getInverse(priceFromSwapState, NUMBER_OF_DIGITS_FOR_INVERSION)
      : priceFromSwapState
  ).toString()

  const userId: Maybe<string> = useGetUserId(account == null ? undefined : account)

  return useMemo(() => {
    let previousOrder: string

    return async function onPlaceOrder() {
      if (!chainId || !library || !account || !signature) {
        throw new Error('missing dependencies in onPlaceOrder callback')
      }

      const { buyAmountScaled, sellAmountScaled } = convertPriceIntoBuyAndSellAmount(
        auctioningToken,
        biddingToken,
        price,
        sellAmount,
      )

      if (sellAmountScaled == undefined || buyAmountScaled == undefined) {
        return 'Price was not correct.'
      }

      try {
        previousOrder = await additionalServiceApi.getPreviousOrder({
          networkId: chainId,
          auctionId,
          price,
          order: {
            buyAmount: buyAmountScaled,
            sellAmount: sellAmountScaled,
            userId: BigNumber.from(0), // Todo: This could be optimized
          },
        })
      } catch (error) {
        logger.error(`Error trying to get previous order for auctionId ${auctionId}`)
      }

      const auctioningTokenDisplay = getTokenDisplay(auctioningToken, chainId)
      const biddingTokenDisplay = getTokenDisplay(biddingToken, chainId)
      const args = isXdaiWethOrMatic
        ? [auctionId, [buyAmountScaled.toString()], [previousOrder], signature ? signature : '0x']
        : [
            auctionId,
            [buyAmountScaled.toString()],
            [sellAmountScaled.toString()],
            [previousOrder],
            signature ? signature : '0x',
          ]

      const { request } = await prepareWriteContract({
        // @ts-ignore
        address: isXdaiWethOrMatic
          ? // @ts-ignore
            DEPOSIT_AND_PLACE_ORDER[chainId]
          : getEasyAuctionAddress(chainId),
        // @ts-ignore
        abi: isXdaiWethOrMatic ? DEPOSIT_AND_PLACE_ORDER_ABI : EASY_AUCTION_ABI,
        // @ts-ignore
        functionName: isXdaiWethOrMatic ? 'depositAndPlaceOrder' : 'placeSellOrders',
        // @ts-ignore
        args,
      })

      return writeContract(request)
        .then((response) => {
          addTransaction(response, {
            summary:
              'Sell ' +
              abbreviation(sellAmount) +
              ' ' +
              biddingTokenDisplay +
              ' for ' +
              abbreviation((parseFloat(sellAmount) / parseFloat(price)).toPrecision(4)) +
              ' ' +
              auctioningTokenDisplay,
          })
          const order = {
            buyAmount: buyAmountScaled,
            sellAmount: sellAmountScaled,
            userId: BigNumber.from(parseInt(userId?.toString() || '0')), // If many people are placing orders, this might be incorrect
          }
          onNewOrder([
            {
              id: encodeOrder(order),
              sellAmount: parseFloat(sellAmount).toString(),
              price: price.toString(),
              status: OrderStatus.PENDING,
              chainId,
            },
          ])
          onNewBid({
            volume: parseFloat(sellAmount),
            price: parseFloat(price),
          })
          return response.hash
        })
        .catch((error) => {
          logger.error('Error writing transaction', error)
          throw error
        })
    }
  }, [
    isXdaiWethOrMatic,
    account,
    addTransaction,
    auctionId,
    auctioningToken,
    biddingToken,
    chainId,
    library,
    onNewBid,
    onNewOrder,
    price,
    sellAmount,
    signature,
    userId,
  ])
}

export const getIsXdaiWethOrWmatic = (
  biddingToken: Token,
  chainId: ChainId | undefined,
): boolean => {
  if (!chainId) return false
  return (
    isTokenXDAI(biddingToken.address, chainId) ||
    isTokenWETH(biddingToken.address, chainId) ||
    isTokenWMATIC(biddingToken.address, chainId)
  )
}
