'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useSupabaseClient } from '@/services/supabase'
import { useAccount } from 'wagmi'
import { Tables } from '@repo/supabase'
import { appConfig } from '@/lib/config'
import { formatAddress } from 'app-lib'
import { useEffect, useState } from 'react'

export function PresaleTransactionsCard() {
  const { address } = useAccount()
  const supabase = useSupabaseClient()
  const [transactions, setTransactions] = useState<Tables<'transfer'>[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!address) {
      setTransactions([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    const fetchInitialTransactions = async () => {
      try {
        const { data, error } = await supabase
          .from('transfer')
          .select('*')
          .eq('from', address)
          .order('created_at', { ascending: false })

        if (error) throw error
        setTransactions(data as Tables<'transfer'>[])
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialTransactions()

    const subscription = supabase
      .channel('presale_transfer_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'transfer',
          filter: `from=eq.${address}`
        },
        payload => {
          console.log('subscription payload')
          if (payload.eventType === 'INSERT') {
            setTransactions(prev => [
              payload.new as Tables<'transfer'>,
              ...prev
            ])
          } else if (payload.eventType === 'UPDATE') {
            setTransactions(prev =>
              prev
                .map(t =>
                  t.trx_hash === payload.new.trx_hash
                    ? (payload.new as Tables<'transfer'>)
                    : t
                )
                .sort(
                  (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )
            )
          } else if (payload.eventType === 'DELETE') {
            setTransactions(prev =>
              prev.filter(t => t.trx_hash !== payload.old.trx_hash)
            )
          }
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [address, supabase])

  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Presale Contributions</CardTitle>
          <CardDescription>Recent presale transactions.</CardDescription>
        </div>
        <Button asChild size="sm" className="gap-1 ml-auto"></Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Network</TableHead>
              <TableHead>Trx Hash</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-red-500">
                  Error: {error.message}
                </TableCell>
              </TableRow>
            ) : transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <TransactionRow key={index} transaction={transaction} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function TransactionRow({ transaction }: { transaction: Tables<'transfer'> }) {
  const chain = transaction.chain_id
    ? appConfig.chains.get(transaction.chain_id)
    : null
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">
          {formatAddress(transaction.from ?? '')}
        </div>
      </TableCell>
      <TableCell>{chain?.name}</TableCell>
      <TableCell>
        {chain?.blockExplorers?.default ? (
          <a
            href={`${chain.blockExplorers.default.url}/tx/${transaction.trx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {formatAddress(transaction.trx_hash)}
          </a>
        ) : (
          formatAddress(transaction.trx_hash)
        )}
      </TableCell>
      <TableCell>
        {new Date(transaction.created_at).toLocaleDateString()}
      </TableCell>
      <TableCell className="text-right">
        {transaction.amount !== null
          ? (transaction.amount / 1000000).toFixed(6)
          : 'N/A'}
      </TableCell>
    </TableRow>
  )
}
