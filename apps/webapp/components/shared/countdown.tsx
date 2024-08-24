'use client'

import { useEffect, useState } from 'react'

export function Countdown() {
  const targetDate = new Date('July 30, 2024')
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const timeDiff = targetDate.getTime() - now.getTime()

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0')
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
          .toString()
          .padStart(2, '0')
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, '0')
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, '0')

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-5 max-h-[200px] px-8">
      <div className="flex justify-center">
        <h2 className="heading3">
          {/* <TimerIcon className="inline" /> */}
          Pre-Sale Countdown
        </h2>

        <div />
      </div>
      <div className="flex justify-between">
        <CountdownItem value={timeLeft.days} label="DAYS" />
        <CountdownItem value={timeLeft.hours} label="HOURS" />
        <CountdownItem value={timeLeft.minutes} label="MINUTES" />
        <CountdownItem value={timeLeft.seconds} label="SECONDS" />
      </div>
    </div>
  )
}

function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center md:size-32">
      <div className="text-4xl font-bold md:text-6xl">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  )
}

interface CountdownItemProps {
  value: string
  label: string
}
