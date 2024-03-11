import { AuctionOrders } from '@/components/auction/auction-orders'
import { DepositCard } from '@/components/wallet/deposit-card'
import { UserTransactions } from '@/components/wallet/user-transactions'
import { WalletBalances } from '@/components/wallet/wallet-balances'
import { WithdrawCard } from '@/components/wallet/withdraw-card'
import React from 'react'

export default function WalletPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-16 w-full h-full min-h-[512px] mb-20">
          <div className="flex flex-col gap-5 md:flex-row space-between">
            <div className="md:w-2/3">
              <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
              <WalletBalances />
            </div>
            <div className="flex flex-col w-full gap-5 md:w-1/3">
              <DepositCard />
              <WithdrawCard />
            </div>
          </div>

          <div>
            <React.Suspense fallback={<div>Loading ...</div>}>
              <UserTransactions />
            </React.Suspense>
          </div>

          <div>
            <React.Suspense fallback={<div>Loading ...</div>}>
              <AuctionOrders />
            </React.Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
