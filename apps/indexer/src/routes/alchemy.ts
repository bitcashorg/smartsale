import crypto from 'crypto'
import { addressActivityTask } from '@repo/trigger'
import type { Request, Response } from 'express'
import { appConfig } from '~/config'

export function alchemyWebhook(req: Request, res: Response) {
  console.log(JSON.stringify(req.body))

    // TODO: fix alchemy signature validation
    // https://git.new/alchemy-hooks-ts
//   if (!validateAlchemySignature(req))
//     return res.status(401).send('Unauthorized')

 

  // TODO: validate user is whitelisted

  addressActivityTask.trigger(req.body)

  res.status(200).send('Webhook processed')
}

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
