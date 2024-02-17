import * as React from 'react'
import Link, { LinkProps } from 'next/link'

import { Button } from '@/components/ui/button'
import { IconSeparator } from './ui/icons'
import { ConnectButton } from '@rainbow-me/rainbowkit'


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
          {/* <HeaderLink href="https://bitcash-faucet.vercel.app/" text="usdcred faucet" />
          <HeaderLink href="https://faucet.testnet.evm.eosnetwork.com/" text="eos faucet" /> */}
        </div>
        <div className="flex items-center justify-end space-x-2">
          $100 USD
          <Button>Connect Bitcash App</Button>
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            {/* <ThemeToggle/> */}
            <ConnectButton />
          </React.Suspense>
        </div>
      </div>
    </header>
  )
}

function HeaderLink({ text, ...props }: HeaderLinkProps) {
  return (
    <Button variant="link" asChild className="-ml-2">
      <Link shallow={true} {...props}>
        {text}
      </Link>
    </Button>
  )
}

interface HeaderLinkProps extends LinkProps {
  text: string
}
