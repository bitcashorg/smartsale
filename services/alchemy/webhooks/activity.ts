import { Alchemy, Network, WebhookType } from 'alchemy-sdk'

import { evmChains } from '@repo/chains'
import { chainIdAlchemyNetwork } from '~/utils'
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
      appConfig.alchemyActivityWebhookUrl,
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

for (const chain of evmChains) {
  createAddressActivityNotification({
    addresses: [appConfig.presaleAddress],
    network: Network[chainIdAlchemyNetwork[chain.id]],
  })
}
