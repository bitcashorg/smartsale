'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export function SessionButton() {
  const { session, loginOrConnect } = useSession()
  const account = useAccount()

  return (
    <div>
      {account?.address ? (
        <ConnectButton showBalance={false} chainStatus="none" />
      ) : (
        <Button
          variant="secondary"
          radius="full"
          className="md:px-3 lg:px-10"
          onClick={loginOrConnect}
          suppressHydrationWarning={true}
        >
          {!session ? 'Login' : 'Connect'}
        </Button>
      )}
    </div>
  )
}
