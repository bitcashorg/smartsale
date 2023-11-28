import { useCallback, useMemo } from 'react'

import { TokenAmount } from '@josojo/honeyswap-sdk'
import { SendTransactionResult } from '@wagmi/core'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { useActiveWeb3React } from './index'
import ERC20_ABI from '../constants/abis/erc20.json'
import { useTokenAllowance } from '../data/Allowances'
import { useHasPendingApproval, useTransactionAdder } from '../state/transactions/hooks'
import { ChainId, isTokenWETH, isTokenWMATIC, isTokenXDAI } from '../utils'
import { getLogger } from '../utils/logger'

const logger = getLogger('useApproveCallback')

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  amountToApprove?: TokenAmount,
  addressToApprove?: string,
  chainId?: ChainId,
): [ApprovalState, () => Promise<void>] {
  const { account } = useActiveWeb3React()

  const currentAllowance = useTokenAllowance(amountToApprove?.token, account, addressToApprove)
  const pendingApproval = useHasPendingApproval(amountToApprove?.token?.address, addressToApprove)

  const { config } = usePrepareContractWrite({
    // @ts-ignore
    address: amountToApprove?.token?.address,
    // @ts-ignore
    abi: ERC20_ABI,
    // @ts-ignore
    functionName: 'approve',
    args: [addressToApprove, amountToApprove?.raw.toString()],
    // args: [addressToApprove, amountToApprove?.raw.toString()],
  })
  const { writeAsync } = useContractWrite(config)

  // check the current approval status
  const approval = useMemo(() => {
    if (!amountToApprove) return ApprovalState.UNKNOWN
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN
    // amountToApprove will be defined if currentAllowance is
    if (
      isTokenXDAI(amountToApprove?.token?.address, chainId) ||
      isTokenWETH(amountToApprove?.token?.address, chainId) ||
      isTokenWMATIC(amountToApprove?.token?.address, chainId)
    ) {
      return ApprovalState.APPROVED
    }
    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED
  }, [amountToApprove, currentAllowance, pendingApproval, chainId])

  const addTransaction = useTransactionAdder()

  const approve = useCallback(async (): Promise<void> => {
    if (approval !== ApprovalState.NOT_APPROVED) {
      logger.error('approve was called unnecessarily')
      return
    }

    if (!writeAsync) {
      logger.error('tokenContract is null')
      return
    }

    if (!amountToApprove) {
      logger.error('missing amount to approve')
      return
    }

    if (!addressToApprove) {
      logger.error('missing address to approve')
      return
    }

    return writeAsync()
      .then((response: SendTransactionResult) => {
        addTransaction(response, {
          summary: 'Approve ' + amountToApprove?.token?.symbol,
          approval: { tokenAddress: amountToApprove.token.address, spender: addressToApprove },
        })
      })
      .catch((error: Error) => {
        logger.debug('Failed to approve token', error)
        throw error
      })
  }, [approval, addressToApprove, amountToApprove, addTransaction, writeAsync])

  return [approval, approve]
}
