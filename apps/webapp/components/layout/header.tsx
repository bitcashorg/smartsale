'use client'
import Link from 'next/link'
import * as React from 'react'
import { IconBitlauncher, IconDiscord } from '../ui/icons'
import { HeaderButtons } from './header-buttons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background md:p-10">
      <div className="container flex items-center justify-between">
        <div className="flex items-center h-full">
          <Link shallow href="/">
            <IconBitlauncher />
          </Link>
          <div className="hidden gap-5 pl-10 md:flex">
            {links.map(link => {
              return (
                <Link
                  shallow
                  key={link.href}
                  className="header-link"
                  href={link.href}
                >
                  {link.text}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex">
          <div className="items-center hidden gap-5 md:flex">
            <Link
              href="https://discord.gg/a4gwhT9G"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  radius: 'full'
                }),
                'border-transparent px-10 md:border-accent'
              )}
            >
              <IconDiscord className={'block size-7 fill-accent md:hidden'} />
              <span className="hidden md:block">Discord</span>
            </Link>

            <Suspense fallback={<div className="flex">Login</div>}>
              <HeaderButtons />
            </Suspense>
          </div>

          <div className="flex md:hidden">
            <UseAnimations strokeColor="white" animation={menu4} size={56} />
          </div>
        </div>
      </div>
    </div>
  )
}

const links = [
  { href: '/about', text: 'About' },
  { href: '/security', text: 'Security' },
  { href: '/terms', text: 'Privacy' }
] as const
