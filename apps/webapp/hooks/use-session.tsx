import { genLoginSigningRequest } from '@/lib/eos'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage } from 'react-use'
import axios from 'axios'
import React, { ReactNode } from 'react'
import { useSupabaseClient } from '@/services/supabase'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Tables } from '@repo/supabase'

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)

export function useSessionFn() {
  const supabase = useSupabaseClient()
  const searchParams = useSearchParams()
  const [newSessionId] = useState(crypto.randomUUID())
  const [session, setSession] =
    useLocalStorage<Tables<'session'>>('bitcash-session')
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const loginUri = loginSR?.value?.encode()
  const { openConnectModal } = useConnectModal()

  useEffect(() => {
    console.log('subscribing to session')
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          console.log('SESSION!', payload.new)
          if (session || payload.new.id !== newSessionId) return
          // set new session if ids match

          setSession(payload.new as Tables<'session'>)
        }
      )
      .subscribe()

    return () => {
      console.log('XX unsubscribing to session')
      supabase.removeChannel(channel)
    }
  }, [setSession, supabase])

  useEffect(() => {
    const session_id = searchParams.get('session_id')
    console.log(`url session effect  ${session_id}`)
    const getSession = async () => {
      console.log(`getting session ${session_id}`)
      const response = await axios.post('/api/session', { session_id })
      console.log(`getting session response`, response)
      if (!response.data.session) return
      console.log('✅ session', response.data.session)
      setSession(response.data.session)
      history.replaceState({}, document.title, window.location.pathname)
    }
    if (session_id) getSession()
  }, [searchParams])

  const login = () => {
    if (!loginUri || !open) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    const params = new URLSearchParams()
    params.append('esr_code', loginUri.replace('esr://', ''))
    const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
    console.log('💥 callbackUrl', callbackUrl)
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    params.append('callback', encodedCallbackUrl)
    location.href = `https://app.bitcash.org/login?${params.toString()}`
  }

  const loginOrConnect = () => {
    session && openConnectModal ? openConnectModal() : login()
  }

  return {
    newSessionId,
    session,
    loginUri,
    login,
    openConnectModal,
    loginOrConnect
  }
}

function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

export { SessionProvider, useSession }
