'use client'

import { projects } from '@/lib/projects'
import { AnimatePresence, MotionProps, motion, useInView } from 'framer-motion'
import React from 'react'
import { AuctionCard } from './auction-card'

export function Upcoming() {
  const upcomingCardsContainerRef = React.useRef<HTMLDivElement>(null)
  const isUpcomingCardsContainerVisible = useInView(upcomingCardsContainerRef, {
    once: true
  })

  return (
    <section
      ref={upcomingCardsContainerRef}
      className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10"
    >
      <AnimatePresence>
        <h1 className="flex flex-col mx-auto my-24 text-center whitespace-pre-line">
          <motion.sub
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            key="upcoming-auctions-eyebrow"
            className="text-xl leading-none font-semibold w-full"
          >
            {textContent.eyebrow}
          </motion.sub>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="text-7xl lg:text-8xl font-bold w-full"
            key="upcoming-auctions-title"
          >
            {textContent.title.split('AI/WEB3')[0]}
            {' '}
            <span className="!text-[#E94FB8]">AI/WEB3</span>
            {'\n'}
            {textContent.title.split('AI/WEB3')[1]}
          </motion.span>
        </h1>
        <motion.h2
          className="text-3xl leading-loose font-bold pt-6 pb-10 w-full text-center"
          key="upcoming-auctions-title"
          {...upcomingAuctionsAnimationProps}
        >
          Upcoming Auctions
        </motion.h2>
        <div
          className="grid scroll-m-3 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr self-center md:self-stretch"
          key="upcoming-auctions-description-container"
        >
          {isUpcomingCardsContainerVisible &&
            projects.map((item, index) => (
              <motion.div
                key={`upcoming-auctions-item-${index}`}
                className="size-full justify-center box-border"
                {...auctionCardAnimationProps(index)}
              >
                <AuctionCard {...item} />
              </motion.div>
            ))}
        </div>
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
  title: 'JOIN THE AI/WEB3 REVOLUTION NOW',
  eyebrow: "Invest In The Intelligent Future"
}
