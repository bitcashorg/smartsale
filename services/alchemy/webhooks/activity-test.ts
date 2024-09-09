import { Alchemy, Network, WebhookType } from 'alchemy-sdk'
import { appConfig } from '../src/config'

async function createAddressActivityNotification({
  addresses,
  network,
}: { addresses: string[]; network: Network }) {
  try {
    const settings = {
      authToken: appConfig.alchemyNotifyToken,
      network,
    }

    const alchemy = new Alchemy(settings)
    const addressActivityWebhook = await alchemy.notify.createWebhook(
      'https://d432-2803-f340-1051-ae7c-c48f-888f-885d-22f3.ngrok-free.app/api/activity',
      WebhookType.ADDRESS_ACTIVITY,
      {
        addresses,
        network,
      },
    )

    console.log('Address Activity Webhook Details:')
    console.log(JSON.stringify(addressActivityWebhook, null, 2))
  } catch (error) {
    console.error(
      'Failed to create address activity notification for network:',
      network,
      error,
    )
  }
}

createAddressActivityNotification({
  addresses: [appConfig.presaleAddress],
  network: Network.MATIC_MAINNET,
})
