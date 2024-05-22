import { buildClient, LogLevel } from '@datocms/cma-client-node'

export const datoClient = buildClient({
  apiToken: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
  logLevel: LogLevel.BASIC
})
