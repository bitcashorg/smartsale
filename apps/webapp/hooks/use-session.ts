import { genLoginSigningRequest } from '@/lib/esr'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage } from 'react-use'
import { session } from 'smartsale-db'

import { createContextHook } from '@blockmatic/hooks-utils'

export const [useSession, SessionProvider] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)

export function useSessionFn() {
  const [newSessionId] = useState(crypto.randomUUID())
  const [session, setSession, removeSession] =
    useLocalStorage<session>('bitcash-session')
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))

  useEffect(() => {
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          console.log(
            'new session',
            payload.new,
            payload.new.id !== newSessionId,
            payload.new.id,
            newSessionId
          )
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

  return { newSessionId, session, loginUri: loginSR?.value?.encode() }
}
