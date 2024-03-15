'use client'

import { APIClient, Asset, Name } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestCreateArguments,
  SigningRequestEncodingOptions
} from 'eosio-signing-request'
import pako from 'pako'
import { smartsaleEnv } from 'smartsale-env'

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
  const req = createSigntureRequest({
    action: {
      account: smartsaleEnv.test.bitcash.accounts,
      name: 'login',
      authorization,
      data: {
        account: '............1'
      }
    },
    info: {
      uuid
    }
  })
  return req
}

export async function genBitusdDepositSigningRequest(
  amount: number,
  address: string
) {
  const req = createSigntureRequest({
    action: {
      account: 'bkbbanktest3',
      name: 'stbtransfer',
      authorization,
      data: {
        from: '............1',
        to: smartsaleEnv.test.smartsale.bk,
        memo: `pair_id:1 address:${address}`,
        quantity: {
          quantity: Asset.from(amount, '6,BITUSD'),
          contract: smartsaleEnv.test.bitcash.bank
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
  const account = smartsaleEnv.test.usdt.find(
    c => c.chainType === 'antelope' && c.symbol === 'USDT'
  )?.address
  if (!account) throw new Error('usdt account not found')

  const req = createSigntureRequest({
    action: {
      account,
      name: 'transfer',
      authorization,
      data: {
        from: '............1',
        to: smartsaleEnv.test.smartsale.bk,
        memo: `address:${address}`,
        quantity: Asset.from(amount, '4,USDT')
      }
    }
  })
  return req
}

async function createSigntureRequest({
  info = {
    uuid: crypto.randomUUID()
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
        url: 'https://bitcash-launchpad.vercel.app/api/esr',
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
    code: 'bank.bk',
    table: 'stablev2',
    scope: Name.from(account)
  })

  // * We first find the bitUSD on the account's balance.
  // ? We can use this for the user's preference and show their preferred currency to convert...
  return response.rows.find(row => row.balance.quantity.includes('BITUSD'))
    ?.balance.quantity.replace('BITUSD', '')
    || 'O'
}
