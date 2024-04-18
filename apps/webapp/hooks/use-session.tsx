import { genLoginSigningRequest } from '@/lib/eos'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage, useToggle } from 'react-use'
import React, { ReactNode } from 'react'
import { useSupabaseClient } from '@/services/supabase'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Tables } from '@repo/supabase'
import { useGlobalStore } from './use-global-store'
import axios from 'axios'
import { getErrorMessage } from 'smartsale-lib'

export { SessionProvider, useSession }

// don export this fn must be wrapped for context to work
function useSessionFn() {
  const supabase = useSupabaseClient()
  const [newSessionId] = useState(crypto.randomUUID())
  const { viewport } = useGlobalStore()
  const { openConnectModal } = useConnectModal()
  // this controls the session dialog with register and login qr codes
  // when login qr code is display a new esr is created and saved on db for later reference on callback call
  const [showSessionDialog, toggleShowSessionDialog] = useToggle(false)
  const [session, setSession] =
    useLocalStorage<Tables<'session'>>('bitcash-session')

  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const loginUri = loginSR?.value?.encode()

  // subscribe to supabase session table and set session state
  // this table get updated by /api/esr callback invoked by the signing wallet
  useEffect(() => {
    console.log(`🧑🏻‍💻 🍓 subscribing to session ${newSessionId}`)
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          console.log(' 🍓 new supabase session', payload.new)
          // set new session if ids match
          if (session || payload.new.id !== newSessionId) return
          console.log(' ✅ supabase session id matches', payload.new)
          setSession(payload.new as Tables<'session'>)
        }
      )
      .subscribe()

    return () => {
      console.log('XX unsubscribing to session')
      supabase.removeChannel(channel)
    }
  }, [setSession, supabase])

  // default moblie login mode is redirect
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
    location.href = `https://app.bitcash.org?${params.toString()}`
  }

  // const toggleSessionDialog = async (show?: boolean) => {
  //   console.log('🫶🏻 toggle session')

  //   // dont call new entry endpoint when hiding
  //   if (showSessionDialog) return toggleShowSessionDialog(false)
  //   // create new entry for later check on backend
  //   try {
  //     // console.log('🦚 creting esr entry in supabase')
  //     // const response = await axios.post('/api/esr-entry', {
  //     //   code: loginUri,
  //     //   account: session.account
  //     // })
  //     // if (!response) return console.log('💥 error creating entry in supabase')
  //   } catch (error) {
  //     console.log('💥 error creating entry', getErrorMessage(error))
  //   }
  // }

  // show rainbowkit to link evm wallet if logged in
  // else call login action depending base on viewport
  const loginOrConnect = () => {
    session && openConnectModal
      ? openConnectModal()
      : viewport === 'mobile'
        ? loginRedirect()
        : toggleShowSessionDialog(true)
  }

  return {
    newSessionId,
    session,
    loginUri,
    showSessionDialog,
    loginRedirect,
    openConnectModal,
    loginOrConnect,
    toggleShowSessionDialog
  }
}

function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)
