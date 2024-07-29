// MobileNavContext.tsx
'use client'

import { createContextHook } from '@blockmatic/hooks-utils'
import React, { ReactNode, useState, useEffect } from 'react'

function useMobileNavFn() {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    console.log('Toggling open state')
    setOpen(prev => {
      const newState = !prev
      console.log('New open state:', newState)
      return newState
    })
  }

  const close = () => {
    console.log('Closing menu')
    setOpen(false)
  }

  // Control the body scroll
  useEffect(() => {
    console.log(`Setting body overflow to ${open ? 'hidden' : 'auto'}`)
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return {
    open,
    toggleOpen,
    close,
  }
}

function MobileNavProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <MobileNavProviderInner>{children}</MobileNavProviderInner>
    </React.Suspense>
  )
}

const [useMobileNav, MobileNavProviderInner] = createContextHook(
  useMobileNavFn,
  'You must wrap your application with <MobileNavProvider /> in order to useMobileNav().'
)

export { MobileNavProvider, useMobileNav }