// MobileNav.js
'use client'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'
import { NavLinks } from './nav-links'
import { Transition } from '@/components/shared/transition'
import { AnimatePresence } from 'framer-motion'
import { LangProp } from '@/types/routing.type'
import { useMobileNav } from '@/hooks/use-mobile-navigation'

export function MobileNav({ lang, dict }: MobileNavProps) {
  const { open, toggleOpen } = useMobileNav()

  console.log(`MobileNav rendered with open state: ${open}`)

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