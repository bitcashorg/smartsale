import crypto from 'crypto'
import type { Request, Response } from 'express'
import { logger } from '~/lib/logger'
import { appConfig } from '../config'
import { addressActivityTask } from '@repo/trigger'


export function alchemyWebhook(req: Request, res: Response) {
  if (!validateAlchemySignature(req))
    return res.status(401).send('Unauthorized')

  logger.info(req.body)

    // TODO: validate user is whitelisted

   addressActivityTask.trigger(req.body)

  res.status(200).send('Webhook processed')
}


function validateAlchemySignature(req: Request): boolean {
    const alchemySignature = req.headers['x-alchemy-signature'] as string
    const payload = JSON.stringify(req.body)
    const hmac = crypto.createHmac('sha256', appConfig.evm.alchemySecretKey)
    hmac.update(payload)
    return alchemySignature === hmac.digest('hex')
  }
