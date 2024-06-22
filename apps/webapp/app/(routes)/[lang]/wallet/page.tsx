import { DepositCard } from '@/components/routes/wallet/deposit-card'

import { WithdrawCard } from '@/components/routes/wallet/withdraw-card'
import { Metadata } from 'next'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { BalancesTable } from '@/components/routes/wallet/balances-table'
import { WalletTabs } from '@/components/routes/wallet/tabs'
import { OrderCard } from '@/components/routes/wallet/order-card'

export default function WalletPage() {
  return (
    <div className="container flex flex-col gap-16 px-7 md:pt-24">
      <div className="space-between flex flex-col gap-10 md:flex-row">
        <div className="md:w-2/3">
          <BalancesCard />
        </div>
        <div className="flex w-full flex-col gap-5 md:w-1/3">
          <DepositCard />
          <WithdrawCard />
        </div>
      </div>

      <main className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <WalletTabs />
        </div>

        <OrderCard />
      </main>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Wallet | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}

function BalancesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Balances</CardTitle>
        <CardDescription>
          You balances on the Bitcash | Bitlauncher ecosystem. Connect your
          Bitcash and EVM wallets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BalancesTable />
      </CardContent>
    </Card>
  )
}
