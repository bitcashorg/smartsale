'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function SessionButton() {
  const { session, loginOrConnect } = useSession()

  return !session ? (
    <Button
      variant="secondary"
      radius="full"
      className="md:px-3 lg:px-10"
      onClick={loginOrConnect}
    >
      Login
    </Button>
  ) : (
    <ConnectButton showBalance={false} chainStatus="none" />
  )
}
