'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SessionButton() {
  const { session, loginOrConnect } = useSession()

  return (
    <Button
      variant="secondary"
      radius="full"
      className={cn('md:px-3 lg:px-10')}
      onClick={loginOrConnect}
      suppressHydrationWarning={true}
    >
      {!session?.account ? (
        'Login'
      ) : (
        <>
          <User /> &nbsp; {session?.account}
        </>
      )}
    </Button>
  )
}
