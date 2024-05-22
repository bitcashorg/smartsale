'use server'

import { buildClient, LogLevel } from '@datocms/cma-client-node'

export const datoClient = buildClient({
  apiToken: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
  logLevel: LogLevel.BASIC
})

export async function getPosts() {
  try {
    const itemTypes = await datoClient.itemTypes.list()

    console.log('💥 ITEM TYPES', itemTypes)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
