'use client'
import { useEffect } from 'react'
import { useToggle } from 'react-use'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'
import { NavLinks } from './nav-links'
import { Transition } from '@/components/shared/transition'
import { AnimatePresence } from 'framer-motion'
import { LangProp } from '@/types/routing.type'

export function MobileNav({ lang, dict }: MobileNavProps) {
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
        wrapperStyle={{ marginRight: '-10px' }}
        size={56}
      />
      <AnimatePresence>
        {open ? (
          <Transition duration={0.3}>
            <div className="mobile-nav">
              <NavLinks
                mobile
                lang={lang}
                dict={dict}
                toggleOpen={toggleOpen}
              />
            </div>
          </Transition>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function MobileNavLoader() {
  return (
    <UseAnimations
      strokeColor="white"
      animation={menu4}
      wrapperStyle={{ marginRight: '-10px' }}
      size={56}
    />
  )
}

interface MobileNavProps extends LangProp {
  dict: any
}
