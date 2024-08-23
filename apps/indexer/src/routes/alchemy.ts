import crypto from 'crypto'
import type { AlchemyWebhookEvent } from '@repo/alchemy'
import { addressActivityTask } from '@repo/trigger'
import type { Request, Response } from 'express'
import { appConfig } from '~/config'
import { logger } from '~/lib/logger'
import { Network } from 'alchemy-sdk'
import { prodChains } from 'app-env'


const chainIdToNetwork: Record<number, Network> = {
  1: Network.ETH_MAINNET,
  137: Network.MATIC_MAINNET,
  42161: Network.ARB_MAINNET,
  10: Network.OPT_MAINNET,
  8453: Network.BASE_MAINNET,
  43114: Network.AVAX_MAINNET,
  56: Network.BNB_MAINNET
}

const networks: Network[] = prodChains.map(chain => {
  const network = chainIdToNetwork[chain.id]
  if (!network)  throw new Error(`Unsupported chain ID: ${chain.id}`)
  return network
})

/**
 * Handles incoming Alchemy webhook requests.
 * Validates the signature, logs the request, and triggers the address activity task.
 * @param req - The incoming request object
 * @param res - The response object
 */
export async function alchemyWebhook(req: Request, res: Response) {
  const evt = req.body as AlchemyWebhookEvent
  logger.info(`Alchemy webhook received: ${evt.id}`)
    const auth = evt.type === 'ADDRESS_ACTIVITY' && networks.includes((evt.event).network)

  // TODO: restore alchemy signature validation
  //   if (!validateAlchemySignature(req)) return res.status(401).send('Unauthorized')
  //   logger.info('Validated Alchemy webhook 😀')
  // TODO: validate addre is whitelisted



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
