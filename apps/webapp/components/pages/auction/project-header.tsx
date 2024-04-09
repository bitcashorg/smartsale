'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { IconDiscord, IconTelegram, IconTwitterX } from "@/components/ui/icons"
import { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { LucideCheck, LucideShare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const buttonLinkClassName = cn(
  buttonVariants({
    variant: 'outline',
    size: 'icon'
  }),
  "relative rounded-full p-3.5 size-auto"
)

export function ProjectHeader({ projectData }: { projectData: Project }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyProjectShareLink = () => {
    const shareLink = `${window.location.origin}/${projectData.slug}`

    navigator.clipboard.writeText(shareLink)
    setCopied(true)
  }

  return (
    <section className="w-full h-full flex flex-col gap-11 items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-[1] bg-black/20 backdrop-blur-[2.5px] rounded-3xl" />
      <Image
        alt="Project Image"
        className="absolute inset-0 z-0 mx-auto aspect-video overflow-hidden object-cover h-full w-full pointer-events-none"
        height="2000"
        src={projectData.heroImage}
        width="2000"
      />
      <div className="container h-full relative z-10 flex items-center justify-center gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-screen-sm flex flex-col gap-6 px-8 py-6 md:px-11 md:py-8 rounded-xl bg-card/60 backdrop-blur-lg"
        >
          <h1 className="flex flex-col gap-1 text-3xl font-bold tracking-tighter leading-loose md:text-5xl max-w-[83.333%]">
            {projectData.title}

            <span className="text-xl tracking-wide leading-tight">
              {projectData.pitch}
            </span>
          </h1>

          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-xl font-semibold">Media & Share</h2>
            <div className="flex align-center items-center gap-6">
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
                data-title={copied ? 'Share link copied!' : `Click to copy the link to share ${projectData.title} on your media!`}
                className="relative rounded-full size-[58px]"
                onClick={copyProjectShareLink}
              >
                <AnimatePresence>
                  {copied
                    ? (
                      <motion.span
                        key="check-icon"
                        {...iconMotionProps}
                      >
                        <LucideCheck size={26} className="stroke-accent" />
                      </motion.span>
                    )
                    : (
                      <motion.span
                        key="share-icon"
                        {...iconMotionProps}
                      >
                        <LucideShare size={26} className="stroke-accent" />
                      </motion.span>
                    )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-screen-sm flex flex-col gap-6 px-8 py-6 md:px-11 md:py-8 rounded-xl bg-card/60 backdrop-blur-lg"
        >
          <h2 className="text-xl font-semibold">Auction Data</h2>
          <ul
            className="mt-8 mb-10 flex w-full flex-col gap-2"
          >
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Fundraising Goal</span>
              <b>{projectData.fundraiseGoal}</b>
            </li>
            <li className="flex w-full justify-between py-2 px-4 bg-muted rounded-full">
              <span className="opacity-70">Max allocation</span>
              <b>{projectData.maxAllocation}</b>
            </li>
          </ul>

          <p className="w-full font-semibold md:text-xl">
            {projectData.registrationOpen
              ? 'Register to participate in the auction!'
              : projectData.auctionClosed
                ? 'Auction is closed. You can now claim your tokens.'
                : 'Join the auction and be a part of our project. The countdown has begun!'}
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href={`${projectData.slug}/auction`}
          >
            {projectData.registrationOpen
              ? 'Register Now!'
              : projectData.auctionClosed
                ? 'Claims your Tokens'
                : 'Participate Now'}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const iconMotionProps: MotionProps & React.ComponentProps<'span'> = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
  className: 'absolute inset-0 flex items-center justify-center self-center'
}
