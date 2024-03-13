import { genLoginSigningRequest } from '@/lib/eos'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage } from 'react-use'
import { session } from 'smartsale-db'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useSearchParams } from 'next/navigation'
import { fetchJson } from 'smartsale-lib'
import { ReactNode } from 'react'
import React from 'react'

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)

export function useSessionFn() {
  const searchParams = useSearchParams()
  const [newSessionId] = useState(crypto.randomUUID())
  const [session, setSession] = useLocalStorage<session>('bitcash-session')
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))

  useEffect(() => {
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          if (session || payload.new.id !== newSessionId) return
          // set new session if ids match
          setSession(payload.new as session)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [setSession])

  useEffect(() => {
    const session_id = searchParams.get('session_id')
    console.log(`url session effect  ${session_id}`)
    const getSession = async () => {
      console.log(`getting session ${session_id}`)
      const response = await fetchJson<any>('/api/session', {
        method: 'POST',
        body: JSON.stringify({ session_id })
      })
      console.log(`getting session response`, response)
      if (!response.data.session) return
      console.log('✅ session', response.data.session)
      setSession(response.data.session)
      history.replaceState({}, document.title, window.location.pathname)
    }
    if (session_id) getSession()
  }, [searchParams])

  // emit esr login event on load if account not found
  // NOTE: disabled
  // useEffect(() => {
  //   const emitLoginEsr = async () => {
  //     const esr = await genLoginSigningRequest()
  //     window.parent &&
  //       window.parent &&
  //       console.log('emitting esr event', {
  //         eventType: 'esr',
  //         code: esr.encode()
  //       })
  //     window.parent &&
  //       window.parent.postMessage({ eventType: 'esr', code: esr.encode() }, '*')
  //   }
  //   emitLoginEsr()
  // })

  // console.log('🙌🏻 loginSR', loginSR.value?.encode().replace('esr://', ''))

  return { newSessionId, session, loginUri: loginSR?.value?.encode() }
}

function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

export { SessionProvider, useSession }
