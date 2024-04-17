'use client'

import { APIClient, Asset, Name } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestCreateArguments,
  SigningRequestEncodingOptions
} from 'eosio-signing-request'
import pako from 'pako'
import { appConfig } from './config'

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
  const req = createSignatureRequest({
    action: {
      account: appConfig.bitcash.accounts,
      name: 'login',
      authorization,
      data: {
        account: '............1'
      }
    },
    info: {
      uuid,
      appName: 'Bitlauncher'
    }
  })
  return req
}

export async function genBitusdDepositSigningRequest(
  amount: number,
  address: string
) {
  const req = createSignatureRequest({
    action: {
      account: 'bkbbanktest3',
      name: 'stbtransfer',
      authorization,
      data: {
        from: '............1',
        to: appConfig.smartsale.bk,
        memo: `pair_id:1 address:${address}`,
        quantity: {
          quantity: Asset.from(amount, '6,BITUSD'),
          contract: appConfig.bitcash.bank
        }
      }
    }
  })
  return req
}

export async function genUsdtDepositSigningRequest(
  amount: number,
  address: string
) {
  const account = appConfig.usdt.find(
    c => c.chainType === 'antelope' && c.symbol === 'USDT'
  )?.address
  if (!account) throw new Error('usdt account not found')

  const req = createSignatureRequest({
    action: {
      account,
      name: 'transfer',
      authorization,
      data: {
        from: '............1',
        to: appConfig.smartsale.bk,
        memo: `address:${address}`,
        quantity: Asset.from(amount, '4,USDT')
      }
    },
    info: {
      uuid: crypto.randomUUID(),
      appName: 'Bitlauncher',
      edit: {
        memo: false,
        quantity: false
      }
    }
  })
  return req
}

async function createSignatureRequest({
  info = {
    uuid: crypto.randomUUID(),
    appName: 'Bitlauncher'
  },
  action
}: Pick<SigningRequestCreateArguments, 'info' | 'action'>) {
  console.log(
    JSON.stringify({
      action,
      info
    })
  )
  return SigningRequest.create(
    {
      action,
      info,
      callback: {
        url: appConfig.esrCallbackUrl,
        background: true
      }
    },
    esrOptions
  )
}

const authorization = [
  {
    actor: '............1',
    permission: '............2'
  }
]

export async function getEosBalance(account: string) {
  const response = await eos.v1.chain.get_currency_balance(
    'eosio.token',
    account,
    'EOS'
  )
  return response[0]?.value.toString() || '0'
}

export async function getBitUsdBalance(account: string) {
  const response = await eos.v1.chain.get_table_rows({
    code: appConfig.bitcash.bank,
    table: 'stablev2',
    scope: Name.from(account)
  })

  return (
    response.rows
      .find(row => row.balance.quantity.includes('BITUSD'))
      ?.balance.quantity.replace('BITUSD', '') || 'O'
  )
}
