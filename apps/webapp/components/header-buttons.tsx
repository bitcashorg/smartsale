'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BitcashLoginButton } from './bitcash-login'
import { useSession } from '@/hooks/use-session'

export function HeaderButtons() {
  const { session } = useSession()
  return (
    <div className="flex items-center justify-end space-x-2">
      $100 &nbsp;
      {/* <ThemeToggle/> */}
      <BitcashLoginButton />
      {session ? <ConnectButton showBalance={false} /> : null}
    </div>
  )
}
