import type { AlchemyActivity, AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'

// AlchemyWebhookEvent
export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {
      const activity: AlchemyActivity = payload.event.activity[0]
      console.log(activity)
    } catch (error) {
      logger.error('Error processing address activity', {
        error: (error as Error).message,
      })
      throw error
    }
  },
})
