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

      <div className="px-4 py-6 lg:px-9 lg:py-8">
        <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </h3>
        <p className="max-w-sm mt-2 text-sm text-neutral-600 dark:text-white">
          {pitch}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between w-full px-4 py-6 mt-auto mb-2 xl:px-9 xl:py-8">
        <ul className="flex flex-col w-full gap-2 mt-8 mb-10">
          <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
            <span className="opacity-70">Fundraising Goal</span>
            <b>{fundraiseGoal}</b>
          </li>
          <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
            <span className="opacity-70">Max Allocation</span>
            <b>{maxAllocation}</b>
          </li>
        </ul>
        <ProjectCardButtons project={project} />
      </div>
    </Link>
  )
}
