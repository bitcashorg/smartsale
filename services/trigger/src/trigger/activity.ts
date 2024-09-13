import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'
import { type Address, hexToNumber, isAddress, parseUnits, toHex } from 'viem'
import { issuePresaleTokens } from '../lib/presale-issuer'
import {
  getPresaleByAddress,
  setPresaleDepositStatus,
  upsertPresaleDeposits,
} from '../lib/supabase'

const STABLECOIN_DECIMALS = 6

export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity = payload.event.activity[0]
      // console.log(activity)

      // TODO: save activity id to supabase and check if it's already been processed to prevent double issuance

      if (!isAddress(activity.fromAddress))
        throw new Error(`Invalid from address: ${activity.fromAddress}`)

      const transferValue =
        activity.value || hexToNumber(toHex(activity.rawContract?.rawValue))
      const presale = await getPresaleByAddress(activity.toAddress as Address)
      if (!presale) throw new Error('Presale not found')
      if (!presale.project) throw new Error('Project not found')
      if (!presale.project.token_address)
        throw new Error('Project token address not found')
      if (!transferValue) throw new Error('Value not found in alchemy event')

      // TODO: check if processed. check if processing

      const valueInTokenUnits = parseUnits(transferValue.toString(), STABLECOIN_DECIMALS)

      const issuanceHash = await issuePresaleTokens(
        activity.fromAddress,
        valueInTokenUnits,
        presale.project.token_address as Address,
      )
      console.log(issuanceHash)
      if (!issuanceHash) throw new Error('Failed to issue presale tokens')

      const updatedPresale = await upsertPresaleDeposits({
        valueInTokenUnits,
        depositHash: activity.hash,
        issuanceHash,
      })

      await setPresaleDepositStatus({
        depositHash: activity.hash,
        state: 'processed',
      })
      console.log('Updated presale', updatedPresale)
    } catch (error) {
      logger.error('Error processing address activity', {
        error: error instanceof Error ? error.message : String(error),
      })
      throw error
    }
  },
})
