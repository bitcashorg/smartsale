import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'
import { type Address, formatUnits, getAddress, hexToBigInt, parseUnits } from 'viem'
import type { EVMToken } from '../../../../packages/tokens/src/types'
import { issuePresaleTokens } from '../lib/presale-issuer'
import {
  getPresaleByAddress,
  getProcessedPresaleDeposits,
  getWhitelistedAddress,
  isDepositProcessing,
  setPresaleDepositStatus,
  supabase,
  upsertPresaleDeposits,
} from '../lib/supabase'

export const addressActivityTask = task({
  id: 'eos-presale-deposit',
  run: async (payload: EOSDeposit) => {
    console.log('🚀 ~ EOSDeposit', payload)

    console.log(
      `Processing transaction ${payload.trxId} in contract: ${payload.from}, quantity: ${payload.quantity}`,
    )

    try {
      // set deposit to processing if not already processed or processing
      await setDepositToProcessing(payload.trxId)

      // get user whitelisted address
      const whitelistedAddress = await getWhitelistedAddress(payload.from)

      // get presale
      const presale = await getPresaleByAddress(payload.to)
      if (!presale) throw new Error('Presale not found')
      if (!presale.project) throw new Error('Project not found')
      if (!presale.project.token_address)
        throw new Error('Project token address not found')

      // floor and convert quantity to token units
      const valueInTokenUnits = parseUnits(payload.quantity.split('.')[0], 6)

      // issue presale tokens
      const issuanceHash = await issuePresaleTokens(
        whitelistedAddress,
        valueInTokenUnits,
        presale.project?.token_address as Address,
      )
      if (!issuanceHash) throw new Error('Failed to issue presale tokens')

      // update presale stats
      const updatedPresale = await upsertPresaleDeposits({
        valueInTokenUnits,
        depositHash: payload.trxId,
        issuanceHash,
      })

      // set deposit to processed
      await setPresaleDepositStatus({
        depositHash: payload.trxId,
        state: 'processed',
      })
      console.log('Updated presale', updatedPresale)
    } catch (error) {
      console.error('Error processing transaction', error)
      // set deposit to processed
      await setPresaleDepositStatus({
        depositHash: payload.trxId,
        state: 'error',
      })
      throw error
    }
  },
})

interface EOSDeposit {
  trxId: string
  from: string
  quantity: string
  to: string
}

async function validateTransaction(txn: AlchemyActivity, token: EVMToken) {
  if (!txn.log) throw new Error('Missing transaction log')

  const presale = await getPresaleByAddress(txn.toAddress as Address)
  if (!presale) throw new Error('Presale not found')
  if (!presale.project) throw new Error('Project not found')
  if (!presale.project.token_address) throw new Error('Project token address not found')

  // TODO: Implement actual check for presale period
  const currentTimestamp = Date.now()
  const isWithinPresalePeriod = true
  // const isWithinPresalePeriod = currentTimestamp >= Number(presaleData.start_timestamptz) && currentTimestamp <= Number(presaleData.end_timestamptz)
  if (!isWithinPresalePeriod) {
    throw new Error(
      `Outside presale period: current time ${currentTimestamp}, presale start ${presale.start_timestamptz}, presale end ${presale.end_timestamptz}`,
    )
  }

  // TODO: Implement actual check for presale registration
  const isWhitelisted = true // await isAddressRegisteredForPresale(txn.fromAddress, 1)
  if (!isWhitelisted) throw new Error('Address is not whitelisted for presale')

  // TODO: Implement actual check for max deposit amount
  const maxAllocationInUnits = presale.max_allocation
  const deposits = await getProcessedPresaleDeposits({
    address: getAddress(txn.fromAddress),
    projectId: presale.project_id,
    supabase,
  })
  const totalDeposits = deposits.reduce((acc, deposit) => acc + Number(deposit.amount), 0)
  const totalDepositsInUnits = BigInt(totalDeposits)
  const isValidAmount = true
  // const isValidAmount = txnValueInUnits + totalDepositsInUnits <= maxAllocationInUnits
  if (!isValidAmount) {
    throw new Error(
      `Amount exceeds max allocation: ${txn.value} > ${maxAllocationInUnits}`,
    )
  }

  const transferData = txn.rawContract?.rawValue || txn.log?.data
  const transferValue = transferData
    ? hexToBigInt(transferData)
    : txn.value
      ? parseUnits(txn.value.toString().split('.')[0], 6)
      : 0n

  if (!transferValue) throw new Error('Value not found in alchemy event')

  // we only want the integer part of the value
  const valueInTokenUnits = parseUnits(
    formatUnits(transferValue, token.decimals).split('.')[0],
    6,
  )

  console.log('💰', {
    log: {
      transferValue,
      units: formatUnits(transferValue, token.decimals),
    },
    six: {
      valueInTokenUnits,
      six: formatUnits(valueInTokenUnits, 6),
    },
  })

  return { presale, valueInTokenUnits }
}

async function setDepositToProcessing(hash: string) {
  const isProcessed = await isDepositProcessing({ depositHash: hash, supabase })
  if (isProcessed) throw new Error(`Deposit already processed: ${hash}`)

  const processingDeposit = await setPresaleDepositStatus({
    depositHash: hash,
    state: 'processing',
  })
  if (!processingDeposit) throw new Error(`Error processing deposit: ${hash}`)
}
