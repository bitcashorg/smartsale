import { AlchemyWebhookEvent } from '@repo/alchemy'
import { logger, task } from '@trigger.dev/sdk/v3'

// AlchemyWebhookEvent
export const addressActivityTask = task({
  id: 'address-activity',
  run: async (payload: AlchemyWebhookEvent) => {
    try {

      const activity:Activity = payload.event.activity[0]
      console.log(activity)

    } catch (error) {
      logger.error('Error processing address activity', {
        error: (error as Error).message,
      })
      throw error
    }
  },
})

interface Activity {
  fromAddress: string
  toAddress: string
  blockNum: string
  hash: string
  value: number
  asset: string
  category: string
  rawContract: {
    rawValue: string
    decimals: number
  }
}

// Example usage:
// const activity: Activity = {
//   fromAddress: "0x6f76670a66e7909af9b76f0d84e39317fcc0b2e1",
//   toAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
//   blockNum: "0x3a1bef5",
//   hash: "0x91dd89c417ee1b95cc792c28512707869eeaa638418594220b83ad06d62bebab",
//   value: 0,
//   asset: "MATIC",
//   category: "external",
//   rawContract: {
//     rawValue: "0x0",
//     decimals: 18
//   }
// }