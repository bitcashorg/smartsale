import { appConfig } from '@/lib/config'
import { createSupabaseServerClient } from '@/services/supabase'
import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
} from 'eosio-signing-request'
import { NextRequest, NextResponse } from 'next/server'
import { deflateRawSync, inflateRawSync } from 'zlib'
import { z } from 'zod'

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

const requestBodySchema = z.object({
  code: z.string(),
  account: z.string()
})

export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json()
    const { code, account } = requestBodySchema.parse(rawData)
    const decoded = SigningRequest.from(code, esrNodeJSOptions)
    const id = decoded.getInfoKey('uuid')
    const supabase = await createSupabaseServerClient()
    const { data: entry, error } = await supabase
      .from('esr')
      .insert([{ id, code, account }])
      .single()

    if (error) {
      console.error('Failed to insert ESR entry:', error.message)
      return NextResponse.json({
        success: false,
        error: `Failed to insert ESR entry: ${error.message}`
      })
    }

    console.log('ESR entry:', entry)

    return NextResponse.json({
      success: true,
      data: entry,
      message: 'Registered new signature request'
    })
  } catch (error: any) {
    console.error('Unexpected error during POST request:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'An unexpected error occurred during the request.'
    })
  }
}
