'use client'

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
import { useSupabaseClient } from '@/services/supabase'
import type { PresaleContribution } from '@/services/supabase/service'
import { TestnetBLPL } from '@repo/contracts'
import { formatAddress } from '@repo/utils'
import { prodChains } from 'app-env'
import { useEffect, useState } from 'react'

export function PresaleTransactionsCard(params: {
  contributions: PresaleContribution[]
}) {
  const supabase = useSupabaseClient()
  const [contributions, setContributions] = useState<PresaleContribution[]>(
    params.contributions,
  )

  useEffect(() => {

    const subscription = supabase
      .channel('presale_transfer_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'presale_deposit, transaction!presale_deposit_deposit_hash_fkey(*)',
         // filter: `from=eq.${address}`,
        },
        (payload) => {
          console.log('subscription payload')
          if (payload.eventType === 'INSERT') {
            console.log('insert', payload)
            setContributions((prev) => [
              payload.new as PresaleContribution,
              ...prev,
            ])
          } else if (payload.eventType === 'UPDATE') {
            console.log('update', payload)
            setContributions(
              (prev) =>
                prev.map((t) =>
                  t.deposit_hash=== payload.new.deposit_hash
                    ? (payload.new as PresaleContribution)
                    : t,
                )
            )
          }
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

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
            {contributions.length > 0 ? (
              contributions.map((contribution) => (
                <TransactionRow key={contribution.id} contribution={contribution} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
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

function TransactionRow({ contribution }: { contribution: PresaleContribution }) {

const chain = prodChains.find(chain => chain.id === contribution.transaction.chain_id)

console.log('chain', chain)
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
        {TestnetBLPL.chain?.blockExplorers?.default && contribution.transaction.hash ? (
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
        {contribution.transaction.created_at ? new Date(contribution.transaction.created_at).toLocaleDateString() : 'N/A'}
      </TableCell>
      <TableCell>{chain?.name ?? 'Unknown Chain'}</TableCell>
    </TableRow>
  )
