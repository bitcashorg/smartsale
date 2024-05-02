'use client'
import { useEffect } from 'react'
import { useToggle } from 'react-use'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'
import { NavLinks } from './nav-links'
import { Transition } from '@/components/shared/transition'
import { AnimatePresence } from 'framer-motion'

export function MobileNav() {
  const [open, toggleOpen] = useToggle(false)

  // control the body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <div>
      <UseAnimations
        onClick={toggleOpen}
        strokeColor="white"
        animation={menu4}
        wrapperStyle={{marginRight: '-8px'}}
        size={56}
      />
      {/*  <AnimatePresence> */}
      {open ? (
        // <Transition duration={0.2}>
        // </Transition>
        <div className="mobile-nav">
          <NavLinks mobile />
        </div>
      ) : null}

      {/* </AnimatePresence> */}
    </div>
  )
}
