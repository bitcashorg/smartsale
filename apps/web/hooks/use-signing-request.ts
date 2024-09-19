'use client'
import { useSession } from '@/hooks/use-session'
import { esrOptions } from '@/lib/eos'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SigningRequest } from 'eosio-signing-request'
import { useEffect } from 'react'
import { useSetState } from 'react-use'

export const [useSigningRequest, UseSigningRequestProvider] = createContextHook(
  useSigningRequestFn,
  'You must wrap your application with <UseSigningRequestProvider /> in order to useSigningRequest().',
)

function useSigningRequestFn() {
  const supabase = useSupabaseClient()
  const { session } = useSession()
  const [state, setState] = useSetState<SignatureRequestState>(defaultState)

  const { mutate: requestSignature, ...props } = useMutation({
    mutationFn: async (esr: SigningRequest) => {
      console.log('requesting signature', esr.encode())
      if (!session?.account) throw new Error('bitcash account not found')
      const params = new URLSearchParams()

      params.append('source', 'bitlauncher.ai')
      const esrCode = esr.encode().replace('esr://', '')
      params.append('esr', esrCode)

      // we show the qr optimistically
      setState({
        esr,
        esrUrl: `https://app.bitcash.org?${params.toString()}`,
        open: true,
      })
      console.log('inserting esr', esr.encode())
      const response = await axios.post('/api/esr', {
        code: esr.encode(),
        account: session.account,
      })
      return response.data
    },
    onSuccess: ({ data }) => {
      console.log('esr success', data)
      const esr = SigningRequest.from(data.code, esrOptions)

      // handle success, possibly setting up a subscription to listen for changes
      const channel = supabase
        .channel('esr')
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'esr' },
          (payload) => {
            console.log('🚀 ESR UPDATE!', payload)
            if (payload.new.id !== esr.getInfoKey('uuid')) return
            if (!payload.new.trx_id) return
            // if uuid matches remove channel and reset state
            console.log('🚀 unsubscribing from esr channel')
            supabase.removeChannel(state.channel!)
            setState(defaultState)
          },
        )
        .subscribe()
      console.log('subscribed to esr channel')

      setState({
        channel,
      })
    },
  })

  useEffect(() => {
    return () => {
      console.log('unsubscribing from esr channel')
      state.channel && supabase.removeChannel(state.channel)
    }
  }, [state.channel, supabase])

  const toggleOpen = () => setState(({ open }) => ({ open: !open }))

  return { toggleOpen, requestSignature, ...state, ...props }
}

interface SignatureRequestState {
  open: boolean
  esr: SigningRequest | null
  channel: RealtimeChannel | null
  esrUrl: string | null
}

const defaultState: SignatureRequestState = {
  open: false,
  esr: null,
  channel: null,
  esrUrl: null,
}
