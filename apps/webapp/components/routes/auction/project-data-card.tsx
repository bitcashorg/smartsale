import Link from 'next/link'
import { AuctionInfo } from '@/components/routes/auction/auction-info'
import { buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import { Project, ProjectWithAuction } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { CopyShortlinkIcon } from './copy-shorlink'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <div className="container relative z-10 flex flex-col items-center justify-between h-full gap-16 px-4 md:px-10 lg:flex-row lg:gap-20">
      <div className="flex size-full max-h-[560px] max-w-screen-sm flex-col justify-between rounded-xl border border-card/30 bg-card/60 px-8 py-6 backdrop-blur-lg md:px-11 md:py-8">
        <h1 className="text-3xl font-bold leading-loose tracking-tighter md:text-5xl">
          {project.title}
          <span className="text-xl leading-tight tracking-wide">
            {project.pitch}
          </span>
        </h1>
        <div className="flex flex-col w-full gap-3">
          <h2 className="text-xl font-semibold">Media & Share</h2>
          <div className="flex items-center gap-3 md:gap-6">
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
        <AuctionInfo project={project as ProjectWithAuction} />
      </div>
    </div>
  )
}
