import { esrOptions } from '@/lib/esr'
import { CallbackPayload, SigningRequest } from 'eosio-signing-request'
import { NextRequest } from 'next/server'
import { db } from 'smartsale-db'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CallbackPayload

    const decodedRequest = SigningRequest.from(body.req, esrOptions)
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
