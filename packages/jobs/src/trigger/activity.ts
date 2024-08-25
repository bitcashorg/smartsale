import { logger, task } from '@trigger.dev/sdk/v3'
import { isAddress, parseUnits } from 'viem'
import type {
  AlchemyActivity,
  AlchemyWebhookEvent,
} from '../../../../packages/alchemy/src'
import { issuePresaleTokens } from '../lib/presale-issuer'

const STABLECOIN_DECIMALS = 6

export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity = payload.event.activity[0]
      console.log(activity)

      if (!isAddress(activity.toAddress))
        throw new Error(`Invalid to address: ${activity.toAddress}`)

      const valueInTokenUnits = parseUnits(
        activity.value.toString(),
        STABLECOIN_DECIMALS,
      )

      const result = await issuePresaleTokens(
        activity.toAddress,
        valueInTokenUnits,
      )
      console.log(result)
    } catch (error) {
      logger.error('Error processing address activity', {
        error: error instanceof Error ? error.message : String(error),
      })
      throw error
    }
  },
})
