import { TestnetDepositOrder } from 'smartsale-contracts'
import { useWriteContract } from 'wagmi'

interface DepositAndPlaceOrderParams {
  auctionId: number
  minBuyAmounts: number[]
  prevSellOrders: string[]
  allowListCallData: string
  value: string // Amount of USD Cred to send in the transaction
}

export function useDepositAndPlaceOrder({
  auctionId,
  minBuyAmounts,
  prevSellOrders,
  allowListCallData,
  value
}: DepositAndPlaceOrderParams) {
  // const write = useWriteContract({
  //   ...TestnetDepositOrder,
  //   functionName: 'depositAndPlaceOrder',
  //   args: [auctionId, minBuyAmounts, prevSellOrders, allowListCallData]
  // })

  const placeOrder = () => {}

  return { data: [], isError: false, isLoading: false, placeOrder }
}
