import { useCallback } from 'react'

import { prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core'
import dayjs from 'dayjs'
import { encodeAbiParameters, parseAbiParameters, parseUnits } from 'viem'
import { useAccount, useBalance, useContractRead, useNetwork } from 'wagmi'

import { useAuctionForm } from './useAuctionForm'
import EASY_AUCTION_ABI from '../constants/abis/easyAuction/easyAuction.json'
import ERC20_ABI from '../constants/abis/erc20.json'
import { useTransactionAdder } from '../state/transactions/hooks'
import { ALLOW_LIST_OFF_CHAIN_MANAGED, getEasyAuctionAddress } from '../utils'
import { getLogger } from '../utils/logger'

const logger = getLogger('useSubmitAuction')

type ValuesToSend = [
  string,
  string,
  string,
  string,
  BigInt,
  BigInt,
  BigInt,
  BigInt,
  boolean,
  string,
  string,
]
export const useSubmitAuction = () => {
  const { address } = useAccount()
  const { getValues } = useAuctionForm()
  const { chain } = useNetwork()
  const addTransaction = useTransactionAdder()

  const chainId = chain?.id as number
  const { auctioningTokenAddress, biddingTokenAddress } = getValues()

  const {
    data: auctioningTokenData,
    isError: isErrorFetchingAuctionBalance,
    isFetching: isFetchingAuctionBalance,
  } = useBalance({
    // @ts-ignore
    address,
    // @ts-ignore
    token: auctioningTokenAddress,
    enabled: !!auctioningTokenAddress,
  })

  const {
    data: biddingTokenData,
    isError: isErrorFetchingBiddingBalance,
    isFetching: isFetchingBiddingBalance,
  } = useBalance({
    // @ts-ignore
    address,
    // @ts-ignore
    token: biddingTokenAddress,
    enabled: !!biddingTokenAddress,
  })

  const { data: allowance } = useContractRead({
    // @ts-ignore
    address: auctioningTokenAddress,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: [address, getEasyAuctionAddress(chainId)],
    watch: true,
    enabled: !!auctioningTokenAddress,
  })

  const initiateNewAuction = useCallback(async () => {
    const {
      allowListData,
      auctionEndDate,
      auctionedSellAmount: sellAmount,
      auctioningTokenAddress,
      biddingTokenAddress,
      isAtomicClosureAllowed,
      isWhiteListingProcessUsed,
      minBuyAmount,
      minimumBiddingAmountPerOrder: minBuyAmountPerOrder,
      minimumFundingThreshold: minFundingThreshold,
      orderCancellationEndDate,
    } = getValues()

    if (isErrorFetchingAuctionBalance || isErrorFetchingBiddingBalance) {
      logger.error('InitiateNewAuction called without tokens')
      return
    }

    if (!auctioningTokenData) {
      logger.error('AuctioningTokenData not found')
      return
    }

    if (!biddingTokenData) {
      logger.error('BiddingTokenData not found')
      return
    }

    if (allowance === undefined) {
      logger.error('Allowance not found')
      return
    }

    const minBuyAmountInAtoms = parseUnits(minBuyAmount as `${number}`, biddingTokenData.decimals)
    const minBuyAmountPerOrderInAtoms = parseUnits(
      minBuyAmountPerOrder as `${number}`,
      biddingTokenData?.decimals,
    )
    const minFundingThresholdInAtoms = parseUnits(
      minFundingThreshold as `${number}`,
      biddingTokenData?.decimals,
    )
    const sellAmountInAtoms = parseUnits(sellAmount as `${number}`, auctioningTokenData.decimals)

    const auctionEndDateDayjs = dayjs(auctionEndDate)
    const orderCancellationEndDateDayjs = dayjs(orderCancellationEndDate)

    if ((allowance as bigint) < sellAmountInAtoms) {
      const { request } = await prepareWriteContract({
        // @ts-ignore
        address: auctioningTokenAddress,
        // @ts-ignore
        abi: ERC20_ABI,
        // @ts-ignore
        functionName: 'approve',
        // @ts-ignore
        args: [getEasyAuctionAddress(chainId || 1), sellAmountInAtoms],
      })

      const response = await writeContract(request)

      addTransaction(response, {
        summary: 'Approve ' + auctioningTokenData?.symbol,
        approval: {
          tokenAddress: auctioningTokenAddress,
          spender: getEasyAuctionAddress(chainId || 1),
        },
      })
      const data = await waitForTransaction({
        hash: response.hash,
        timeout: 60_000, // 2 seconds
      })
      if (!data) {
        logger.error('Transaction failed')
        return
      }
    }

    if (!chainId) {
      logger.error('ChainId not found')
      return
    }
    const valuesToSend: ValuesToSend = [
      auctioningTokenAddress,
      biddingTokenAddress,
      orderCancellationEndDateDayjs.unix().toString(),
      auctionEndDateDayjs.unix().toString(),
      sellAmountInAtoms,
      minBuyAmountInAtoms,
      minBuyAmountPerOrderInAtoms,
      minFundingThresholdInAtoms,
      !!isAtomicClosureAllowed,
      isWhiteListingProcessUsed
        ? // @ts-ignore
          ALLOW_LIST_OFF_CHAIN_MANAGED[chainId]
        : '0x0000000000000000000000000000000000000000',
      isWhiteListingProcessUsed
        ? // @ts-ignore
          encodeAbiParameters(parseAbiParameters('address'), [allowListData])
        : '0x',
    ]

    const { request } = await prepareWriteContract({
      // @ts-ignore
      address: getEasyAuctionAddress(chainId || 1),
      // @ts-ignore
      abi: EASY_AUCTION_ABI,
      // @ts-ignore
      functionName: 'initiateAuction',
      // @ts-ignore
      args: valuesToSend,
    })

    return writeContract(request)
      .then((response) => {
        console.log('writting to the contract! Response', response)
        addTransaction(response, {
          summary: `Auctioned ${sellAmount} ${auctioningTokenData.symbol} for ${minBuyAmount} ${biddingTokenData?.symbol}.`,
        })
        return response.hash
      })
      .catch((error) => {
        logger.error(error)
      })
  }, [
    addTransaction,
    auctioningTokenData,
    biddingTokenData,
    allowance,
    chainId,
    isErrorFetchingAuctionBalance,
    isErrorFetchingBiddingBalance,
    getValues,
  ])

  return {
    isError: isErrorFetchingAuctionBalance || isErrorFetchingBiddingBalance,
    isLoading: isFetchingAuctionBalance || isFetchingBiddingBalance,
    initiateNewAuction,
  }
}
