import { createSupabaseServerClient } from '@/services/supabase'
import { APIClient } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestEncodingOptions,
  ZlibProvider
} from 'eosio-signing-request'
import { NextRequest } from 'next/server'
import { deflateRawSync, inflateRawSync } from 'zlib'
import { z } from 'zod'

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
      .from('esr') // The table name should match your schema in Supabase
      .insert([{ id, code, account }])
      .single() // Use .single() if you're expecting to insert one row
    if (error) throw new Error(error.message)
    console.log('esr entry', entry)

    return Response.json({
      success: true,
      data: entry,
      message: 'Registered new signature request'
    })
  } catch (error) {
    console.log(error)
    return Response.json({
      error: 'Something went wrong'
    })
  }
}
