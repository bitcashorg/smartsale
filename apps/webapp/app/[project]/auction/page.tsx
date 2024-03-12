import { AuctionBids } from '@/components/auction/auction-bids'
import { AuctionInfo } from '@/components/auction/auction-info'
import { AuctionOrders } from '@/components/auction/auction-orders'
import { ClaimTokens } from '@/components/auction/claim-tokens'
import { Countdown } from '@/components/auction/countdown'
import { RegisterAddress } from '@/components/auction/register-address'
import { Tabs } from '@/components/ui/tabs'
import { ProjectWithAuction, projects } from '@/lib/projects'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const auctionPageClassNames = {
  tabCard:
    'border border-gray-200 dark:border-gray-800 w-full h-[512px] overflow-y-auto bg-gray-200 dark:bg-black rounded-md p-0 md:p-10'
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
    <>
      <section className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="space-between flex flex-col gap-5 bg-inherit md:h-[320px] md:flex-row">
            <div className="md:w-2/3">
              <Image
                alt="bitcash logo"
                className="mx-auto my-0 size-full max-h-[320px] rounded-md object-cover"
                layout="responsive"
                height="100"
                width="100"
                src={project.heroImage}
              />
            </div>

            <div className="flex flex-col justify-between gap-4">
              <AuctionInfo project={project} />
              {project.auctionId && !isAuctionClosed ? (
                <Countdown auctionId={project.auctionId} />
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="b relative mx-auto mb-32 mt-10 flex size-full max-w-screen-xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
        <Tabs tabs={tabs} />
      </section>
    </>
  )
}
