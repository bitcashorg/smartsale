'use client'

import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BitcashAccessButton } from './bitcash-access'
import React from 'react'

export function HeaderButtons() {
  const { session } = useSession()
  return (
    <>
      {/* <ThemeToggle/> */}

      <BitcashAccessButton />

      {session ? (
        <span className="[&_button]:!rounded-md">
          <ConnectButton chainStatus="none" showBalance={false} />
        </span>
      ) : null}
    </>
  )
}
