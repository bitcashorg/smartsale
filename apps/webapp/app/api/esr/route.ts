import { esrOptions } from '@/lib/esr'
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

    const decodedRequest = SigningRequest.from(body.req, esrNodeJSOptions)
    const id = decodedRequest.getInfoKey('uuid')

    console.log(id, body, decodedRequest) // Log the body to the console

    // TODO: validate tx is on blockchain

    const response = await db.session.create({
      data: {
        id,
        tx: body.tx,
        account: body.sa
      }
    })
    console.log(response)

    return Response.json({
      message: 'Successfully logged the request body'
    })
  } catch (error) {
    console.log(error)
    return Response.json({
      message: 'Could not parse the request body'
    })
  }
}
