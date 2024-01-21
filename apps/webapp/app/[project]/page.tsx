import { TimerIcon } from 'lucide-react';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';

export default function ProjectPage() {

  return (
    <div className="container flex flex-col md:flex-row">
      <div className="w-full p-4 md:w-2/3">
        <div className="p-8 bg-black">
          <div className="flex justify-between mb-4">
            <div>
              <TimerIcon className="text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">{textValues.countdownTitle}</h2>
            </div>
            <div />
          </div>
          <div className="flex justify-between text-center">
            <div>
              <div className="text-6xl font-bold">{textValues.days}</div>
              <div className="text-sm">DAYS</div>
            </div>
            <div>
              <div className="text-6xl font-bold">{textValues.hours}</div>
              <div className="text-sm">HOURS</div>
            </div>
            <div>
              <div className="text-6xl font-bold">{textValues.minutes}</div>
              <div className="text-sm">MINUTES</div>
            </div>
            <div>
              <div className="text-6xl font-bold">{textValues.seconds}</div>
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
          <h2 className="mt-2 text-2xl">{textValues.ticker}</h2>
          <p className="mt-2 text-2xl">{textValues.currentAuctionPrice}</p>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/3">
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
      </div>
    </div>
  );
}

  const textValues = {
    countdownTitle: "COUNTDOWN",
    days: "12",
    hours: "08",
    minutes: "37",
    seconds: "24",
    ticker: "Ticker: BANK",
    currentAuctionPrice: "Current Auction Price: $3.75",
    currentBid: "Current Bid: 200 @ $3.75",
    currentCost: "Current Cost: $750",
    maxTokenLimit: "*Max Token Limit: 285 ($1,000)"
  };
