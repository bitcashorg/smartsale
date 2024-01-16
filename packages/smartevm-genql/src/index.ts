import { Client, createClient } from '../generated'
import { GraphqlOperation } from '@genql/runtime'
import { endpoints, MbEnv } from 'smartevm-env'
import { createClient as createWsClient, Client as WsClient } from 'graphql-ws'

export * from '../generated'

// Server side client
export function createMbClient({ config, jwt, env, adminSecret, debug }: GraphQLSdkProps = {}): MbClient {
  const { subscribe } = createWsClient({
    url: endpoints[env || 'prod'].replace('http', 'ws'),
  })

  const client = createClient({
    fetcher: async (operation: any) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
        ...(adminSecret ? { 'x-hasura-admin-secret': adminSecret } : {}),
      }

      debug && console.log(
        '\n ==> GraphQL Query : \n',
        JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', ''))
      )

      let fetchResponse
      try {
        fetchResponse = fetch(endpoints[env || 'prod'], {
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

export interface MbClient extends Client {
  subscribe: WsClient["subscribe"]
}

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
  env?: MbEnv
  adminSecret?: string
  debug?: boolean
}
