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
import { z } from 'zod'
import { deflateRawSync, inflateRawSync } from 'zlib'
import { appConfig } from '@/lib/config'

export async function POST(req: NextRequest) {
  try {
    console.log('CAllBACK PARAMS 😎😎😎', await req.json())
    const parsed = SigningRequestCallbackPayloadSchema.parse(await req.json())
    if (!parsed) throw new Error('Invalid ESR CallbackPayload')
    console.log('🦚🦚🦚 ALL GOOD ', parsed)

    console.log(`🚀 callbackPayload for ${parsed.req}`, JSON.stringify(parsed))
    // callbackPayload example
    // {
    //   sp: 'active',
    //   req: 'esr:gmNgZJhQOG-WUgqfDQMQNLyU6GVkZIAAJijNARNgVsooKSkottLXT0kt00vKLMlJLM1Lzkgt0kvM1E8syNRPLS5iYiktzUxRMUpLSklMMk3SNU0zTNY1MTRM1bVIszTSTU1KMzYzSEtLNrEwYU8sKPBLzE3ldkKYBAA',
    //   sa: 'gaboesquivel',
    //   rid: '1398298171',
    //   bn: '0',
    //   tx: '45b6258c212c57e7fec4aa726d4153e23987501f308fbca4beea6fbd1052dd0c',
    //   sig: 'SIG_K1_KdvaUXNswAn8UGLJAyMU7FbATjafeDSSWLgqJpiJ6mg8xUUtroBzGBxxznYS1CqkzhB2X5oX83Zqhp3MAP4oKWV12W5Hdx',
    //   rbn: '59360',
    //   ex: '2024-04-18T16:21:19',
    //   cid: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    // }

    const esr = SigningRequest.from(parsed.req, esrNodeJSOptions)
    const id = esr.getInfoKey('uuid')
    const action = esr.getRawActions()[0].name.toString()

    console.log('👋 esr data input ', JSON.stringify({ id, action, esr }))

    // esr request with trx id
    // TODO: review this logic, inserting for now on single go
    const supabase = await createSupabaseServerClient()
    const { data: esrUpdate, error } = await supabase
      .from('esr')
      .insert({
        id,
        code: parsed.req,
        account: parsed.sa,
        trx_id: parsed.tx,
        created_at: new Date().toISOString()
      })
      .select('*')

    if (error) {
      throw new Error(`Error updating ESR entry: ${error.message}`)
    }
    console.log('ESR entry updated successfully:', esrUpdate)

    // create a session is if the signed action is login
    if (action === 'login') {
      const { data: session, error: sessionError } = await supabase
        .from('session')
        .insert([
          {
            id,
            tx: parsed.tx,
            account: parsed.sa,
            esr_code: parsed.req
          }
        ])
        .select('*')

      if (sessionError) {
        throw new Error(`Error creating session: ${sessionError.message}`)
      }
      console.log('Session created successfully:', session)
    }

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

const SigningRequestCallbackPayloadSchema = z.object({
  sp: z.string(),
  req: z.string(),
  sa: z.string(),
  rid: z.string(),
  bn: z.string(),
  tx: z.string(),
  sig: z.string(),
  rbn: z.string(),
  ex: z.string(),
  // ex: z.string().refine(arg => !isNaN(Date.parse(arg)), {
  //   message: 'ex must be a valid ISO date string'
  // }),
  cid: z.string()
})
