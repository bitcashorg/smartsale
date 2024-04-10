'use client'

import { BitcashAccessButton } from '@/components/layout/bitcash-access'
import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function WalletIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}

export default function Participate() {
  const stepsInfoRef = React.useRef<HTMLParagraphElement>(null)
  const showStepsInfo = useInView(stepsInfoRef, {
    once: true,
    margin: '-400px'
  })

  return (
    <section
      className="align-center flex flex-col pb-10"
      ref={stepsInfoRef}
    >
      <h2
        className="text-3xl leading-loose font-bold pt-6 pb-10 w-full text-center"
      >
        <AnimatePresence>
          {showStepsInfo && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.24 }}
              key="steps-info"
            >
              {textContent.stepsInfo}
            </motion.span>
          )}
        </AnimatePresence>
      </h2>

      <div
        key="steps-info-title"
        className="flex gap-14 flex-col items-center md:items-stretch md:flex-row md:justify-between"
      >
        <AnimatePresence>
          {textContent.steps.map((step, index) => (
            <motion.div
              key={`${index}__step-content`}
              className="w-full min-h-[260px] max-w-[450px] flex rounded-3xl flex-col items-center justify-between bg-white/90 px-8 py-9 shadow-md backdrop-blur-xl md:w-1/3 md:items-start text-black/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.42 * (index + 1) }}
            >
              <h3 className="w-full flex h-10 text-left text-3xl font-bold md:text-left whitespace-pre-line">
                {step.title}
              </h3>
              <div className="flex w-full justify-between gap-4 items-center">
                <p className="py-3 text-sm w-[calc(100%-72px)]">
                  {step.description}
                </p>
                {!step.title.includes('Complete KYC') ? (
                  <Link
                    href={step.href}
                    className={cn(
                      buttonVariants({
                        variant: 'accent',
                        size: 'icon'
                      }),
                      "relative text-md px-0 py-0 size-14 font-bold rounded-full hover:[&svg]:fill-card group"
                    )}
                    prefetch
                  >
                    <IconDownRightArrow className="transition-all [&_path]:stroke-white size-4 group-hover:-rotate-[45deg] group-focus-within:-rotate-[45deg]" />
                  </Link>
                ) : (
                  <BitcashAccessButton
                    buttonLabel="down-right-icon"
                    buttonStyle={{ size: 'icon', variant: 'accent' }}
                    defaultContent="register"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

const textContent = {
  // title: 'Join The AI and Web3 Revolution With Bitlauncher.',
  stepsInfo:
    'Only 3 Steps Needed',
  steps: [
    {
      title: 'Sign Up And\nComplete KYC',
      description: 'Complete a Bitcash KYC to ensure your participation.',
      href: 'https://app.bitcash.org/?share=JVnL7qzrU'
    },
    {
      title: 'Get USD\nCredits',
      description:
        'Deposit USDT on any chain to get USD Credit Tokens on EOS EVM',
      href: '#'
    },
    {
      title: 'Place\nBids',
      description:
        'Select a project from the Auctions list and place your bids.',
      href: '/masterbots/auction'
    }
  ]
}

interface IconProps {
  className?: string
}

function FileEditIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}

function HeartHandshakeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}
