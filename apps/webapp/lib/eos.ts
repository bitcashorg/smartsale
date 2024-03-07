'use client'

import { APIClient, Name } from '@wharfkit/antelope'
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
      },
      callback: {
        url: 'https://bitcash-launchpad.vercel.app/api/esr',
        background: true
      }
    },
    esrOptions
  )
  return req
}

export async function getEosBalance(account: string) {
  const response = await eos.v1.chain.get_currency_balance(
    'eosio.token',
    account,
    'EOS'
  )
  return response[0].value.toString()
}

export async function getBitUsdBalance(account: string) {
  const response = await eos.v1.chain.get_table_rows({
    code: 'bank.bk',
    table: 'stablev2',
    scope: Name.from(account)
  })
  return response.rows[0]?.balance.quantity.replace('BITUSD', '') || 'O'
}
