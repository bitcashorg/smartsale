import type { ExecutionResult } from './generated/cms/runtime/types'
import axios, { type AxiosRequestConfig } from 'axios'
import { createClient } from './generated/cms'
export { everything } from './generated/cms'
import { contentConfig } from '../../../config'

type GraphQLSdkProps = {
  config?: AxiosRequestConfig
  jwt?: string
}

type CMSClientCallback =
  | ExecutionResult<{ [key: string]: any }>
  | ExecutionResult<{ [key: string]: any }>[]

// Server side client
export function getCMSSdk({ config }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation: any): Promise<CMSClientCallback> => {
      const headers: Record<string, string> = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${contentConfig.datocms.key}`,
      }

      // if (appConfig.features.inDevelopment) {
      //   headers['X-Include-Drafts'] = 'true'
      // }

      // console.log(
      //   '\n ==> GraphQL Query : \n',
      //   JSON.stringify(
      //     (operation as GraphqlOperation).query.replaceAll('"', '')
      //   )
      // )

      let fetchResponse

      try {
        fetchResponse = axios.post(contentConfig.datocms.endpoint, operation, {
          headers,
          ...config,
        })
      } catch (error) {
        console.error('Error in graphql fetcher', error)
      }

      return (await fetchResponse)?.data as CMSClientCallback
    },
  })
}
