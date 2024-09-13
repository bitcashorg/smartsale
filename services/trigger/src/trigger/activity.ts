import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'
import { type Address, getAddress, hexToBigInt, isAddressEqual, parseUnits } from 'viem'
import { evmTokens } from '../../../../packages/tokens/src/evm'
import { issuePresaleTokens } from '../lib/presale-issuer'
import {
  getPresaleByAddress,
  getPresaleData,
  getProcessedPresaleDeposits,
  isDepositProcessing,
  setPresaleDepositStatus,
  supabase,
  upsertPresaleDeposits,
} from '../lib/supabase'

const STABLECOIN_DECIMALS = 6

export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity[] = payload.event.activity
      console.log(activity)

      for (const txn of activity) {
        // TODOcheck if processing or processed
        const validationResult = await validateTransaction(txn)
        if (!validationResult.isValid) {
          console.error(`Invalid transaction: ${validationResult.errors.join(', ')}`)
          throw new Error(`Invalid transaction: ${validationResult.errors.join(', ')}`)
        }

        // set deposit to processing
        if (!(await processDeposit(txn))) {
          console.error(`Error processing deposit: ${txn.hash}`)
          throw new Error(`Error processing deposit: ${txn.hash}`)
        }

        const transferValue = txn.value
          ? BigInt(txn.value)
          : txn.rawContract?.rawValue
            ? hexToBigInt(txn.rawContract?.rawValue || txn.log?.data || '0x')
            : hexToBigInt('0x')

        console.log('😀', { transferValue })
        const presale = await getPresaleByAddress(txn.toAddress as Address)
        if (!presale) throw new Error('Presale not found')
        if (!presale.project) throw new Error('Project not found')
        if (!presale.project.token_address)
          throw new Error('Project token address not found')
        if (!transferValue) throw new Error('Value not found in alchemy event')

        const valueInTokenUnits = parseUnits(
          transferValue.toString(),
          STABLECOIN_DECIMALS,
        )

        const issuanceHash = await issuePresaleTokens(
          txn.fromAddress,
          valueInTokenUnits,
          presale.project.token_address as Address,
        )
        console.log(issuanceHash)
        if (!issuanceHash) throw new Error('Failed to issue presale tokens')

        //TODO: make sure its upsert
        const updatedPresale = await upsertPresaleDeposits({
          valueInTokenUnits,
          depositHash: txn.hash,
          issuanceHash,
        })

        await setPresaleDepositStatus({
          depositHash: txn.hash,
          state: 'processed',
        })
        console.log('Updated presale', updatedPresale)
      }
    } catch (error) {
      logger.error('Error processing address activity', {
        error: error instanceof Error ? error.message : String(error),
      })
      throw error
    }
  },
})

async function validateTransaction(txn: AlchemyActivity) {
  console.log(
    `Processing transaction ${txn.hash} in contract: ${txn.rawContract?.address || 'unknown'}`,
    txn,
  )
  if (!txn.rawContract?.address) {
    console.error('Missing transaction contract address')
    return { isValid: false, errors: ['Missing transaction contract address'] }
  }
  console.log(
    `Token ${evmTokens.find((token) => isAddressEqual(token.address, getAddress(txn.rawContract?.address)))?.symbol}`,
    txn,
  )

  const presaleByAddress = await getPresaleByAddress(txn.toAddress as Address)
  const txnTokenAddress = txn.rawContract?.address && getAddress(txn.rawContract.address)
  const isSupportedToken =
    txnTokenAddress &&
    evmTokens.some((token) => isAddressEqual(txnTokenAddress, token.address))

  if (!isSupportedToken) {
    console.error(`Unsupported token: ${txnTokenAddress}`)
    return { isValid: false, errors: [`Unsupported token: ${txnTokenAddress}`] }
  }

  // TODO: check if address is registered for presale
  const isRegisteredForPresale = true // await isAddressRegisteredForPresale(txn.fromAddress, 1)
  const presaleData = await getPresaleData({ projectId: 1 })

  // check if deposit has been already processed
  const deposits = await getProcessedPresaleDeposits({
    address: getAddress(txn.fromAddress),
    projectId: 1,
    supabase,
  })
  const isDepositProcessed = await isDepositProcessing({
    depositHash: txn.hash,
    supabase,
  })

  // TODO: check if amount is within the max deposit amount
  const stableCoinDecimals = 6
  const maxAllocationInUnits = presaleData.max_allocation
  const totalDeposits = deposits.reduce((acc, deposit) => acc + Number(deposit.amount), 0)
  const txnValueInUnits = parseUnits(txn.value?.toString() ?? '0', stableCoinDecimals)
  const totalDepositsInUnits = BigInt(totalDeposits)
  const isValidAmount = true
  // const isValidAmount = txnValueInUnits + totalDepositsInUnits >= maxAllocationInUnits

  // TODO: check if deposit is within the presale period
  const currentTimestamp = Date.now()
  const isWithinPresalePeriod = true // currentTimestamp >= Number(presaleData.start_timestamptz) && currentTimestamp <= Number(presaleData.end_timestamptz)

  const errors = [
    isDepositProcessed && 'deposit already processed',
    !presaleByAddress && `to address: ${txn.toAddress}`,
    !isSupportedToken && `token: ${txnTokenAddress}`,
    !txn.log && 'missing transaction log',
    !isRegisteredForPresale && 'address is not registered for presale',
    !isValidAmount &&
      `amount exceeds max allocation: ${txn.value} > ${maxAllocationInUnits}`,
    !isWithinPresalePeriod &&
      `transaction outside presale period: current time ${currentTimestamp}, presale start ${presaleData.start_timestamptz}, presale end ${presaleData.end_timestamptz}`,
  ].filter(Boolean)

  return { isValid: errors.length === 0, errors }
}

async function processDeposit(txn: AlchemyActivity): Promise<boolean> {
  const processingDeposit = await setPresaleDepositStatus({
    depositHash: txn.hash,
    state: 'processing',
  })
  if (!processingDeposit) {
    console.error(`Error processing deposit: ${txn.hash}`)
    return false
  }
  return true
}
