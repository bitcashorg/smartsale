import { isAddress } from 'viem'
import { z } from 'zod'

const envSchema = z.object({
  ALCHEMY_NOTIFY_TOKEN: z.string().min(1, 'Alchemy notify token is required'),
  ALCHEMY_ACTIVITY_WEBHOOK_URL: z.string().url('Invalid webhook URL'),
  PRESALE_ADDRESS: z.string().refine(isAddress, 'Invalid Presale address'),
})

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) {
  console.error(
    `Environment validation failed: ${JSON.stringify(parsedEnv.error.format())}`,
  )
  process.exit(1)
}

export const appConfig = {
  alchemyNotifyToken: parsedEnv.data.ALCHEMY_NOTIFY_TOKEN,
  alchemyActivityWebhookUrl: parsedEnv.data.ALCHEMY_ACTIVITY_WEBHOOK_URL,
  presaleAddress: parsedEnv.data.PRESALE_ADDRESS,
}