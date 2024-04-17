import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function Participate() {
  return (
    <section className="align-center flex flex-col pb-10">
      <h2 className="h-32 w-full pb-10 pt-6 text-center text-3xl font-bold leading-loose">
        {textContent.stepsInfo}
      </h2>

      <div
        key="steps-info-title"
        className="flex flex-col items-center gap-14 md:flex-row md:items-stretch md:justify-between"
      >
        {textContent.steps.map((step, index) => (
          <div
            key={`${index}__step-content`}
            className="flex min-h-[260px] w-full max-w-[450px] flex-col items-center justify-between rounded-3xl bg-white/90 px-8 py-9 text-black/90 shadow-md backdrop-blur-xl md:w-1/3 md:items-start"
          >
            <h3 className="flex h-10 w-full whitespace-pre-line text-left text-3xl font-bold md:text-left">
              {step.title}
            </h3>
            <div className="flex w-full items-center justify-between gap-4">
              <p className="w-[calc(100%-72px)] py-3 text-sm">
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
                    'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card'
                  )}
                >
                  <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                </Link>
              ) : (
                <span>REGISTER</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const textContent = {
  // title: 'Join The AI and Web3 Revolution With Bitlauncher.',
  stepsInfo: 'Only 3 Steps Needed',
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
      href: '#'
    }
  ]
}
