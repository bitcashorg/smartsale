'use client'
import { useSession } from '@/hooks/use-session'
import { esrOptions } from '@/lib/eos'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SigningRequest } from 'eosio-signing-request'
import { useSearchParams } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { useSetState } from 'react-use'

export const [useSigningRequest, UseSigningRequestProvider] = createContextHook(
  useSigningRequestFn,
  'You must wrap your application with <UseSigningRequestProvider /> in order to useSigningRequest().',
)

function useSigningRequestFn() {
  const supabase = useSupabaseClient()
  const { session } = useSession()
  const searchParams = useSearchParams()
  const [state, setState] = useSetState<SignatureRequestState>(defaultState)

  const { mutate: requestSignature, ...props } = useMutation({
    mutationFn: async (esr: SigningRequest) => {
      console.log('requestSignature', esr)
      if (!session?.account) throw new Error('bitcash account not found')

      // redirect with esr and callback on mobile if not within bitcash explorer
      if (isMobile && !searchParams.has('bitcash_explorer')) {
        const params = new URLSearchParams()
        params.append('esr', esr.encode())
        params.append('callback', encodeURIComponent(window.location.href))
        window.location.href = `https://app.bitcash.org/login?${params.toString()}`
      }

      // post request event on bitcash explorer
      if (searchParams.has('bitcash_explorer')) {
        console.log('emitting event to parent')
        return window.parent.postMessage({ eventType: 'esr', code: esr.encode() }, '*')
      }

      // we show the qr optimistically
      setState({
        esr,
        open: true,
      })
      console.log('inserting esr', esr.encode())
      const response = await axios.post('/api/esr-entry', {
        code: esr.encode(),
        account: session.account,
      })
      return response.data
    },
    onSuccess: ({ data }) => {
      const esr = SigningRequest.from(data.code, esrOptions)

      // handle success, possibly setting up a subscription to listen for changes
      const channel = supabase
        .channel('esr')
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'esr' },
          (payload) => {
            console.log('ESR UPDATE!', payload)
            if (payload.new.id !== esr.getInfoKey('uuid')) return
            if (!payload.new.trx_id) return
            // if uuid matches remove channel and reset state
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

  const toggleOpen = () =>
    !searchParams.has('bitcash_explorer') && setState(({ open }) => ({ open: !open }))

  return { toggleOpen, requestSignature, ...state, ...props }
}

interface SignatureRequestState {
  open: boolean
  esr: SigningRequest | null
  channel: RealtimeChannel | null
}

const defaultState: SignatureRequestState = {
  open: false,
  esr: null,
  channel: null,
}
