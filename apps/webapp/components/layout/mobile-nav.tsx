'use client'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useToggle } from 'react-use'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'

export function MobileNav() {
  const [open, toggleOpen] = useToggle(false)

  // useEffect to control the body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      <UseAnimations
        reverse={open}
        onClick={toggleOpen}
        strokeColor="white"
        animation={menu4}
        size={56}
      />
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 flex items-center justify-center h-full p-5 pt-0 overflow-hidden border-b max-h-mobile-nav shadow-4xl top-20 bg-background"
          >
            Menu
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
