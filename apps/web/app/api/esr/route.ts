import { deflateRawSync, inflateRawSync } from 'zlib'
import { savePresaleDepositIntent } from '@/app/actions/save-deposit'
import { appConfig } from '@/lib/config'
import { createSupabaseServerClient } from '@/services/supabase'
import { insertTransaction } from '@/services/supabase/service'
import { tasks } from '@trigger.dev/sdk/v3'
import { APIClient } from '@wharfkit/antelope'
import {
  type AbiProvider,
  CallbackPayload,
  SigningRequest,
  type SigningRequestEncodingOptions,
  type ZlibProvider,
} from 'eosio-signing-request'
import { type NextRequest, NextResponse } from 'next/server'
import { parseUnits } from 'viem'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    // const parsed = SigningRequestCallbackPayloadSchema.safeParse(await req.json())
    const parsed = await req.json()
    console.log('CAllBACK PARAMS 😎😎😎', parsed)
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
    const isPresale = Boolean(esr.getInfoKey('presale'))

    console.log('👋 esr data input ', JSON.stringify({ id, action, isPresale, esr }))

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
        created_at: new Date().toISOString(),
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
            esr_code: parsed.req,
          },
        ])
        .select('*')

      if (sessionError) {
        throw new Error(`Error creating session: ${sessionError.message}`)
      }
      console.log('Session created successfully:', session)
    }

    if (isPresale) {
      const transaction = await insertTransaction(
        {
          hash: parsed.tx,
          trx_type: 'presale_deposit',
          final: false,
          chain_id: 1,
          chain_type: 'eos',
        },
        supabase,
      )
      if (!transaction) throw new Error('Error creating transaction')

      // NOTE: hotfix for now, we dont wait finality as indexer is in progress
      const eosDeposit = {
        trxId: parsed.tx,
        from: parsed.sa,
        quantity: parsed.bn,
        to: parsed.sa,
      }
      const result = await tasks.trigger('eos-presale-deposit', eosDeposit)
      console.info(
        `Triggered address activity event for webhook ${eosDeposit.trxId}`,
        result,
      )

      // TODO: save deposit intent here instead of trigger job
      // console.log('Transaction hash:', trxHash)
      // const deposit = await savePresaleDepositIntent({
      //   amount: Number(parseUnits(amount, 6)),
      //   created_at: new Date().toISOString(),
      //   deposit_hash: trxHash,
      //   issuance_hash: null,
      //   presale_id: project.presaleId as number,
      //   address,
      //   project_id: project.id,
      //   account: session?.account,
      //   chain_type: evmToken.chainType,
      //   chainId: evmToken.chainId,
      // })
      // console.log('deposit', deposit)

      console.log('Saved transaction:', transaction)
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully received esr callback',
    })
  } catch (error: any) {
    console.error('Error handling request:', error)
    return NextResponse.json({
      success: false,
      message: error.message || 'An error occurred during the request processing',
    })
  }
}

const eos = new APIClient({
  url: appConfig.eosRpc,
})

const esrNodeJSOptions: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async (account) => {
      const response = await eos.v1.chain.get_abi(account.toString())
      return response.abi
    },
  } as AbiProvider,
  zlib: {
    deflateRaw: (data) => new Uint8Array(deflateRawSync(Buffer.from(data))),
    inflateRaw: (data) => new Uint8Array(inflateRawSync(Buffer.from(data))),
  } as ZlibProvider,
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
  cid: z.string(),
})
