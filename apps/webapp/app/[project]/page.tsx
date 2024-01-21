import { TimerIcon } from 'lucide-react'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'

export default async function IndexPage() {
  return (
    <div className="container flex">
      <div className="w-2/3 p-4">
        <div className="p-8 bg-black">
          <div className="flex justify-between mb-4">
            <div>
              <TimerIcon className="text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">COUNTDOWN</h2>
            </div>
            <div />
          </div>
          <div className="flex justify-between text-center">
            <div>
              <div className="text-6xl font-bold">12</div>
              <div className="text-sm">DAYS</div>
            </div>
            <div>
              <div className="text-6xl font-bold">08</div>
              <div className="text-sm">HOURS</div>
            </div>
            <div>
              <div className="text-6xl font-bold">37</div>
              <div className="text-sm">MINUTES</div>
            </div>
            <div>
              <div className="text-6xl font-bold">24</div>
              <div className="text-sm">SECONDS</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <img
            alt="bitcash logo"
            className="mx-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover'
            }}
            width="100"
          />
          <h2 className="mt-2 text-2xl">Ticker: BANK</h2>
          <p className="mt-2 text-2xl">Current Auction Price: $3.75</p>
        </div>
      </div>
      <div className="w-1/3 p-4">
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
          <p>Current Bid: 200 @ $3.75</p>
          <p>Current Cost: $750</p>
          <p className="mt-2 text-sm">*Max Token Limit: 285 ($1,000)</p>
        </div>
      </div>
    </div>
  )
}
