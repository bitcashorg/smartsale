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
          height={432}
          width={432}
          placeholder="blur"
          className="h-[216px] w-full rounded-t-xl object-cover group-hover:shadow-xl"
          alt={title}
          loading="lazy"
          sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
        />
        <Suspense fallback={<figcaption>{badgeText}</figcaption>}>
          <MotionFigcaption label={badgeText} />
        </Suspense>
      </figure>
      <div className="px-4 py-6 lg:px-9 lg:py-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="max-w-sm mt-2 text-sm">{pitch}</p>
      </div>
      <div className="flex flex-col items-center justify-between w-full px-4 pb-6 md:mt-auto lg:pb-8 xl:px-9">
        <ul className="flex flex-col w-full gap-2 mb-6 lg:mb-8">
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
