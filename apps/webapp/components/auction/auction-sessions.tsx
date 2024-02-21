'use client'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { formatAddress } from '@/lib/utils'
import { format } from 'date-fns'

const supabase = createClient(
  'https://dvpusrbojetnuwbkyhzj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cHVzcmJvamV0bnV3Ymt5aHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNDE2NjcsImV4cCI6MjAyMjkxNzY2N30.bW2V9YKuBkEQzzQh0wDh1LYW2JP3mO4UaxnVoShCW3k'
)

export function AuctionSessions() {
  const { address } = useAccount()
  const [sessions, setSessions] = useState<any[]>([])

  const fetchSessions = async () => {
    console.log('fetch sessions...')
    const { data, error } = await supabase
      .from('sessions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) return
    setSessions(data)
  }

  useEffect(() => {
    fetchSessions()

    const channel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'sessions' },
        payload => {
          // Check if the inserted session's user_id matches the desired userId

          setSessions(sessions => {
            console.log('setSessions', payload.new, sessions[0])
            return [payload.new, ...sessions]
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [setSessions])

  // console.log(stringify(sessions))

  return (
    <div className="pt-8">
      <h2>Session history</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>account</TableHead>
            <TableHead>date</TableHead>
            <TableHead>tx</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session, index) => (
            <TableRow key={index}>
              <TableCell>{session.accoount}</TableCell>
              <TableCell>
                {' '}
                {format(
                  new Date(session.created_at),
                  "MMMM d, yyyy 'at' h:mm a"
                )}
              </TableCell>
              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(session.tx)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(session.transactionHash)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
