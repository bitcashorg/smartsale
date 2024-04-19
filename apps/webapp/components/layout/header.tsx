import Link from 'next/link'
import * as React from 'react'
import { IconBitlauncher, IconDiscord } from '../ui/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { NavLinks } from './nav-links'
import { SessionButton } from './session/session-button'
import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background md:p-4 lg:p-10">
      <div className="container flex items-center justify-between bg-background">
        <div className="flex h-full items-center pl-[14px] md:pl-0">
          <Link shallow href="/">
            <IconBitlauncher />
          </Link>
          <div className="hidden md:flex md:gap-3 md:pl-4 lg:gap-10 lg:pl-16">
            <NavLinks />
          </div>
        </div>
        <div className="flex">
          <div className="items-center hidden md:flex md:gap-3 lg:gap-8">
            <Link
              href="https://discord.gg/a4gwhT9G"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  radius: 'full'
                }),
                'border-transparent md:border-accent md:px-3 lg:px-10'
              )}
            >
              <IconDiscord className={'block size-7 fill-accent md:hidden'} />
              <span className="hidden md:block">Discord</span>
            </Link>

            <Suspense fallback={<Button>Login</Button>}>
              <SessionButton />
            </Suspense>
          </div>
          {/* <Suspense fallback={<div />}> */}
          <MobileNav />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  )
}
