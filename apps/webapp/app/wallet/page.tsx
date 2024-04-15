import { AuctionOrders } from '@/components/routes/auction/auction-orders'
import { DepositCard } from '@/components/routes/wallet/deposit-card'
import { TransactionsTable } from '@/components/routes/wallet/transactions-table'
import { BalancesTable } from '@/components/routes/wallet/balances-table'
import { WithdrawCard } from '@/components/routes/wallet/withdraw-card'
import { Metadata } from 'next'
import { Suspense } from 'react'

export default function WalletPage() {
  return (
    <div className="mb-20 flex size-full min-h-[512px] max-w-[100vw] flex-col gap-16 px-2">
      <div className="flex flex-col gap-5 space-between md:flex-row">
        <div className="md:w-2/3">
          <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
          <BalancesTable />
        </div>
        <div className="flex flex-col w-full gap-5 md:w-1/3">
          <DepositCard />
          <WithdrawCard />
        </div>
      </div>

      <div>
        <Suspense fallback={<div>Loading ...</div>}>
          <TransactionsTable />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<div>Loading ...</div>}>
          <AuctionOrders />
        </Suspense>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'wallet | bitlauncher',
  description:
    'Invest in the intelligent future and join the Ai/Web3 revolution now!'
}
