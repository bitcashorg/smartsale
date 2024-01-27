'use client'

import { useAuctionData } from '@/hooks/use-auction-data'
import React, { useEffect, useState } from 'react'

export function Countdown({ auctionId }: { auctionId: number }) {
  const { data: auctionData } = useAuctionData(auctionId)
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (auctionData && auctionData.auctionEndDate) {
        const now = new Date()
        const endDate = auctionData.auctionEndDate
        const timeDiff = endDate.getTime() - now.getTime()

        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, '0')
          const hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
            .toString()
            .padStart(2, '0')
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          )
            .toString()
            .padStart(2, '0')
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, '0')

          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          clearInterval(interval)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [auctionData])

  return (
    <div className="flex justify-between text-center">
      <div>
        <div className="text-6xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">DAYS</div>
      </div>
      <div>
        <div className="text-6xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm">HOURS</div>
      </div>
      <div>
        <div className="text-6xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">MINUTES</div>
      </div>
      <div>
        <div className="text-6xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">SECONDS</div>
      </div>
    </div>
  )
}
