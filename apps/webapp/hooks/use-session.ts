import { genLoginSigningRequest } from '@/lib/esr'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { useAsync, useLocalStorage } from 'react-use'
import { session } from 'smartsale-db'

export function useSession() {
  const [newSessionId] = useState(crypto.randomUUID())
  const [session, setSession, removeSession] =
    useLocalStorage<session>('bitcash-session')
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))

  useEffect(() => {
    const channel = supabase
      .channel('*')
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

  console.log({ loginSR })

  return { newSessionId, session, loginUri: loginSR?.value?.encode() }
}
