import { createSupabaseServerClient } from '@/services/supabase'
import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  CallbackPayload,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
} from 'eosio-signing-request'
import { NextRequest } from 'next/server'
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
    const supabase = await createSupabaseServerClient()
    console.log(
      'ESR CONFIRMATION ==> ' + JSON.stringify({ id, action, esr, body })
    )

    // TODO: validate tx is on blockchain

    // open up session if l
    if (action === 'login') {
      // Create a new session entry
      const { data: session, error: sessionError } = await supabase
        .from('session')
        .insert([
          {
            id: body.session_id, // Assuming id is stored in body.session_id
            tx: body.tx,
            account: body.sa
          }
        ])

      // Check for and handle any errors
      if (sessionError)
        throw new Error(`Error creating session: ${sessionError.message}`)
      console.log('Session created successfully:', session)
    }

    // Update esr entry with trx_id
    const { data: esrUpdate, error } = await supabase
      .from('esr')
      .update({
        trx_id: body.tx
      })
      .match({ id: body.esr_id }) // Assuming id for the esr entry is stored in body.esr_id

    // Check for and handle any errors
    if (error) throw new Error(`Error updating ESR entry: ${error.message}`)
    console.log('ESR entry updated successfully:', esrUpdate)

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
