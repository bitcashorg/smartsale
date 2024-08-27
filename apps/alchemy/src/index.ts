require('dotenv').config()
import { Alchemy, Network, WebhookType } from 'alchemy-sdk'

// authToken is required to use Notify APIs. Found on the top right corner of
// https://dashboard.alchemy.com/notify.
async function createAddressActivityNotification() {
  const settings = {
    authToken: process.env.ALCHEMY_NOTIFY_TOKEN,
    network: Network.MATIC_MAINNET, // Replace with your network.
  }

  const alchemy = new Alchemy(settings)
  const addressActivityWebhook = await alchemy.notify.createWebhook(
    // TO DO: You will replace this URL in Step #3 of this guide!
    'https://webhook.site/f18c0350-6479-4686-b48a-3d16aa238b7b',
    WebhookType.ADDRESS_ACTIVITY,
    {
      // use any address you want to monitor activity on!
      addresses: ['0x6F76670A66e7909Af9B76f0D84E39317FCc0B2e1'],
      network: Network.MATIC_MAINNET,
    },
  )
  console.log(
    'Alchemy Notify address activity notification created, go to https://dashboard.alchemy.com/notify to see details of your custom hook.',
  )
}

createAddressActivityNotification()
