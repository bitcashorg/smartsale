'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { appConfig } from '@/lib/config'
import { useSupabaseClient } from '@/services/supabase'
import type { PresaleContribution } from '@/services/supabase/service'
import { TestnetBLPL } from '@repo/contracts'
import { formatAddress } from '@repo/utils'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export function PresaleTransactionsCard() {
  const { address } = useAccount()
  const supabase = useSupabaseClient()
  const [contributions, setTransactions] = useState<PresaleContribution[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const subscription = supabase
      .channel('presale_transfer_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'presale_deposit',
          filter: `from=eq.${address}`,
        },
        (payload) => {
          console.log('subscription payload')
          if (payload.eventType === 'INSERT') {
            console.log('insert', payload)
            // setTransactions((prev) => [
            //   payload.new as Tables<'transfer'>,
            //   ...prev,
            // ])
          } else if (payload.eventType === 'UPDATE') {
            console.log('update', payload)
            // setTransactions(
            //   (prev) =>
            //     prev.map((t) =>
            //       t.hash === payload.new.hash
            //         ? (payload.new as Tables<'transfer'>)
            //         : t,
            //     ),
            //   // .sort(
            //   //   (a, b) =>
            //   //     new Date(b.created_at).getTime() -
            //   //     new Date(a.created_at).getTime(),
            //   // ),
            // )
          }
        },
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
        {/* <Button asChild size="sm" className="gap-1 ml-auto"></Button> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Deposit</TableHead>
              <TableHead>Issuance</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {error ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-red-500">
                  Error: {error.message}
                </TableCell>
              </TableRow>
            ) : contributions.length > 0 ? (
              contributions.map((contribution) => (
                <TransactionRow
                  key={contribution.id}
                  contribution={contribution}
                />
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

function TransactionRow({
  contribution,
}: { contribution: PresaleContribution }) {
  const chain = contribution.transaction.chain_id
    ? appConfig.chains.get(contribution.transaction.chain_id)
    : null

  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{formatAddress(contribution.address)}</div>
      </TableCell>

      <TableCell>
        {contribution.amount !== null
          ? (contribution.amount / 1000000).toFixed(6)
          : 'N/A'}
      </TableCell>

      <TableCell>
        {chain?.blockExplorers?.default ? (
          <a
            href={`${chain.blockExplorers.default.url}/tx/${contribution.transaction.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {formatAddress(contribution.transaction.hash)}
          </a>
        ) : (
          formatAddress(contribution.transaction.hash)
        )}
      </TableCell>

      <TableCell>
        {TestnetBLPL.chain?.blockExplorers?.default &&
        contribution.transaction.hash ? (
          <a
            href={`${TestnetBLPL.chain.blockExplorers.default.url}/tx/${contribution.transaction.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {formatAddress(contribution.transaction.hash)}
          </a>
        ) : contribution.transaction.hash ? (
          formatAddress(contribution.transaction.hash)
        ) : (
          'pending'
        )}
      </TableCell>
      <TableCell>
        {new Date(contribution.transaction.created_at).toLocaleDateString()}
      </TableCell>
      <TableCell>{chain?.name}</TableCell>
    </TableRow>
  )
}
