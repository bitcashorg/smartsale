import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { MotionFigcaption } from './motion-figcaption'
import { ProjectCardButtons } from './auction-card-buttons'

export function AuctionCard(project: Project) {
  const {
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
          height={432} // Doubled from your request to change dimensions
          width={432} // Doubled from your request to change dimensions
          className="h-[216px] w-full rounded-t-xl object-cover group-hover:shadow-xl"
          alt="thumbnail"
        />
        <Suspense fallback={<figcaption>{badgeText}</figcaption>}>
          <MotionFigcaption label={badgeText} />
        </Suspense>
      </figure>

      <div className="px-4 py-6 pb-0 lg:px-9 lg:py-8">
        <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-white">
          {pitch}
        </p>
      </div>
      <div className="mb-2 md:mt-auto flex w-full flex-col items-center justify-between px-4 md:py-6 xl:px-9 xl:py-8">
        <ul className="mb-10 mt-8 flex w-full flex-col gap-2">
          <li className="flex w-full justify-between rounded-full bg-muted px-4 py-2">
            <span className="opacity-70">Fundraising Goal</span>
            <b>{fundraiseGoal}</b>
          </li>
          <li className="flex w-full justify-between rounded-full bg-muted px-4 py-2">
            <span className="opacity-70">Max Allocation</span>
            <b>{maxAllocation}</b>
          </li>
        </ul>
        <ProjectCardButtons project={project} />
      </div>
    </Link>
  )
}
