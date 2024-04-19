'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function SessionButton() {
  const { session, loginOrConnect } = useSession()

  return (
    <div>
      {session ? (
        <ConnectButton showBalance={false} chainStatus="none" />
      ) : (
        <Button
          variant="secondary"
          radius="full"
          className="md:px-3 lg:px-10"
          onClick={loginOrConnect}
        >
          Login
        </Button>
      )}
    </div>
  )
}
