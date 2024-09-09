import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'
import { isAddress, parseUnits } from 'viem'
import { issuePresaleTokens } from '../lib/presale-issuer'
import { upsertPresaleDeposits } from '../lib/supabase'

const STABLECOIN_DECIMALS = 6

export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity = payload.event.activity[0]
      console.log(activity)

      // TODO: save activity id to supabase and check if it's already been processed

      if (!isAddress(activity.fromAddress))
        throw new Error(`Invalid from address: ${activity.fromAddress}`)

      const valueInTokenUnits = parseUnits(activity.value.toString(), STABLECOIN_DECIMALS)

      const issuanceHash = await issuePresaleTokens(
        activity.fromAddress,
        valueInTokenUnits,
      )
      console.log(issuanceHash)
      if (!issuanceHash) throw new Error('Failed to get issuance hash')

      const updatedPresale = await upsertPresaleDeposits({
        valueInTokenUnits,
        depositHash: activity.hash,
        issuanceHash,
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
