'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconDiscord,
  IconDownRightArrow,
  IconTelegram,
  IconTwitterX
} from '@/components/ui/icons'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function AuctionCard(props: Project) {
  const {
    title,
    pitch,
    fundraiseGoal,
    maxAllocation,
    thumbnailImage,
    badgeText,
    linkPath,
    twitterUsername,
    discordServer,
    telegramGroup,
    thumbnailImageBlurDataURL
  } = props

  const isAuctionRestricted = badgeText.match(
    /(AUCTION CLOSED|FUTURE|COMING SOON)/
  )
  const isFutureOrComingAuction = badgeText.match(/(FUTURE|COMING SOON)/)
  const buttonLinkClassName = 'relative size-auto rounded-full p-3.5'

  return (
    <Link
      id={`hot-auction-${title.toLowerCase().replace(/\s/g, '-')}`}
      href={isFutureOrComingAuction ? `#` : linkPath}
      className={cn('mx-auto size-full max-w-[450px]', {
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
        <motion.figcaption
          whileHover={{ y: -2, scale: 1.02 }}
          className="absolute right-4 top-4 rounded-full bg-[#272727] px-4 py-1 text-xs font-bold shadow-md transition-shadow hover:shadow-xl"
        >
          {badgeText}
        </motion.figcaption>
      </figure>

      <div className="px-4 py-6 lg:px-9 lg:py-8">
        <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </h3>
        <p className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300">
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
        <div className="flex items-center justify-between w-full mb-3">
          <div className="relative z-10 flex items-center justify-center gap-3 align-center md:gap-4 xl:gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                redirectToExternalRoute(
                  `https://twitter.com/${twitterUsername}`
                )
              }
              className={buttonLinkClassName.replace('p-3.5', 'p-[17px]')}
              data-title={`${title}´s Twitter X Profile`}
            >
              <IconTwitterX className="size-6 fill-accent" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                redirectToExternalRoute(`https://discord.gg/${discordServer}`)
              }
              className={buttonLinkClassName}
              data-title={`${title}´s Discord Server`}
            >
              <IconDiscord className="size-7 fill-accent" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                redirectToExternalRoute(`https://t.me/${telegramGroup}`)
              }
              className={buttonLinkClassName}
              data-title={`${title}´s Telegram Group`}
            >
              <IconTelegram className="size-7 fill-accent" />
            </Button>
          </div>

          {!isAuctionRestricted && (
            <Link
              href={linkPath}
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                  size: 'lg'
                }),
                'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card'
              )}
              data-title={`Go to project ${title}`}
              prefetch
              scroll={false}
            >
              <IconDownRightArrow className="transition-all size-4 group-focus-within:-rotate-45 group-hover:-rotate-45" />
            </Link>
          )}
          {/* {isFutureOrComingAuction && (
              <p
                className="absolute bottom-0 left-0 w-full px-4 py-1 text-sm font-normal text-center rounded-t-none hover:text-link focus-within:text-link rounded-xl bg-destructive"
              >
                This auction is currently unavailable. Check out later!
              </p>
            )} */}
        </div>
      </div>
    </Link>
  )
}

const redirectToExternalRoute = (link: string) => {
  window.open(link, '_blank')
}
