const path = require('node:path')
const dotenv = require('dotenv')

// Load environment variables from root .env files
const rootPath = path.join(__dirname, '../..')
dotenv.config({ path: path.join(rootPath, '.env') })
dotenv.config({ path: path.join(rootPath, '.env.local') })
dotenv.config({ path: path.join(rootPath, '.env.development') })
dotenv.config({ path: path.join(rootPath, '.env.production') })

import { createClient as createWsClient } from 'graphql-ws'
import { createClient } from '../../generated'
import type { GraphQLSdkProps } from './client.types'

export * from '../../generated'

const CHAINGRAPH_URL = process.env.CHAINGRAPH_URL
const CHAINGRAPH_API_KEY = process.env.CHAINGRAPH_API_KEY

// Server side client
export function createChaingraphClient({
  config,
  options = {},
}: GraphQLSdkProps = {}) {
  if (!CHAINGRAPH_URL)
    throw new Error('CHAINGRAPH_URL environment variable is not set')

  if (!CHAINGRAPH_API_KEY)
    throw new Error('CHAINGRAPH_API_KEY environment variable is not set')

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-chaingraph-api-key': CHAINGRAPH_API_KEY,
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let subscribe: any

  // * Guarding if webSocketImpl is in options
  if ('webSocketImpl' in options) {
    const { subscribe: subscriptions } = createWsClient({
      url: CHAINGRAPH_URL.replace('https', 'wss'),
      ...options,
      connectionParams: () => {
        return {
          headers,
        }
      },
    })
    subscribe = subscriptions
  }

  const client = createClient({
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    fetcher: async (operation: any) => {
      //   console.log(
      //     '\n ==> GraphQL Query : \n',
      //     JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', ''))
      //   )

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      let fetchResponse: any
      try {
        fetchResponse = fetch(CHAINGRAPH_URL, {
          method: 'POST',
          headers,
          body: JSON.stringify(operation),
          ...config,
        }).then((response) => response.json())
      } catch (error) {
        console.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })

  return {
    subscribe,
    ...client,
  }
}
