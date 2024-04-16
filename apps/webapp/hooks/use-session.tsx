import { genLoginSigningRequest } from '@/lib/eos'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage } from 'react-use'
import { session } from 'smartsale-db'

import axios from 'axios'
import React, { ReactNode } from 'react'
import { useSupabaseClient } from '@/services/supabase'

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)

export function useSessionFn() {
  const supabase = useSupabaseClient()
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
      const response = await axios.post('/api/session', { session_id })
      console.log(`getting session response`, response)
      if (!response.data.session) return
      console.log('✅ session', response.data.session)
      setSession(response.data.session)
      history.replaceState({}, document.title, window.location.pathname)
    }
    if (session_id) getSession()
  }, [searchParams])

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
