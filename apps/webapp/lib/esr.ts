'use client'

import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestEncodingOptions
} from 'eosio-signing-request'
import pako from 'pako'

const eos = new APIClient({
  url: 'https://eos.greymass.com'
})

export const esrOptions: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async account => {
      const response = await eos.v1.chain.get_abi(account.toString())
      return response.abi
    }
  } as AbiProvider,
  zlib: pako
}

export async function genLoginSigningRequest(
  uuid: string = crypto.randomUUID()
) {
  console.log('genLoginSigningRequest')
  const req = await SigningRequest.create(
    {
      action: {
        account: 'accounts.bk',
        name: 'login',
        authorization: [
          {
            actor: '............1',
            permission: '............2'
          }
        ],
        data: {
          account: '............1'
        }
      },
      info: {
        uuid
      }
    },
    esrOptions
  )
  console.log('request', req, req.encode())
  return req
}
