'use client'

import { projects } from '@/lib/projects'
import { AnimatePresence, MotionProps, motion, useInView } from 'framer-motion'
import React from 'react'
import { AuctionCard } from './auction-card'

export function Upcoming() {
  const upcomingCardsContainerRef = React.useRef<HTMLDivElement>(null)
  const isUpcomingCardsContainerVisible = useInView(upcomingCardsContainerRef)

  return (
    <div ref={upcomingCardsContainerRef} className="relative z-10 pt-10">
      <AnimatePresence>
        <motion.h2
          className="mb-6 text-3xl font-bold"
          key="upcoming-auctions-title"
          {...upcomingAuctionsAnimationProps}
        >
          Upcoming on Auctions
        </motion.h2>
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
      </AnimatePresence>
    </div>
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
