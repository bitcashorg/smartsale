'use client'
import { generateShortLink } from '@/actions'
import { AuctionInfo } from '@/components/routes/auction/auction-info'
import { Countdown } from '@/components/routes/auction/countdown'
import { Button, buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import { Project, ProjectWithAuction } from '@/lib/projects'
import { cn, motionProps, scrollToElement } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

import {
  LucideCheck,
  LucideChevronDown,
  LucideLoader2,
  LucideShare,
  LucideX
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const buttonLinkClassName = cn(
  buttonVariants({
    variant: 'outline',
    size: 'icon'
  }),
  'relative size-auto rounded-full p-3.5'
)

export function ProjectHeader({ project }: { project: Project }) {
  const [copied, setCopied] = useState('')
  const projectRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const isAuctionPage = Boolean(pathname.match(/\/auction$/))

  // TODO: separate this logic on a client component so Project Header can be rendered on server
  useEffect(() => {
    projectRef.current = document.getElementById('project-details')
  }, [projectRef.current])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied('')
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyProjectShareLink = async () => {
    setCopied('loading')
    try {
      const { data, error } = await generateShortLink(project.linkPath)

      if (error || !data) throw new Error(error)

      const shortLink = data.shortLink

      navigator.clipboard.writeText(shortLink)
      setCopied('Share link copied!')
    } catch (error) {
      console.error('Failed to copy share link: ', error)
      setCopied('Failed to copy share link. Try again!')
    }
  }

  const copyShareLinkIconResponse = (copied: string) => {
    switch (copied) {
      case 'loading':
        return (
          <motion.span key="loading-icon" {...motionProps.iconMotionProps}>
            <LucideLoader2 size={26} className="animate-spin stroke-accent" />
          </motion.span>
        )
      case 'Share link copied!':
        return (
          <motion.span key="success-icon" {...motionProps.iconMotionProps}>
            <LucideCheck size={26} className="stroke-success" />
          </motion.span>
        )
      case 'Failed to copy share link. Try again!':
      default:
        return (
          <motion.span key="error-icon" {...motionProps.iconMotionProps}>
            <LucideX size={26} className="stroke-destructive" />
          </motion.span>
        )
    }
  }

  const isAuctionClosed = project.badgeText === 'AUCTION CLOSED'

  return (
    <section className="flex flex-col items-center justify-center size-full gap-11">
      <div className="absolute inset-0 z-[1] block size-full overflow-hidden bg-muted/10 backdrop-blur-[2.5px] lg:hidden" />
      <Image
        alt={project.title}
        className="absolute inset-0 z-0 block object-cover mx-auto overflow-hidden scale-100 pointer-events-none aspect-video size-full lg:hidden"
        height="2000"
        src={project.heroImage}
        width="2000"
      />
      <div
        className={cn(
          'container relative z-10 flex h-full flex-col items-center justify-between gap-16 px-4 md:px-10 lg:flex-row lg:gap-20',
          {
            'lg:flex-col xl:flex-row': isAuctionPage
          }
        )}
      >
        <div className="flex size-full max-h-[560px] max-w-screen-sm flex-col justify-between rounded-xl border border-card/30 bg-card/60 backdrop-blur-lg">
          <Image
            alt="Project Image"
            className="pointer-events-none inset-0 z-0 mx-auto hidden aspect-video h-[260px] w-full overflow-hidden rounded-t-xl object-cover lg:block"
            height="210"
            src={project.heroImage}
            width="1000"
          />

          <div className="flex flex-col justify-between gap-6 px-8 py-6 md:px-11 md:py-8">
            <h1 className="flex flex-col gap-1 text-3xl font-bold leading-loose tracking-tighter md:text-5xl xl:max-w-[93.333%]">
              {project.title}

              <span className="max-w-[86.666%] text-xl leading-tight tracking-wide">
                {project.pitch}
              </span>
            </h1>

            <div className="flex flex-col w-full gap-3">
              <h2 className="text-xl font-semibold">Media & Share</h2>
              <div className="flex items-center gap-3 align-center md:gap-6">
                <Link
                  href={`https://twitter.com/${project.twitterUsername}`}
                  className={buttonLinkClassName.replace('p-3.5', 'p-[17px]')}
                  data-title={`${project.title}´s Twitter X Profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitterX className="size-6 fill-accent" />
                </Link>
                <Link
                  href={`https://discord.gg/${project.discordServer}`}
                  className={buttonLinkClassName}
                  data-title={`${project.title}´s Discord Server`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDiscord className="size-7 fill-accent" />
                </Link>
                <Link
                  href={`https://t.me/${project.telegramGroup}`}
                  className={buttonLinkClassName}
                  data-title={`${project.title}´s Telegram Group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTelegram className="size-7 fill-accent" />
                </Link>
                <Button
                  size="icon"
                  variant="outline"
                  data-title={
                    copied
                      ? copied
                      : `Click to copy the link to share ${project.title} on your media!`
                  }
                  className={cn('relative size-[58px] rounded-full')}
                  onClick={copyProjectShareLink}
                >
                  <AnimatePresence>
                    {copied ? (
                      copyShareLinkIconResponse(copied)
                    ) : (
                      <motion.span
                        key="share-icon"
                        {...motionProps.iconMotionProps}
                      >
                        <LucideShare size={26} className="stroke-accent" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex size-full max-h-[560px] max-w-screen-sm flex-col gap-6 rounded-xl border border-card/30 bg-card/60 px-8 py-6 backdrop-blur-lg md:px-11 md:py-8">
            <h2 className="text-xl font-semibold">Auction Data</h2>
            <ul className="flex flex-col w-full gap-2">
              <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
                <span className="opacity-70">Fundraising Goal</span>
                <b>{project.fundraiseGoal}</b>
              </li>
              <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
                <span className="opacity-70">Max Allocation</span>
                <b>{project.maxAllocation}</b>
              </li>
            </ul>

            {isAuctionPage ? (
              <>
                <AuctionInfo project={project as ProjectWithAuction} />
                {project.auctionId && !isAuctionClosed ? (
                  <Countdown auctionId={project.auctionId} />
                ) : null}
              </>
            ) : (
              <div className="flex flex-col gap-6 mt-auto">
                <p className="w-full font-semibold md:text-xl">
                  {project.registrationOpen
                    ? 'Register to participate in the auction!'
                    : project.auctionClosed
                      ? 'Auction is closed. You can now claim your tokens.'
                      : 'Join the auction and be a part of our project. The countdown has begun!'}
                </p>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: 'secondary',
                      size: 'lg'
                    }),
                    'mx-auto w-full max-w-[450px] text-xl'
                  )}
                  href={`${project.slug}/auction`}
                  scroll={false}
                  prefetch
                >
                  {project.registrationOpen
                    ? 'Register Now!'
                    : project.auctionClosed
                      ? 'Claims your Tokens'
                      : 'Participate Now'}
                </Link>
              </div>
            )}
          </div>

          <Button
            onClick={event => {
              scrollToElement(projectRef.current)
              event.currentTarget.blur()
            }}
            variant="ghost"
            className="absolute -bottom-20 left-[calc(50%-75px)] inline-flex w-[150px] gap-4 font-semibold underline-offset-4 transition-transform focus-within:-translate-y-1 focus-within:underline hover:-translate-y-1 hover:underline"
          >
            Read more
            <LucideChevronDown
              size={24}
              className="animate-bounce stroke-white"
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
