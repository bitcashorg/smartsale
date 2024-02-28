import { DepositCard } from '@/components/deposit-card'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { AuctionOrders } from '@/components/auction/auction-orders'

export default function WalletPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex flex-col gap-5 md:flex-row space-between">
            <div className="md:w-2/3">
              <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
              <WalletBalances />
            </div>
            <div className="w-full md:w-1/3">
              <DepositCard />
            </div>
          </div>
          <React.Suspense fallback={<div>Loading ...</div>}>
            <AuctionOrders />
          </React.Suspense>
        </div>
      </div>
    </>
  )
}

export function WalletBalances() {
  return (
    <Table>
      <TableCaption>Your balances</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Network</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map(coin => (
          <TableRow key={coin.coin}>
            <TableCell className="font-medium">{coin.coin}</TableCell>
            <TableCell>{coin.nertwork}</TableCell>
            <TableCell className="text-right">{coin.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const coins = [
  {
    coin: 'USDCred',
    totalAmount: '250.00',
    nertwork: 'EOS EVM'
  },
  {
    coin: 'EOS (gas)',
    totalAmount: '3.5',
    nertwork: 'EOS EVM'
  },
  {
    coin: 'BITUSD',
    totalAmount: '350.00',
    nertwork: 'EOS Mainnet'
  },
  {
    coin: 'EOS (gas)',
    totalAmount: '6.3',
    nertwork: 'EOS Mainnet'
  }
]
