'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'

export function RegisterButton() {
  const { loginOrConnect } = useSession()
  return (
    <Button
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'mx-auto mt-5 border border-solid border-accent bg-background px-10 py-5'
      )}
      onClick={loginOrConnect}
    >
      Register for Presale
    </Button>
  )
}
