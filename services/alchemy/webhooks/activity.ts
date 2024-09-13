import { Alchemy, Network, WebhookType } from 'alchemy-sdk'
import { appConfig } from '../src/config'

async function createAddressActivityNotification({
  addresses,
  network,
}: { addresses: string[]; network: Network }) {
  console.log('🚀 createAddressActivityNotification', addresses, network)
  try {
    const settings = {
      authToken: appConfig.alchemyNotifyToken,
      network,
    }

    const alchemy = new Alchemy(settings)
    const addressActivityWebhook = await alchemy.notify.createWebhook(
      'https://test.bitlauncher.ai/api/activity',
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
const depositAddresses = [
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '1',
    network: Network.ETH_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '10',
    network: Network.OPT_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '42161',
    network: Network.ARB_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '8453',
    network: Network.BASE_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '56',
    network: Network.BNB_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '43114',
    network: Network.AVAX_MAINNET,
  },
  {
    deposit_address: '0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5',
    chain_id: '137',
    network: Network.MATIC_MAINNET,
  },
]

for (const { deposit_address, network } of depositAddresses) {
  createAddressActivityNotification({
    addresses: [deposit_address],
    network,
  })
}
