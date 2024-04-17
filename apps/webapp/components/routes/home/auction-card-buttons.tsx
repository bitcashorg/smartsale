import { Project } from '@/lib/projects'
import { ExternalLinkButton } from '@/components/shared/external-link'
import { buttonVariants } from '@/components/ui/button'
import {
  IconDiscord,
  IconDownRightArrow,
  IconTelegram,
  IconTwitterX
} from '@/components/ui/icons'
import { Suspense } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function ProjectCardButton({ project }: { project: Project }) {
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
    <Suspense
      fallback={
        <div className="flex items-center justify-between w-full mb-3">
          Loading...
        </div>
      }
    >
      <div className="flex items-center justify-between w-full mb-3">
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
            <ExternalLinkButton
              key={index}
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
          ))}
        </div>

        {!isAuctionRestricted && (
          <div>
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
          </div>
        )}
      </div>
    </Suspense>
  )
}
