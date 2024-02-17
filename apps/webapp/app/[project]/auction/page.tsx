import React from 'react'
import { redirect } from 'next/navigation'
import { ProjectWithAuction, projects } from '@/lib/projects'
import { Countdown } from '@/components/auction/countdown'
import { AuctionInfo } from '@/components/auction/auction-info'
import { AuctionBids } from '@/components/auction/auction-bids'
import { AuctionOrders } from '@/components/auction/auction-orders'
import Image from 'next/image'
import { AuctionDebug } from '@/components/auction/auction-debug'


export default function AuctionPage({
  params
}: {
  params: { project: string }
}) {
  const p = projects.find(p => p.slug == params.project)
  if (!p || !p.auctionId) redirect('/')
  const project = p as ProjectWithAuction

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex flex-col gap-5 md:flex-row space-between">
            <div className="md:w-2/3">
              <Image
                alt="bitcash logo"
                className="mx-auto max-h-[230px] my-0 object-cover"
                layout="responsive"
                height="100"
                width="100"
                src={project.heroImage}
              />

              <AuctionInfo project={project} />

              <Countdown auctionId={project.auctionId} />
            </div>
            <div className="w-full md:w-1/3">
              <React.Suspense fallback={<div>Loading ...</div>}>
                <AuctionBids project={project} />
              </React.Suspense>
            </div>
          </div>
          <React.Suspense fallback={<div>Loading ...</div>}>
            <AuctionOrders />
          </React.Suspense>
        </div>
      </div>


        <React.Suspense fallback={<div>Loading ...</div>}>
            <AuctionDebug auctionId={project.auctionId} />
        </React.Suspense>

    </>
  )
}
