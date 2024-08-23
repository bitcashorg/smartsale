import { Alchemy, Network, WebhookType } from 'alchemy-sdk'
import { appConfig } from './config'

async function createAddressActivityNotification() {
  const settings = {
    authToken: appConfig.alchemyNotifyToken,
    network: Network.MATIC_MAINNET, // Replace with your network.
  }

  const alchemy = new Alchemy(settings)
  const addressActivityWebhook = await alchemy.notify.createWebhook(
    appConfig.alchemyActivityWebhookUrl,
    WebhookType.ADDRESS_ACTIVITY,
    {
      addresses: [appConfig.presaleAddress],
      network: Network.MATIC_MAINNET,
    },
  )
  console.log('Address Activity Webhook Details:')
  console.log(JSON.stringify(addressActivityWebhook, null, 2))
  console.log(
    'Alchemy Notify address activity notification created, go to https://dashboard.alchemy.com/notify to see details of your custom hook.',
  )
}

createAddressActivityNotification()
