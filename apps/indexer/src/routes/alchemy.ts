import crypto from 'node:crypto'
import { addressActivityTask } from '@repo/jobs'
import { Network } from 'alchemy-sdk'
import { prodChains } from 'app-env'
import type { Request, Response } from 'express'
import { appConfig } from '~/config'
import { logger } from '~/lib/logger'
import type {
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '../../../../packages/alchemy/src'

// Mapping of chain IDs to Alchemy SDK Network types
const chainIdToNetwork: Record<number, AlchemyNetwork> = {
  1: 'ETH_MAINNET',
  137: 'MATIC_MAINNET',
  42161: 'ARB_MAINNET',
  10: 'OPT_MAINNET',
  8453: 'BASE_MAINNET',
  43114: 'MATIC_MAINNET',
  56: 'BNB_MAINNET',
}

// Create an array of supported networks based on production chains
const networks: AlchemyNetwork[] = prodChains.map((chain) => {
  const network = chainIdToNetwork[chain.id]
  if (!network) throw new Error(`Unsupported chain ID: ${chain.id}`)
  return network
})
logger.info(`Supported networks: ${networks.join(', ')}`)

/**
 * Handles incoming Alchemy webhook requests.
 * Validates the signature, logs the request, and triggers the address activity task.
 * @param req - The incoming request object
 * @param res - The response object
 */
export async function alchemyWebhook(req: Request, res: Response) {
  try {
    const evt = req.body as AlchemyWebhookEvent;
    logger.info(`Alchemy webhook received: ${evt.id}`, { eventData: evt });
    // ... rest of the function
  } catch (error) {
    logger.error(`Error processing Alchemy webhook: ${error.message}`, { error });
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  const evt = req.body as AlchemyWebhookEvent
  logger.info(`Alchemy webhook received: ${evt.id}`)
  logger.info(JSON.stringify(evt))
  // TODO: restore alchemy signature validation
  // if (!validateAlchemySignature(req)) return res.status(401).send('Unauthorized')
  // logger.info('Validated Alchemy webhook 😀')

  const { network, activity } = evt.event as AlchemyActivityEvent

  // Validate event type and network
  const isAddressActivity = evt.type === 'ADDRESS_ACTIVITY'
  const isValidNetwork = networks.includes(network)

  if (!isAddressActivity || !isValidNetwork) {
    const errorMsg = isAddressActivity ? `network: ${network}` : `event type: ${evt.type}`

    logger.error(`Invalid: ${errorMsg}`)
    return res.status(401).send('Unauthorized')
  }

  // Validate each transaction in the activity
  for (const txn of activity) {
    const isValidAsset = txn.asset === 'USDC' || txn.asset === 'USDT'
    const isValidToAddress = txn.toAddress !== appConfig.presaleAddress

    if (!isValidAsset || !isValidToAddress) {
      const errorMsg = !isValidAsset
        ? `asset: ${txn.asset}`
        : `to address: ${txn.toAddress}`
      logger.error(`Invalid transaction: ${errorMsg}`)
      return res.status(401).send('Unauthorized')
    }
  }

  // TODO: validate address is whitelisted

  // Trigger the address activity task
  const handle = await addressActivityTask.trigger(req.body)
  logger.info(`Triggered address activity task: ${JSON.stringify(handle)}`)

  res.status(200).send(`Webhook ${evt.id} processed`)
}

/**
 * Validates the Alchemy webhook signature.
 * @param req - The incoming request object
 * @returns boolean - True if the signature is valid, false otherwise
 */
function validateAlchemySignature(req: Request): boolean {
  const alchemySignature = req.headers['x-alchemy-signature'] as string
  const payload = JSON.stringify(req.body)
  const hmac = crypto.createHmac(
    'sha256',
    appConfig.evm.alchemy.activitySigningKey,
  )
  hmac.update(payload)
  return alchemySignature === hmac.digest('hex')
}
