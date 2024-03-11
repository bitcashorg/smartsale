'use client'

import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BitcashLoginButton } from './bitcash-login'

export function HeaderButtons() {
  const { session } = useSession()
  return (
    <>
      {/* <ThemeToggle/> */}
      <BitcashLoginButton />
      {session ? (
        <span className="[&_button]:!rounded-md">
          <ConnectButton chainStatus="none" showBalance={false} />
        </span>
      ) : null}
    </>
  )
}
