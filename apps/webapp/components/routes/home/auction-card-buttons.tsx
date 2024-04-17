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
  const buttonLinkClassName = 'relative size-auto rounded-full p-3.5'
  return (
    <div
      className="flex items-center justify-between w-full mb-3 "
      suppressHydrationWarning={true}
    >
      <div className="relative z-10 flex items-center justify-center gap-3 align-center md:gap-4 xl:gap-6">
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
                variant="outline"
                size="icon"
                className={buttonLinkClassName.replace(
                  'p-3.5',
                  index === 0 ? 'p-[17px]' : ''
                )}
                data-title={`${title}´s ${socialTitle}`}
              >
                <Icon className="size-7 fill-accent" />
              </Button>
            }
          >
            <ExternalLinkButton
              variant="outline"
              size="icon"
              link={link}
              className={buttonLinkClassName.replace(
                'p-3.5',
                index === 0 ? 'p-[17px]' : ''
              )}
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
            <IconDownRightArrow className="transition-all size-4 group-focus-within:-rotate-45 group-hover:-rotate-45" />
          </NestedLinkButton>
        )}{' '}
      </Suspense>
    </div>
  )
}
