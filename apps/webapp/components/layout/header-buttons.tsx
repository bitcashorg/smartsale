'use client'

import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BitcashAccessButton } from './bitcash-access'

export function HeaderButtons({ largeHeader }: { largeHeader?: boolean }) {
  const { session } = useSession()
  return (
    <>
      {/* <ThemeToggle/> */}

      <BitcashAccessButton
        buttonStyle={{
          variant: 'secondary',
          radius: 'full',
          size: largeHeader ? 'lg' : 'default',
          fontSize: largeHeader ? 'lg' : 'default'
        }}
        buttonClassName="min-w-[98px] md:min-w-[120px] lg:min-w-[175px]"
      />

      {session ? (
        <span className="[&_button]:w-full [&_button]:!rounded-lg">
          <ConnectButton chainStatus="none" showBalance={false} />
        </span>
      ) : null}
    </>
  )
}
