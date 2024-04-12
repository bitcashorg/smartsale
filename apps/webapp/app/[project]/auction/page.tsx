import { AuctionBids } from '@/components/pages/auction/auction-bids'
import { AuctionOrders } from '@/components/pages/auction/auction-orders'
import { ClaimTokens } from '@/components/pages/auction/claim-tokens'
import { RegisterAddress } from '@/components/pages/auction/register-address'
import { Tabs } from '@/components/ui/tabs'
import { ProjectWithAuction, projects } from '@/lib/projects'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'bitcash auction | bitlauncher',
  description: 'Invest in the intelligent future and join the Ai/Web3 revolution now!',
}

const auctionPageClassNames = {
  tabCard:
    'border border-primary/50 bg-card w-full h-[512px] overflow-y-auto scrollbar rounded-lg p-0 md:p-10'
}

export default function AuctionPage({
  params
}: {
  params: { project: string }
}) {
  const p = projects.find(p => p.slug == params.project)
  if (!p || (!p.auctionId && !p.registrationOpen)) redirect('/')
  const project = p as ProjectWithAuction

  const isAuctionClosed = project.badgeText === 'AUCTION CLOSED'
  const tabs = [
    {
      title: 'Auction',
      value: 'auction',
      content: (
        <div className={auctionPageClassNames.tabCard}>
          <React.Suspense fallback={<div>Loading ...</div>}>
            {isAuctionClosed ? (
              <ClaimTokens />
            ) : project.registrationOpen ? (
              <RegisterAddress projectId={project.id} />
            ) : (
              <AuctionBids project={project} />
            )}
          </React.Suspense>
        </div>
      )
    },
    {
      title: 'Orders',
      value: 'orders',
      content: (
        <div className={auctionPageClassNames.tabCard}>
          <AuctionOrders />
        </div>
      )
    }
    // {
    //   title: 'Debug',
    //   value: 'debug',
    //   content: (
    //     <div className={auctionPageClassNames.tabCard}>
    //       <React.Suspense fallback={<div>Loading ...</div>}>
    //         <AuctionDebug auctionId={project.auctionId} />
    //       </React.Suspense>
    //     </div>
    //   )
    // }
  ]

  return (
    <div className="max-w-[100vw] px-2">
      <section className="b relative mx-auto mb-24 flex size-full max-w-screen-xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
        <Tabs tabs={tabs} />
      </section>

      <hr className="border-gray-600/80 mt-24 mx-auto max-w-screen-xl" />
    </div>
  )
}
