import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { MotionFigcaption } from './motion-figcaption'
import { ProjectCardButtons } from './auction-card-buttons'
import { isMobile } from 'react-device-detect'
import Balancer from 'react-wrap-balancer'

export function AuctionCard({
  project,
  dict
}: {
  project: Project
  dict: any
}) {
  const {
    id,
    title,
    pitch,
    fundraiseGoal,
    maxAllocation,
    thumbnailImage,
    badgeText,
    linkPath
  } = project

  const isFutureOrComingAuction = badgeText.match(/(FUTURE|COMING SOON)/)

  return (
    <div className="box-border size-full justify-center rounded-xl border border-card/30 bg-card backdrop-blur-lg">
      <Link
        id={`hot-auction-${title.toLowerCase().replace(/\s/g, '-')}`}
        href={isFutureOrComingAuction ? `#` : linkPath}
        className={cn('mx-auto flex size-full flex-col', {
          'cursor-not-allowed': isFutureOrComingAuction
        })}
      >
        <figure className="relative h-[216px] w-full">
          <Image
            src={thumbnailImage}
            height={216}
            width={216}
            placeholder="blur"
            className="h-[216px] w-full rounded-t-xl object-cover group-hover:shadow-xl"
            alt={title}
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
            {...(id !== 1 && isMobile && { loading: 'lazy' })}
            {...((id === 1 || !isMobile) && { priority: true })}
          />
          <Suspense fallback={<figcaption>{badgeText}</figcaption>}>
            <MotionFigcaption label={badgeText} />
          </Suspense>
        </figure>
        <div className="px-4 py-6 lg:px-9 lg:py-8">
          <h3 className="text-xl font-bold">
            <Balancer>{title}</Balancer>
          </h3>
          <p className="mt-2 max-w-sm text-sm">{pitch}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-between px-4 pb-6 md:mt-auto lg:pb-8 xl:px-9">
          <ul className="mb-6 flex w-full flex-col gap-2 lg:mb-8">
            <li className="flex w-full justify-between rounded-full bg-muted px-4 py-2">
              <span className="opacity-70">{dict.auction.fundraisingGoal}</span>
              <b>{fundraiseGoal}</b>
            </li>
            <li className="flex w-full justify-between rounded-full bg-muted px-4 py-2">
              <span className="opacity-70">{dict.auction.maxAllocation}</span>
              <b>{maxAllocation}</b>
            </li>
          </ul>
          <ProjectCardButtons project={project} />
        </div>
      </Link>
    </div>
  )
}
