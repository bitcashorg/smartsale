import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'
import {Address} from 'viem';
import {issuePresaleTokens} from '../lib/presale-issuer';

// AlchemyWebhookEvent
export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity = payload.event.activity[0]
      console.log(activity)

      const result = await issuePresaleTokens(activity.toAddress as Address, BigInt(activity.value) )
      console.log(result)
    } catch (error) {
      logger.error('Error processing address activity', {
        error: (error as Error).message,
      })
      throw error
    }
  },
})
