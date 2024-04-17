import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  CallbackPayload,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
} from 'eosio-signing-request'
import { NextRequest } from 'next/server'
import { db } from 'smartsale-db'
import { deflateRawSync, inflateRawSync } from 'zlib'

const eos = new APIClient({
  url: 'https://eos.greymass.com'
})

const esrNodeJSOptions: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async account => {
      const response = await eos.v1.chain.get_abi(account.toString())
      return response.abi
    }
  } as AbiProvider,
  zlib: {
    deflateRaw: data => new Uint8Array(deflateRawSync(Buffer.from(data))),
    inflateRaw: data => new Uint8Array(inflateRawSync(Buffer.from(data)))
  } as ZlibProvider
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CallbackPayload
    const esr = SigningRequest.from(body.req, esrNodeJSOptions)
    const id = esr.getInfoKey('uuid')
    const action = esr.getRawActions()[0].name.toString()

    console.log(
      'ESR CONFIRMATION ==> ' + JSON.stringify({ id, action, esr, body })
    )

    // TODO: validate tx is on blockchain

    // open up session if l
    if (action === 'login') {
      await db.session.create({
        data: {
          id,
          tx: body.tx,
          account: body.sa
        }
      })
    }
    // update esr entry with trx_id
    await db.esr.update({
      where: {
        id
      },
      data: {
        trx_id: body.tx
      }
    })

    return Response.json({
      success: true,
      message: 'Successfully received esr callback'
    })
  } catch (error) {
    console.log(error)
    return Response.json({
      message: 'Could not parse the request body'
    })
  }
}
