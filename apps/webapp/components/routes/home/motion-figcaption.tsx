'use client'

import { motion } from 'framer-motion'

export function MotionFigcaption({ label }: { label: string }) {
  return (
    <motion.figcaption
      whileHover={{ y: -2, scale: 1.02 }}
      className="absolute right-4 top-4 rounded-full bg-[#272727] px-4 py-1 text-xs font-bold shadow-md transition-shadow hover:shadow-xl"
    >
      {label}
    </motion.figcaption>
  )
}
