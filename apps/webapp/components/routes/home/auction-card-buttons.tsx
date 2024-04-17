import { Project } from '@/lib/projects'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconDiscord,
  IconDownRightArrow,
  IconTelegram,
  IconTwitterX
} from '@/components/ui/icons'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'
import { NestedLinkButton } from '@/components/nextjs/nested-link'
import { ExternalLinkButton } from '@/components/nextjs/button-link'

export function ProjectCardButtons({ project }: { project: Project }) {
  const {
    twitterUsername,
    discordServer,
    telegramGroup,
    title,
    linkPath,
    badgeText
  } = project
  const isAuctionRestricted = badgeText.match(
    /(AUCTION CLOSED|FUTURE|COMING SOON)/
  )
  const buttonLinkClassName = 'relative px-0 py-0 size-[58px] rounded-full'
  return (
    <div
      className="mb-3 flex w-full items-center justify-between "
      suppressHydrationWarning={true}
    >
      <div className="align-center relative z-10 flex items-center justify-center gap-3 md:gap-4 xl:gap-6">
        {[
          {
            icon: IconTwitterX,
            link: `https://twitter.com/${twitterUsername}`,
            title: 'Twitter X Profile'
          },
          {
            icon: IconDiscord,
            link: `https://discord.gg/${discordServer}`,
            title: 'Discord Server'
          },
          {
            icon: IconTelegram,
            link: `https://t.me/${telegramGroup}`,
            title: 'Telegram Group'
          }
        ].map(({ icon: Icon, link, title: socialTitle }, index) => (
          <Suspense
            key={index}
            fallback={
              <Button
                onClick={(e)=> {e.stopPropagation()}}
                variant="outline"
                size="icon"
                className={buttonLinkClassName}
                data-title={`${title}´s ${socialTitle}`}
              >
                <Icon className="size-7 fill-accent" />
              </Button>
            }
          >
            <ExternalLinkButton
              onClick={(e)=> {e.stopPropagation()}}
              variant="outline"
              size="icon"
              link={link}
              className={buttonLinkClassName}
              data-title={`${title}´s ${socialTitle}`}
            >
              <Icon className="size-7 fill-accent" />
            </ExternalLinkButton>
          </Suspense>
        ))}
      </div>

      <Suspense
        fallback={
          <Button>
            <IconDownRightArrow />
          </Button>
        }
      >
        {!isAuctionRestricted && (
          <NestedLinkButton
            link={linkPath}
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'lg'
              }),
              'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card'
            )}
            data-title={`Go to project ${title}`}
          >
            <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45" />
          </NestedLinkButton>
        )}{' '}
      </Suspense>
    </div>
  )
}
