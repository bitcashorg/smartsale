import { genLoginSigningRequest } from '@/lib/eos'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage, useToggle } from 'react-use'
import React, { ReactNode } from 'react'
import { useSupabaseClient } from '@/services/supabase'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Tables } from '@repo/supabase'
import { useGlobalStore } from './use-global-store'

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)
// don export this fn must be wrapped for context to work
function useSessionFn() {
  const supabase = useSupabaseClient()
  const [newSessionId] = useState(crypto.randomUUID())
  const { viewport } = useGlobalStore()

  const { openConnectModal } = useConnectModal()
  const [showLoginDialog, toggleShowLoginDialog] = useToggle(false)
  const [session, setSession] =
    useLocalStorage<Tables<'session'>>('bitcash-session')

  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const loginUri = loginSR?.value?.encode()

  // subscribe to supabase session table and set session state
  // this table get updated by /api/esr callback invoked by the signing wallet
  useEffect(() => {
    console.log('🧑🏻‍💻 🍓 subscribing to session')
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          console.log('SESSION!', payload.new)
          // set new session if ids match
          if (session || payload.new.id !== newSessionId) return
          setSession(payload.new as Tables<'session'>)
        }
      )
      .subscribe()

    return () => {
      console.log('XX unsubscribing to session')
      supabase.removeChannel(channel)
    }
  }, [setSession, supabase])

  const loginRedirect = () => {
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
    location.href = `https://app.bitcash.org/loginRedirect?${params.toString()}`
  }

  const loginOrConnect = () => {
    session && openConnectModal
      ? openConnectModal()
      : viewport === 'mobile'
        ? loginRedirect()
        : toggleShowLoginDialog(true)
  }

  return {
    newSessionId,
    session,
    loginUri,
    showLoginDialog,
    loginRedirect,
    openConnectModal,
    loginOrConnect,
    toggleShowLoginDialog
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
