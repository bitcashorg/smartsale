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

interface Transaction {
  name: string
  email: string
  type: string
  status: string
  date: string
  amount: string
}

const transactions: Transaction[] = [
  {
    name: 'Liam Johnson',
    email: 'liam@example.com',
    type: 'Sale',
    status: 'Approved',
    date: '2023-06-23',
    amount: '$250.00'
  },
  {
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    type: 'Refund',
    status: 'Declined',
    date: '2023-06-24',
    amount: '$150.00'
  },
  {
    name: 'Noah Williams',
    email: 'noah@example.com',
    type: 'Subscription',
    status: 'Approved',
    date: '2023-06-25',
    amount: '$350.00'
  },
  {
    name: 'Emma Brown',
    email: 'emma@example.com',
    type: 'Sale',
    status: 'Approved',
    date: '2023-06-26',
    amount: '$450.00'
  },
  {
    name: 'Liam Johnson',
    email: 'liam@example.com',
    type: 'Sale',
    status: 'Approved',
    date: '2023-06-27',
    amount: '$550.00'
  }
]

function TransactionRow({ transaction }: { transaction: Transaction }) {
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{transaction.name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {transaction.email}
        </div>
      </TableCell>
      <TableCell>{transaction.type}</TableCell>
      <TableCell>
        <Badge className="text-xs" variant="outline">
          {transaction.status}
        </Badge>
      </TableCell>
      <TableCell>{transaction.date}</TableCell>
      <TableCell className="text-right">{transaction.amount}</TableCell>
    </TableRow>
  )
}

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
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell>2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell>Refund</TableCell>
              <TableCell>
                <Badge className="text-xs" variant="outline">
                  Declined
                </Badge>
              </TableCell>
              <TableCell>2023-06-24</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Williams</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  noah@example.com
                </div>
              </TableCell>
              <TableCell>Subscription</TableCell>
              <TableCell>
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell>2023-06-25</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell>2023-06-26</TableCell>
              <TableCell className="text-right">$450.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell>2023-06-27</TableCell>
              <TableCell className="text-right">$550.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
