import { genLoginSigningRequest } from '@/lib/eos'
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

  return { newSessionId, session, loginUri: loginSR?.value?.encode() }
}
