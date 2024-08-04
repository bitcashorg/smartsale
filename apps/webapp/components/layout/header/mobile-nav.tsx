'use client'

import { Transition } from '@/components/shared/transition'
import { useMobileNav } from '@/hooks/use-mobile-navigation'
import { LangProp } from '@/types/routing.type'
import { AnimatePresence } from 'framer-motion'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'
import { NavLinks } from './nav-links'

export function MobileNav({ lang, dict }: MobileNavProps) {
  const { open, toggleOpen } = useMobileNav()

  return (
    <div>
      <UseAnimations
        key="mobile-nav-animation"
        onClick={toggleOpen}
        strokeColor="white"
        animation={menu4}
        wrapperStyle={{ marginRight: '-10px' }}
        size={56}
        speed={2.42}
        reverse={open}
      />
      <AnimatePresence>
        {open && (
          <Transition duration={0.3}>
            <div className="mobile-nav">
              <NavLinks mobile lang={lang} dict={dict} />
            </div>
          </Transition>
        )}
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
