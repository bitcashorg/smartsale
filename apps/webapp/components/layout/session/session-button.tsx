'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'

export function SessionButton() {
  const { session, loginOrConnect } = useSession()
  return (
    <Button
      variant="secondary"
      radius="full"
      className="md:px-3 lg:px-10"
      onClick={loginOrConnect}
    >
      {session ? 'Connect' : 'Login'}
    </Button>
  )
}
