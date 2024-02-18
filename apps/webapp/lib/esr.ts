'use client'

import { APIClient } from '@wharfkit/antelope'

import {
  AbiProvider,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
  // ZlibProvider
} from 'eosio-signing-request'
import pako from 'pako'

const eos = new APIClient({
  url: 'https://eos.greymass.com'
})

const options: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async account => await eos.v1.chain.get_abi(account.toString())
  } as AbiProvider,
  // zlib string compression (optional, recommended)
  // zlib: {
  //     deflateRaw: (data) => new Uint8Array(zlib.deflateRawSync(Buffer.from(data))),
  //     inflateRaw: (data) => new Uint8Array(zlib.inflateRawSync(Buffer.from(data))),
  // },
  zlib: {
    deflateRaw: data => new Uint8Array(pako.deflate(Buffer.from(data))),
    inflateRaw: data => new Uint8Array(pako.inflate(Buffer.from(data)))
  } as ZlibProvider
}

export async function bitcashLogin() {
  console.log('bitcash login')
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
      }
    },
    options
  )
  console.log('request', req, req.encode())
  return req.encode()
}
