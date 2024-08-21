import { Request, Response } from 'express'
import crypto from 'crypto'
import { appConfig } from '../config'
import { logger } from '~/lib/logger'

function validateAlchemySignature(req: Request): boolean {
  const alchemySignature = req.headers['x-alchemy-signature'] as string
  const payload = JSON.stringify(req.body)
  const hmac = crypto.createHmac('sha256', appConfig.evm.alchemySecretKey)
  hmac.update(payload)
  return alchemySignature === hmac.digest('hex')
}

export function alchemyWebhook(req: Request, res: Response) {
  if (!validateAlchemySignature(req)) return res.status(401).send('Unauthorized')

   logger.info(req.body)   

  res.status(200).send('Webhook processed')
}