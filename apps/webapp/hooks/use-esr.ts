import { supabase } from '@/lib/supabase'
import { RealtimeChannel } from '@supabase/supabase-js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useToggle } from 'react-use'

export function useEsr() {
  const [open, toggleOpen] = useToggle(false)
  const [esr, setEsr] = useState('')
  const [channel, setChannel] = useState<RealtimeChannel>()

  const requestSignature = async (esr: string) => {
    // await insert into db with uuid

    const response = await axios.post('/api/esr-insert', { esr })

    // subscribe to row in supabase to get trx_id
    channel && supabase.removeChannel(channel)
    setChannel(
      supabase
        .channel('esr')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'esr' },
          payload => {
            console.log(payload)
          }
        )
        .subscribe()
    )

    // show qr popup
    setEsr(esr)
    toggleOpen(true)
  }

  useEffect(() => {
    return () => {
      channel && supabase.removeChannel(channel)
    }
  }, [])

  return {}
}
