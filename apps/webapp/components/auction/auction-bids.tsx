import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { ProjectWithAuction } from '@/lib/projects'

export function AuctionBids({ project }: { project: ProjectWithAuction }) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-red-600">Max Price</TableHead>
            <TableHead className="bg-green-600">Tokens</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="bg-green-500">$5.50</TableCell>
            <TableCell className="bg-green-500">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-green-500">$4.00</TableCell>
            <TableCell className="bg-green-500">50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-green-500">$4.00</TableCell>
            <TableCell className="bg-green-500">50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-red-500">$3.50</TableCell>
            <TableCell className="bg-red-500">50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-red-500">$3.00</TableCell>
            <TableCell className="bg-red-500">35</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-4">
        <p>{textValues.currentBid}</p>
        <p>{textValues.currentCost}</p>
        <p className="mt-2 text-sm">{textValues.maxTokenLimit}</p>
      </div>
    </>
  )
}

const textValues = {
  countdownTitle: 'COUNTDOWN',
  days: '12',
  hours: '08',
  minutes: '37',
  seconds: '24',
  ticker: 'Ticker: BANK',
  currentAuctionPrice: 'Current Auction Price: $3.75',
  currentBid: 'Current Bid: 200 @ $3.75',
  currentCost: 'Current Cost: $750',
  maxTokenLimit: '*Max Token Limit: 285 ($1,000)'
}
