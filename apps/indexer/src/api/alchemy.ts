import crypto from 'crypto'

import type {
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '@repo/alchemy'

import { addressActivityTask } from '@repo/trigger'
import { prodChains } from 'app-env'
import type { Request, Response } from 'express'
import { appConfig } from '~/config'
import { logger } from '~/lib/logger'
import { evmTokens } from '@repo/tokens'
// import {isAddressRegisteredForPresale} from '~/src/lib/supabase-client';

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
  const evt = req.body as AlchemyWebhookEvent
  logger.info(`Alchemy webhook received: ${JSON.stringify(evt)}`)

  // TODO: restore alchemy signature validation
  if (!validateAlchemySignature(req))
    return res.status(401).send('Unauthorized')

  const { network, activity } = evt.event as AlchemyActivityEvent

  // Validate event type and network
  const isAddressActivity = evt.type === 'ADDRESS_ACTIVITY'
  const isValidNetwork = networks.includes(network)

  if (!isAddressActivity || !isValidNetwork) {
    const errorMsg = !isAddressActivity
      ? `event type: ${evt.type}`
      : `network: ${network}`
    logger.error(`Invalid: ${errorMsg}`)
    return res.status(401).send('Unauthorized')
  }

  // Validate each transaction in the activity
  for (const txn of activity) {
    const isValidAsset = txn.asset === 'USDC' || txn.asset === 'USDT'
    const isValidToAddress = txn.toAddress !== appConfig.presaleAddress

    const isSupportedToken = evmTokens.some(
      (token) => txn.rawContract.address === token.address,
    )

    const validationErrors = [
      !isValidAsset && `asset: ${txn.asset}`,
      !isValidToAddress && `to address: ${txn.toAddress}`,
      !isSupportedToken && `token: ${txn.rawContract.address}`,
      !txn.log && 'missing transaction log',
      // !isAddressRegisteredForPresale(txn.fromAddress, 1) && 'address is not registered for presale',
    ].filter(Boolean)

    if (validationErrors.length) {
      logger.error(`Invalid transaction: ${validationErrors.join(', ')}`)
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
