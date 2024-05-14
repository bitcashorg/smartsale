import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { CopyShortlinkIcon } from './copy-shorlink'
import { Project } from '@/lib/projects'

export function ProjectShare({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-full gap-3 mt-5 mb-5">
      <div className="flex items-center justify-center gap-6 md:justify">
        <Link
          key={'share-twitter'}
          href={`https://twitter.com/${project.twitterUsername}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTwitterX className="size-6 fill-accent-secondary" />
        </Link>
        <Link
          key={'share-discord'}
          href={`https://discord.gg/${project.discordServer}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiscord className="size-7 fill-accent-secondary" />
        </Link>
        <Link
          key={'share-telegram'}
          href={`https://t.me/${project.telegramGroup}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0 pr-1'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTelegram className="size-7 fill-accent-secondary" />
        </Link>

        <CopyShortlinkIcon key={'share-shortlink'} />
      </div>
    </div>
  )
}
