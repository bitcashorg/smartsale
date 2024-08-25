import crypto from 'crypto'

import type {
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '@repo/alchemy'

import { addressActivityTask } from '@repo/jobs'
import { evmTokens } from '@repo/tokens'
import { prodChains } from 'app-env'
import type { Request, Response } from 'express'
import { getAddress } from 'viem'
import { appConfig } from '~/config'
import { logger } from '~/lib/logger'
import {
  getPresaleData,
  isAddressRegisteredForPresale,
} from '~/lib/supabase-client'
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
  // Parse the incoming webhook event
  const evt = req.body as AlchemyWebhookEvent
  logger.info(`Alchemy webhook received: ${JSON.stringify(evt)}`)

  // TODO: restore alchemy signature validation
  // Validate the Alchemy signature
  if (!validateAlchemySignature(req))
    return res.status(401).send('Unauthorized')

  // Extract network and activity from the event
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
    // Check if the asset is valid (USDC or USDT)
    const isValidAsset = txn.asset === 'USDC' || txn.asset === 'USDT'
    // Ensure the transaction is not sent to the presale address
    const isValidToAddress = txn.toAddress !== appConfig.presaleAddress
    // Get the token address from the transaction
    const txnTokenAddress =
      txn.rawContract?.address && getAddress(txn.rawContract.address)

    // Check if the token is supported
    const isSupportedToken =
      txnTokenAddress &&
      evmTokens.some((token) => txnTokenAddress === getAddress(token.address))

    // Check if the sender is registered for the presale
    const isRegisteredForPresale = await isAddressRegisteredForPresale(
      txn.fromAddress,
      1,
    )

    // Get presale data and validate amount and timing
    const presaleData = await getPresaleData(1)
    const isValidAmount = txn.value <= presaleData.max_allocation
    const currentTimestamp = Math.floor(Date.now() / 1000) // Current time in seconds
    const isWithinPresalePeriod =
      currentTimestamp >= Number(presaleData.start_timestamptz) &&
      currentTimestamp <= Number(presaleData.end_timestamptz)

    // Collect all validation errors
    const validationErrors = [
      !isValidAsset && `asset: ${txn.asset}`,
      !isValidToAddress && `to address: ${txn.toAddress}`,
      !isSupportedToken && `token: ${txnTokenAddress}`,
      !txn.log && 'missing transaction log',
      !isRegisteredForPresale && 'address is not registered for presale',
      !isValidAmount &&
        `amount exceeds max allocation: ${txn.value} > ${presaleData.max_allocation}`,
      !isWithinPresalePeriod &&
        `transaction outside presale period: current time ${currentTimestamp}, presale start ${presaleData.start_timestamptz}, presale end ${presaleData.end_timestamptz}`,
    ].filter(Boolean)

    // If there are any validation errors, log them and return unauthorized
    if (validationErrors.length) {
      logger.error(`Invalid transaction: ${validationErrors.join(', ')}`)
      return res.status(401).send('Unauthorized')
    }

    // Trigger the address activity task
    const handle = await addressActivityTask.trigger(req.body)
    logger.info(`Triggered address activity task: ${JSON.stringify(handle)}`)
  }

  logger.info(`Webhook ${evt.id} processed`)

  // Send a success response
  res.status(200).send(`Webhook ${evt.id} processed`)
}

/**
 * Validates the Alchemy webhook signature.
 * @param req - The incoming request object
 * @returns boolean - True if the signature is valid, false otherwise
 */
function validateAlchemySignature(req: Request): boolean {
  // Extract the Alchemy signature from the request headers
  const alchemySignature = req.headers['x-alchemy-signature'] as string
  // Stringify the request body
  const payload = JSON.stringify(req.body)
  // Create an HMAC using the Alchemy signing key
  const hmac = crypto.createHmac(
    'sha256',
    appConfig.evm.alchemy.activitySigningKey,
  )
  // Update the HMAC with the payload
  hmac.update(payload)
  // Compare the calculated signature with the provided signature
  return alchemySignature === hmac.digest('hex')
}
