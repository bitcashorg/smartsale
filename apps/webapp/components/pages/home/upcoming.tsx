'use client'

import { TypewriterEffect } from '@/components/ui/typewritting-effect'
import { projects } from '@/lib/projects'
import { AnimatePresence, MotionProps, motion, useInView } from 'framer-motion'
import React from 'react'
import { AuctionCard } from './auction-card'

export function Upcoming() {
  const upcomingCardsContainerRef = React.useRef<HTMLDivElement>(null)
  const isUpcomingCardsContainerVisible = useInView(upcomingCardsContainerRef, { once: true })

  return (
    <section ref={upcomingCardsContainerRef} className="relative min-h-[80vh] z-10 pt-10 flex flex-col align-center justify-center">
      <AnimatePresence>
        <h1 className="my-20 lg:max-w-[90%] xl:max-w-[66%] mx-auto">
          <TypewriterEffect
            words={textContent.title.split(' ').map(word => ({
              text: word,
              className:
                word === 'AI/WEB3'
                  ? '!text-[#E94FB8]'
                  : undefined
            }))}
            className="text-4xl !font-semibold sm:!text-5xl lg:!text-6xl"
            cursorClassName="h-6 md:h-10"
          />
        </h1>
        <div
          className="grid scroll-m-3 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          key="upcoming-auctions-description-container"
        >
          {isUpcomingCardsContainerVisible &&
            projects.map((item, index) => (
              <motion.div
                key={`upcoming-auctions-item-${index}`}
                {...auctionCardAnimationProps(index)}
              >
                <AuctionCard {...item} />
              </motion.div>
            ))}
        </div>
        <motion.h2
          className="mb-6 text-3xl font-bold"
          key="upcoming-auctions-title"
          {...upcomingAuctionsAnimationProps}
        >
          Hot Auctions
        </motion.h2>
      </AnimatePresence>
    </section>
  )
}

// Slid down animation with a fade in effect and small bouncing effect
const auctionCardAnimationProps: (index: number) => MotionProps = (
  index: number
) => ({
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: {
    type: 'spring',
    bounce: 0.4,
    duration: 0.75,
    delay: (index + 1) * 0.62
  }
})

// Fast fade in effect
const upcomingAuctionsAnimationProps: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.14 }
}

const textContent = {
  title: 'JOIN THE AI/WEB3 REVOLUTION NOW.',
}
