import { logger, task } from '@trigger.dev/sdk/v3'
import { getErrorMessage } from 'app-lib'

// AlchemyWebhookEvent
export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: any, { ctx }) => {
    try {
      logger.log('Address activity', { payload, ctx })
    } catch (error) {
      logger.error('Error processing address activity', {
        error: getErrorMessage(error),
      })
      throw error
    }
  },
})
