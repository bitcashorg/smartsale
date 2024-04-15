import { AuctionBids } from '@/components/routes/auction/auction-bids'
import { AuctionOrders } from '@/components/routes/auction/auction-orders'
import { ClaimTokens } from '@/components/routes/auction/claim-tokens'
import { RegisterAddress } from '@/components/routes/auction/register-address'
import { Tabs } from '@/components/ui/tabs'
import { ProjectWithAuction, getProjectBySlug, projects } from '@/lib/projects'
import { redirect } from 'next/navigation'
import React from 'react'

const auctionPageClassNames = {
  tabCard:
    'border border-primary/50 bg-card w-full h-[512px] overflow-y-auto scrollbar rounded-lg p-0 md:p-10'
}

export default async function AuctionPage({
  params
}: {
  params: { project: string }
}) {
  const p = await getProjectBySlug(params.project)
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

      <hr className="mx-auto mt-24 max-w-screen-xl border-gray-600/80" />
    </div>
  )
}
