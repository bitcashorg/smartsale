import { TestnetDepositOrder } from 'smartsale-contracts'
import { useWriteContract } from 'wagmi'

interface DepositAndPlaceOrderParams {
  auctionId: number
  minBuyAmounts: number[]
  prevSellOrders: string[]
  allowListCallData: string
  value: string // Amount of USD Cred to send in the transaction
}

export function useDepositAndPlaceOrder() {
  const { writeContract, ...tanstack } = useWriteContract()
  console.log('tanstack', tanstack)

  const placeOrder = async ({
    auctionId,
    minBuyAmounts,
    prevSellOrders,
    allowListCallData,
    value
  }: DepositAndPlaceOrderParams) => {
    console.log('placing order....', {
      auctionId,
      minBuyAmounts,
      prevSellOrders,
      allowListCallData,
      value
    })
    writeContract({
      ...TestnetDepositOrder,
      functionName: 'depositAndPlaceOrder',
      args: [auctionId, minBuyAmounts, prevSellOrders, allowListCallData]
    })
  }

  return { ...tanstack, placeOrder }
}
