import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'
import { IconBitlauncher } from '../ui/icons'
import { MobileNav } from './mobile-nav'
import { NavLinks } from './nav-links'
import { SessionButton } from './session/session-button'

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background">
      <div className="container flex items-center justify-between px-4 bg-background">
        <div className="flex items-center h-full grow">
          <Link shallow href="/">
            <IconBitlauncher />
          </Link>
          <div className="justify-center hidden grow md:flex md:gap-3 md:pl-4 lg:gap-10 lg:pl-16">
            <NavLinks />
          </div>
        </div>

        {/* Desktop action buttons */}
        <div className="items-center hidden md:flex md:gap-3 lg:gap-5">
          <Suspense fallback={<Button>Login</Button>}>
            <SessionButton />
          </Suspense>
        </div>

        {/* mobile navbar icon */}
        <div className="flex md:hidden">
          <Suspense fallback={<div />}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </div>
  )
}


