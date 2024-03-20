'use client'

import { BitcashAccessButton } from '@/components/bitcash-access'
import { Button } from '@/components/ui/button'
import { TypewriterEffect } from '@/components/ui/typewritting-effect'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [showStepsInfo, setShowStepsInfo] = React.useState(false)

  return (
    <section className="pb-10 pt-20">
      <div className="mb-6 flex min-h-[25vh] flex-col items-center justify-start text-center">
        <h2 className="mb-4 lg:max-w-[90%] xl:max-w-[66%]">
          <TypewriterEffect
            words={textContent.title.split(' ').map(word => ({
              text: word,
              className:
                word === 'bitLauncher.'
                  ? '!text-[#1ED761] last:!text-inherit'
                  : undefined
            }))}
            className="text-4xl !font-black leading-snug sm:!text-5xl lg:!text-6xl"
            cursorClassName="h-6 md:h-10"
            onAnimationEnd={() => {
              setShowStepsInfo(true)
            }}
          />
        </h2>
        <AnimatePresence>
          {showStepsInfo && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.24 }}
              key="steps-info"
              className="text-lg font-semibold md:text-xl"
            >
              {textContent.stepsInfo}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="container flex min-h-[320px] flex-col md:flex-row md:items-center md:justify-between">
        {textContent.steps.map((step, index) => (
          <div
            key={index}
            className="mb-8 mt-4 flex flex-col items-center md:ml-4 md:mt-0 md:w-1/3 md:items-start"
          >
            <h2 className="align-items flex h-10 text-center text-2xl font-semibold md:text-left">
              <step.icon className="mr-2 size-6 text-gray-400" />
              {step.title}
            </h2>
            <p className="h-20 py-3 text-center text-gray-500 dark:text-gray-300 md:text-left">
              {step.description}
            </p>
            {step.buttonText && step.title !== 'Complete KYC' ? (
              <Link href={step.href} shallow>
                <Button
                  variant="tertiary"
                  size="lg"
                >
                  {step.buttonText}
                </Button>
              </Link>
            ) : (
              <BitcashAccessButton buttonLabel={step.buttonText} buttonStyle={{ size: 'lg', variant: 'tertiary' }} defaultContent="register" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const textContent = {
  title: 'Join The AI and Web3 Revolution With bitLauncher.',
  stepsInfo:
    'Only 3 steps are needed for you to start enjoying all the advantages',
  steps: [
    {
      icon: FileEditIcon,
      title: 'Complete KYC',
      description: 'Complete a Bitcash KYC to ensure your participation.',
      buttonText: 'Register',
      href: 'https://app.bitcash.org/?share=JVnL7qzrU'
    },
    {
      icon: WalletIcon,
      title: 'Get USD Credits',
      description:
        'Deposit USDT on any chain to get USD Credit Tokens on EOS EVM',
      buttonText: 'Get Credits',
      href: '/wallet'
    },
    {
      icon: HeartHandshakeIcon,
      title: 'Place Bids',
      description:
        'Select a project from the Auctions list and place your bids.',
      buttonText: 'MBOTS Auction',
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
