import crypto from 'crypto'
import { addressActivityTask } from '@repo/trigger'
import type { Request, Response } from 'express'
import { appConfig } from '~/config'
import { logger } from '~/lib/logger'

/**
 * Handles incoming Alchemy webhook requests.
 * Validates the signature, logs the request, and triggers the address activity task.
 * @param req - The incoming request object
 * @param res - The response object
 */
export function alchemyWebhook(req: Request, res: Response) {
    const evt = req.body as AlchemyWebhookEvent
  logger.info(`Alchemy webhook received: ${evt.id}`)
  if (!validateAlchemySignature(req)) return res.status(401).send('Unauthorized')
  logger.info('Validated Alchemy webhook 😀')
  // TODO: validate user is whitelisted

  addressActivityTask.trigger(req.body)

  res.status(200).send('Webhook processed')
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



export interface AlchemyWebhookEvent {
  webhookId: string;
  id: string;
  createdAt: Date;
  type: AlchemyWebhookType;
  event: Record<any, any>;
}

export type AlchemyWebhookType =
  | "MINED_TRANSACTION"
  | "DROPPED_TRANSACTION"
  | "ADDRESS_ACTIVITY";
