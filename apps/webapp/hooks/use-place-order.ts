import { TestnetDepositOrder } from 'smartsale-abis'
import { useContractWrite } from 'wagmi'

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
  const { data, isError, isLoading, write } = useContractWrite({
    ...TestnetDepositOrder,
    functionName: 'depositAndPlaceOrder',
    args: [auctionId, minBuyAmounts, prevSellOrders, allowListCallData]
  })

  const placeOrder = () => {
    if (write) {
      write()
    }
  }

  return { data, isError, isLoading, placeOrder }
}
