import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/services/supabase'
import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  CallbackPayload,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
} from 'eosio-signing-request'
import { deflateRawSync, inflateRawSync } from 'zlib'
import { appConfig } from '@/lib/config'

const eos = new APIClient({
  url: appConfig.eosRpc
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
      'ESR CONFIRMATION ==> ',
      JSON.stringify({ id, action, esr, body })
    )

    if (action === 'login') {
      const { data: session, error: sessionError } = await supabase
        .from('session')
        .insert([{ id: body.session_id, tx: body.tx, account: body.sa }])

      if (sessionError) {
        throw new Error(`Error creating session: ${sessionError.message}`)
      }
      console.log('Session created successfully:', session)
    }

    const { data: esrUpdate, error } = await supabase
      .from('esr')
      .update({ trx_id: body.tx })
      .match({ id: body.esr_id })

    if (error) {
      throw new Error(`Error updating ESR entry: ${error.message}`)
    }
    console.log('ESR entry updated successfully:', esrUpdate)

    return NextResponse.json({
      success: true,
      message: 'Successfully received esr callback'
    })
  } catch (error: any) {
    console.error('Error handling request:', error)
    return NextResponse.json({
      success: false,
      message:
        error.message || 'An error occurred during the request processing'
    })
  }
}
