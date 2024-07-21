import { Badge } from '@/components/ui/badge'
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
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function PresaleTransactionsCard() {
  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Presale Contributions</CardTitle>
          <CardDescription>Recent presale transactions.</CardDescription>
        </div>
        <Button asChild size="sm" className="gap-1 ml-auto">
          <Link href="#">
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
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
            {transactions.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function TransactionRow({ transaction }: { transaction: Transaction }) {
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{transaction.address}</div>
      </TableCell>
      <TableCell>{transaction.network}</TableCell>
      <TableCell>{transaction.trxHash}</TableCell>
      <TableCell>{transaction.date}</TableCell>
      <TableCell className="text-right">{transaction.amount}</TableCell>
    </TableRow>
  )
}

interface Transaction {
  address: string
  network: string
  trxHash: string
  date: string
  amount: string
}

const transactions: Transaction[] = [
  {
    address: '0x1234...abcd',
    network: 'Ethereum',
    trxHash: '0xabc123...',
    date: '2023-06-23',
    amount: '$250.00'
  },
  {
    address: '0x5678...efgh',
    network: 'Binance Smart Chain',
    trxHash: '0xdef456...',
    date: '2023-06-24',
    amount: '$150.00'
  },
  {
    address: '0x9abc...ijkl',
    network: 'Polygon',
    trxHash: '0xghi789...',
    date: '2023-06-25',
    amount: '$350.00'
  },
  {
    address: '0xdef0...mnop',
    network: 'Avalanche',
    trxHash: '0xjkl012...',
    date: '2023-06-26',
    amount: '$450.00'
  },
  {
    address: '0x1234...abcd',
    network: 'Ethereum',
    trxHash: '0xabc123...',
    date: '2023-06-27',
    amount: '$550.00'
  }
]
