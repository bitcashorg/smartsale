'use client'

import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BitcashAccessButton } from './bitcash-access'

export function ConnectWalletButtons() {
  const { session } = useSession()
  return (
    <>
      {/* <ThemeToggle/> */}

      <BitcashAccessButton
        buttonStyle={{
          variant: 'secondary',
          radius: 'full'
        }}
        buttonClassName="px-10"
      />

      {session ? (
        <span className="[&_button]:w-full [&_button]:!rounded-lg">
          <ConnectButton chainStatus="none" showBalance={false} />
        </span>
      ) : null}
    </>
  )
}
