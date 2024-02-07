import * as React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { IconSeparator } from './ui/icons'
import { ConnectWalletButton } from './connect-button'
// import { ThemeToggle } from './theme-toggle'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <HeaderLink href="/" text="Bitcash Launchpad" />
          <IconSeparator className="size-6 text-muted-foreground/50" />
          <HeaderLink href="/how-it-works" text="how it works" />
          <HeaderLink href="/security" text="security tips" />
          <HeaderLink href="/funding" text="funding" />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            {/* <ThemeToggle/> */}
            <ConnectWalletButton />
          </React.Suspense>
        </div>
      </div>
    </header>
  )
}

function HeaderLink({ href, text }: { href: string; text: string }) {
  return (
    <Button variant="link" asChild className="-ml-2">
      <Link shallow={true} href={href}>
        {text}
      </Link>
    </Button>
  )
}
