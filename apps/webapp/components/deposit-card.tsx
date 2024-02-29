'use client'

import { Button } from '@/components/ui/button'
import { CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select'
import { Input } from './ui/input'
import { useSession } from '@/hooks/use-session'

export function DepositCard() {
  const { session } = useSession()
  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      {/* <CardHeader className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <Button className="text-white" variant="ghost">
            Swap
          </Button>
          <Button className="text-white" variant="ghost">
            Buy
          </Button>
          <Button className="text-white" variant="ghost">
            Send
          </Button>
        </div>
        <SettingsIcon className="text-white" />
      </CardHeader> */}
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">Deposit USDT</div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[50%]">
              <span className="text-2xl font-semibold">
                <Input type="number" placeholder="0.00" />
              </span>
            </div>
            <Select>
              <SelectTrigger id="currency-out">
                <SelectValue placeholder="SEPOLIA" />
                {/* <ChevronDownIcon className="text-white" /> */}
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="sepolia">SEPOLIA</SelectItem>
                <SelectItem value="eth">ETHEREUM</SelectItem>
                <SelectItem value="arb">ARBITRUM</SelectItem>
                <SelectItem value="pol">POLYGON</SelectItem>
                <SelectItem value="ava">AVALANCHE</SelectItem>
                <SelectItem value="eos">EOS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="flex justify-center">
            <ArrowDownIcon className="text-white" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm">You receive</span>
              <span className="text-2xl font-semibold">0.58542</span>
              <span className="text-sm">
                $1,390.73 <span className="text-red-600">(-0.66%)</span>
              </span>
            </div>
            <Select>
              <SelectTrigger id="currency-in">
                <SelectValue placeholder="ETH" />
                <ChevronDownIcon className="text-white" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="eth">ETH</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {/* <div className="flex items-center justify-between">
          <span className="text-sm">1 ETH = 1,227.68 RAD ($2,375.61)</span>
          <Select>
            <SelectTrigger id="transaction-fee">
              <SelectValue placeholder="$17.33" />
              <ChevronDownIcon className="text-white" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="fee">$17.33</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        <Button className="w-full bg-[#bd1e59]" disabled={!session}>
          Deposit
        </Button>
      </CardFooter>
    </Card>
  )
}

// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

// function ArrowDownIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 5v14" />
//       <path d="m19 12-7 7-7-7" />
//     </svg>
//   )
// }
