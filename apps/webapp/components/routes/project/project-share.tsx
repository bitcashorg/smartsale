import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { CopyShortlinkIcon } from './copy-shorlink'
import { Project } from '@/lib/projects'

export function ProjectShare({ project }: { project: Project }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-end gap-3 md:gap-6">
        <Link
          href={`https://twitter.com/${project.twitterUsername}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'p-3.5'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTwitterX className="size-6 fill-accent" />
        </Link>
        <Link
          href={`https://discord.gg/${project.discordServer}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'p-3.5'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiscord className="size-7 fill-accent" />
        </Link>
        <Link
          href={`https://t.me/${project.telegramGroup}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'p-3.5'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTelegram className="size-7 fill-accent" />
        </Link>

        <CopyShortlinkIcon />
      </div>
    </div>
  )
}
