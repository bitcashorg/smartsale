import { useMemo } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import { Fraction, Token } from '@josojo/honeyswap-sdk'
import { prepareWriteContract, writeContract } from '@wagmi/core'

import { decodeOrder } from './Order'
import { useActiveWeb3React } from './index'
import { chainNames } from '../constants'
import EASY_AUCTION_ABI from '../constants/abis/easyAuction/easyAuction.json'
import { AuctionIdentifier } from '../state/orderPlacement/reducer'
import { useOrderActionHandlers } from '../state/orders/hooks'
import { useTransactionAdder } from '../state/transactions/hooks'
import { getEasyAuctionAddress } from '../utils'
import { getLogger } from '../utils/logger'
import { abbreviation } from '../utils/numeral'

const logger = getLogger('useCancelOrderCallback')

export function useCancelOrderCallback(
  auctionIdentifier: AuctionIdentifier,
  biddingToken: Token,
): null | ((orderId: string) => Promise<string>) {
  const { account, chainId } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()
  const { onCancelOrder: actionCancelOrder } = useOrderActionHandlers()
  const { auctionId, chainId: orderChainId } = auctionIdentifier

  return useMemo(() => {
    return async function onCancelOrder(orderId: string) {
      if (!chainId || !account) {
        throw new Error('missing dependencies in onCancelOrder callback')
      }

      if (chainId !== orderChainId) {
        throw new Error(
          `In order to cancel this order, please connect to ${
            chainNames[Number(orderChainId)]
          } network`,
        )
      }

      const decodedOrder = decodeOrder(orderId)

      const { request } = await prepareWriteContract<
        typeof EASY_AUCTION_ABI,
        'cancelSellOrders',
        number
      >({
        // @ts-ignore
        address: getEasyAuctionAddress(chainId || 1),
        // @ts-ignore
        abi: EASY_AUCTION_ABI,
        // @ts-ignore
        functionName: 'cancelSellOrders',
        // @ts-ignore
        args: [auctionId, [orderId]],
      })

      return writeContract(request)
        .then((response) => {
          addTransaction(response, {
            summary:
              'Cancel order selling ' +
              abbreviation(
                new Fraction(
                  decodedOrder.sellAmount.toString(),
                  BigNumber.from(10).pow(biddingToken.decimals).toString(),
                ).toSignificant(2),
              ) +
              ' ' +
              biddingToken.symbol,
          })
          actionCancelOrder(orderId)

          return response.hash
        })
        .catch((error) => {
          logger.error(`Cancelation or gas estimate failed`, error)
          throw error
        })
    }
  }, [
    chainId,
    account,
    auctionId,
    orderChainId,
    addTransaction,
    biddingToken.decimals,
    biddingToken.symbol,
    actionCancelOrder,
  ])
}
