'use client'

import { generateShortLink } from "@/actions"
import { AuctionInfo } from "@/components/pages/auction/auction-info"
import { Countdown } from "@/components/pages/auction/countdown"
import { Button, buttonVariants } from "@/components/ui/button"
import { IconDiscord, IconTelegram, IconTwitterX } from "@/components/ui/icons"
import { LazyImage } from "@/components/ui/lazy-image"
import { Project, ProjectWithAuction } from "@/lib/projects"
import { cn, motionProps, scrollToElement } from "@/lib/utils"
import { AnimatePresence, motion } from 'framer-motion'
import { LucideCheck, LucideChevronDown, LucideLoader2, LucideShare, LucideX } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const buttonLinkClassName = cn(
  buttonVariants({
    variant: 'outline',
    size: 'icon'
  }),
  "relative rounded-full p-3.5 size-auto"
)

export function ProjectHeader({ projectData }: { projectData: Project }) {
  const [copied, setCopied] = React.useState('')
  const pathname = usePathname()
  const isAuctionPage = Boolean(pathname.match(/\/auction$/))

  console.log('isAuctionPage', isAuctionPage)

  React.useEffect(() => {
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
      const { data, error } = await generateShortLink(projectData.linkPath)

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
          <motion.span
            key="loading-icon"
            {...motionProps.iconMotionProps}
          >
            <LucideLoader2 size={26} className="stroke-accent animate-spin" />
          </motion.span>
        )
      case 'Share link copied!':
        return (
          <motion.span
            key="success-icon"
            {...motionProps.iconMotionProps}
          >
            <LucideCheck size={26} className="stroke-success" />
          </motion.span>
        )
      case 'Failed to copy share link. Try again!':
      default:
        return (
          <motion.span
            key="error-icon"
            {...motionProps.iconMotionProps}
          >
            <LucideX size={26} className="stroke-destructive" />
          </motion.span>
        )
    }
  }

  const isAuctionClosed = projectData.badgeText === 'AUCTION CLOSED'

  return (
    <section className="w-full h-full flex flex-col gap-11 items-center justify-center">
      <div className="block absolute lg:hidden inset-0 z-[1] h-full w-full bg-muted/10 backdrop-blur-[2.5px] overflow-hidden" />
      <LazyImage
        alt="Project Image"
        className="scale-100 block absolute lg:hidden inset-0 z-0 mx-auto aspect-video overflow-hidden object-cover h-full w-full pointer-events-none"
        height="2000"
        src={projectData.heroImage}
        width="2000"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      />
      <div
        className={cn(
          'container px-4 md:px-10 h-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20',
          {
            'lg:flex-col xl:flex-row': isAuctionPage
          }
        )}
      >

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-card/30 flex flex-col justify-between h-full max-h-[560px] w-full max-w-screen-sm rounded-xl bg-card/60 backdrop-blur-lg"
        >
          <LazyImage
            alt="Project Image"
            className="hidden lg:block inset-0 z-0 mx-auto aspect-video overflow-hidden object-cover h-[260px] w-full pointer-events-none rounded-t-xl"
            height="210"
            src={projectData.heroImage}
            width="1000"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          />

          <div className="flex flex-col justify-between gap-6 px-8 py-6 md:px-11 md:py-8">
            <h1 className="flex flex-col gap-1 text-3xl font-bold tracking-tighter leading-loose md:text-5xl xl:max-w-[93.333%]">
              {projectData.title}

              <span className="text-xl tracking-wide leading-tight max-w-[86.666%]">
                {projectData.pitch}
              </span>
            </h1>

            <div className="flex flex-col gap-3 w-full">
              <h2 className="text-xl font-semibold">Media & Share</h2>
              <div className="flex align-center items-center gap-3 md:gap-6">
                <Link
                  href={`https://twitter.com/${projectData.twitterUsername}`}
                  className={buttonLinkClassName.replace('p-3.5', 'p-[17px]')}
                  data-title={`${projectData.title}´s Twitter X Profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitterX className="size-6 fill-accent" />
                </Link>
                <Link
                  href={`https://discord.gg/${projectData.discordServer}`}
                  className={buttonLinkClassName}
                  data-title={`${projectData.title}´s Discord Server`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDiscord className="size-7 fill-accent" />
                </Link>
                <Link
                  href={`https://t.me/${projectData.telegramGroup}`}
                  className={buttonLinkClassName}
                  data-title={`${projectData.title}´s Telegram Group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTelegram className="size-7 fill-accent" />
                </Link>
                <Button
                  size="icon"
                  variant="outline"
                  data-title={copied ? copied : `Click to copy the link to share ${projectData.title} on your media!`}
                  className={cn(
                    'relative rounded-full size-[58px]',
                  )}
                  onClick={copyProjectShareLink}
                >
                  <AnimatePresence>
                    {copied
                      ? copyShareLinkIconResponse(copied)
                      : (
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
        </motion.div>

        <motion.div
          className="border border-card/30 h-full max-h-[560px] w-full max-w-screen-sm flex flex-col gap-6 px-8 py-6 md:px-11 md:py-8 rounded-xl bg-card/60 backdrop-blur-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold">Auction Data</h2>
          <ul
            className="flex w-full flex-col gap-2"
          >
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Fundraising Goal</span>
              <b>{projectData.fundraiseGoal}</b>
            </li>
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Max Allocation</span>
              <b>{projectData.maxAllocation}</b>
            </li>
          </ul>

          {isAuctionPage ? (
            <>
              <AuctionInfo project={projectData as ProjectWithAuction} />
              {projectData.auctionId && !isAuctionClosed ? (
                <Countdown auctionId={projectData.auctionId} />
              ) : null}
            </>
          ) : (
            <div className="flex flex-col gap-6 mt-auto">
              <p className="w-full font-semibold md:text-xl">
                {projectData.registrationOpen
                  ? 'Register to participate in the auction!'
                  : projectData.auctionClosed
                    ? 'Auction is closed. You can now claim your tokens.'
                    : 'Join the auction and be a part of our project. The countdown has begun!'}
              </p>
              <Link
                className={cn(buttonVariants({
                  variant: 'secondary',
                  size: 'lg',
                }), 'w-full max-w-[450px] mx-auto text-xl')}
                href={`${projectData.slug}/auction`}
                scroll={false}
                prefetch
              >
                {projectData.registrationOpen
                  ? 'Register Now!'
                  : projectData.auctionClosed
                    ? 'Claims your Tokens'
                    : 'Participate Now'}
              </Link>
            </div>
          )}
        </motion.div>

        <Button
          onClick={event => {
            scrollToElement(document.getElementById('project-details'))
            event.currentTarget.blur()
          }}
          variant="ghost"
          className="transition-transform underline-offset-4 absolute left-[calc(50%-75px)] w-[150px] -bottom-20 inline-flex gap-4 font-semibold hover:-translate-y-1 focus-within:-translate-y-1 hover:underline focus-within:underline"
        >
          Read more
          <LucideChevronDown size={24} className="stroke-white animate-bounce" />
        </Button>
      </div>
    </section>
  )
}
