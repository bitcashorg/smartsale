'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { esrOptions } from '@/lib/eos'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import { RealtimeChannel } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SigningRequest } from 'eosio-signing-request'
import { useSearchParams } from 'next/navigation'
import React, { ReactNode } from 'react'
import QRCode from 'react-qr-code'
import { useSetState } from 'react-use'
import { runtimeEnv } from 'smartsale-lib'

interface SignatureRequestState {
  open: boolean
  esr: SigningRequest | null
  channel: RealtimeChannel | null
}

const defaultState: SignatureRequestState = {
  open: false,
  esr: null,
  channel: null
}

function useSignatureRequestFn() {
  const supabase = useSupabaseClient()
  const { session } = useSession()
  const searchParams = useSearchParams()
  const [state, setState] = useSetState<SignatureRequestState>(defaultState)

  const { mutate: requestSignature, ...props } = useMutation({
    mutationFn: async (esr: SigningRequest) => {
      console.log('requestSignature', esr)
      if (!session?.account) throw new Error('bitcash account not found')

      // redirect with esr and callback on mobile if not within bitcash explorer
      if (runtimeEnv.isMobile && !searchParams.has('bitcash_explorer')) {
        const params = new URLSearchParams()
        params.append('esr_code', esr.encode())
        params.append('callback', encodeURIComponent(window.location.href))
        window.location.href = `https://test.bitcash.org/login?${params.toString()}`
      }

      // post request event on bitcash explorer
      if (searchParams.has('bitcash_explorer')) {
        console.log('emitting event to parent')
        return window.parent.postMessage(
          { eventType: 'esr', code: esr.encode() },
          '*'
        )
      }

      console.log('setting state')
      // we show the qr optimistically
      setState({
        esr,
        open: true
      })
      console.log('inserting esr', esr.encode())
      const response = await axios.post('/api/esr-entry', {
        code: esr.encode(),
        account: session.account
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
          payload => {
            console.log('ESR UPDATE!', payload)
            if (payload.new.id !== esr.getInfoKey('uuid')) return
            if (!payload.new.trx_id) return
            // if uuid matches remove channel and reset state
            supabase.removeChannel(state.channel!)
            setState(defaultState)
          }
        )
        .subscribe()
      console.log('subscribed to esr channel')

      setState({
        channel
      })
    }
  })

  const toggleOpen = () =>
    !searchParams.has('bitcash_explorer') &&
    setState(({ open }) => ({ open: !open }))

  return { toggleOpen, requestSignature, ...state, ...props }
}

const [useSignatureRequest, UseSignatureRequestProvider] = createContextHook(
  useSignatureRequestFn,
  'You must wrap your application with <UseSignatureRequestProvider /> in order to useSignatureRequest().'
)

function EsrDialog() {
  const searchParams = useSearchParams()
  const { open, toggleOpen, esr } = useSignatureRequest()
  const code = esr?.encode() || ''

  // never show the qr on mobile or bitcash explorer
  const hideQr =
    runtimeEnv.isMobile || searchParams.has('bitcash_explorer') || !code

  if (hideQr) return <div />
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      {/* <DialogTrigger asChild>
        <Button>Trigger</Button>
      </DialogTrigger> */}
      {/* @ts-ignore */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* @ts-ignore */}
          <DialogTitle>Sign transaction</DialogTitle>
          {/* @ts-ignore */}
          <DialogDescription>
            Scan this qr code on your bitcash app and sign.
          </DialogDescription>
        </DialogHeader>
        {esr ? (
          <div className="qr-code-container">
            <QRCode
              size={256}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
                borderRadius: 4
              }}
              value={code}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
        <DialogFooter className="flex sm:justify-center ">
          go to app.bitcash.org to register
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const SigningRequestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <React.Suspense fallback={<div />}>
      <UseSignatureRequestProvider>
        {children}
        <EsrDialog />
      </UseSignatureRequestProvider>
    </React.Suspense>
  )
}

export { SigningRequestProvider, useSignatureRequest }
