import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { session } from 'smartsale-db'

export function useSession() {
  const [session, setSession, removeSession] =
    useLocalStorage<session>('bitcash-session')

  useEffect(() => {
    const channel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => !session && setSession(payload.new as session)
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [setSession])

  return { session }
}
