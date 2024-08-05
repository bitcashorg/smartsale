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
// import { ArrowUpRight } from 'lucide-react'
// import Link from 'next/link'
import { useSupabaseClient } from '@/services/supabase'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { Tables } from '@repo/supabase'

export function PresaleTransactionsCard() {
  const { address } = useAccount()
  const supabase = useSupabaseClient()

  const {
    data: transactions,
    isLoading,
    error
  } = useQuery({
    queryKey: ['presaleTransactions', address],
    queryFn: async () => {
      if (!address) return []
      const { data, error } = await supabase
        .from('transfer')
        .select('*')
        .eq('from', address)

      if (error) throw error
      return data as Tables<'transfer'>[]
    },
    enabled: !!address
  })

  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Presale Contributions</CardTitle>
          <CardDescription>Recent presale transactions.</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          {/* <Link href="#">
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link> */}
        </Button>
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
            ) : transactions && transactions.length > 0 ? (
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
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{transaction.from}</div>
      </TableCell>
      <TableCell>{transaction.chain_id}</TableCell>
      <TableCell>{transaction.trx_hash}</TableCell>
      <TableCell>
        {new Date(transaction.created_at).toLocaleDateString()}
      </TableCell>
      <TableCell className="text-right">{transaction.amount}</TableCell>
    </TableRow>
  )
}
