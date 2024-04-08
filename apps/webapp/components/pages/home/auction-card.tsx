import { buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconDownRightArrow, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function AuctionCard(props: Project) {
  const {
    title,
    pitch,
    fundraiseGoal,
    maxAllocation,
    heroImage,
    badgeText,
    linkPath,
    twitterUsername,
    discordServer,
    telegramGroup
  } = props

  const isAuctionRestricted = badgeText.match(/(AUCTION CLOSED|IN PREPARATION)/)
  const isAuctionPreparation = badgeText.match(/IN PREPARATION/)
  const buttonLinkClassName = cn(
    buttonVariants({
      variant: 'outline',
      size: 'icon'
    }),
    "relative rounded-full p-3.5 size-auto"
  )

  return (
    <Link
      id={`hot-auction-${title.toLowerCase().replace(/\s/g, '-')}`}
      href={isAuctionPreparation ? `#` : linkPath}
      className={cn('size-full max-w-[450px] mx-auto', { 'cursor-not-allowed': isAuctionPreparation })}
      shallow
      prefetch
    >
      <motion.div
        className="group/card size-full flex flex-col h-full justify-between rounded-xl border border-transparent backdrop-blur-xl bg-card/60 shadow-accent/[0.02] hover:shadow-accent/[0.04] hover:shadow-xl translate-z-0"
        whileHover={{ y: -16 }}
        whileTap={{ y: -16 }}
        tabIndex={-1}
      >
        <figure
          className="relative w-full"
        >
          <Image
            src={heroImage}
            height="1000"
            width="1000"
            className="h-[216px] w-full rounded-t-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <motion.figcaption
            whileHover={{ y: -2, scale: 1.02 }}
            className="absolute transition-shadow top-4 right-4 px-4 py-1 text-xs font-bold bg-[#272727] rounded-full shadow-md hover:shadow-xl"
          >
            {badgeText}
          </motion.figcaption>
        </figure>
        <div className="px-4 py-6 lg:px-9 lg:py-8">
          <h3
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </h3>
          <p
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            {pitch}
          </p>
        </div>
        <div className="w-full flex flex-col px-4 py-6 lg:px-9 lg:py-8 items-center justify-between mb-2">
          <ul
            className="mt-8 mb-10 flex w-full flex-col gap-2"
          >
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Fundraising Goal</span>
              <b>{fundraiseGoal}</b>
            </li>
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Max allocation</span>
              <b>{maxAllocation}</b>
            </li>
          </ul>
          <div className="flex w-full justify-between items-center mb-3">
            <div className="flex align-center justify-center items-center gap-6">
              <Link
                href={`https://twitter.com/${twitterUsername}`}
                className={buttonLinkClassName.replace('p-3.5', 'p-[17px]')}
                data-title={`${title}´s Twitter X Profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitterX className="size-6 fill-accent" />
              </Link>
              <Link
                href={`https://discord.gg/${discordServer}`}
                className={buttonLinkClassName}
                data-title={`${title}´s Discord Server`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDiscord className="size-7 fill-accent" />
              </Link>
              <Link
                href={`https://t.me/${telegramGroup}`}
                className={buttonLinkClassName}
                data-title={`${title}´s Telegram Group`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTelegram className="size-7 fill-accent" />
              </Link>
            </div>
            {!isAuctionRestricted && (
              <Link
                href={`${linkPath}/auction`}
                className={cn(
                  buttonVariants({
                    variant: 'secondary',
                    size: 'lg'
                  }),
                  'relative text-md px-0 py-0 size-14 font-bold rounded-full hover:[&svg]:fill-card group'
                )}
                data-title={`Go to ${title}´s auction`}
                shallow
                prefetch
              >
                <IconDownRightArrow className="transition-all size-4 group-hover:-rotate-[45deg] group-focus-within:-rotate-[45deg]" />
              </Link>
            )}
            {isAuctionPreparation && (
              <p
                className="absolute bottom-0 left-0 text-center hover:text-link focus-within:text-link w-full rounded-xl px-4 py-1 text-sm font-normal bg-destructive rounded-t-none"
              >
                This auction is not currently available. Check out later!
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link >
  )
}
