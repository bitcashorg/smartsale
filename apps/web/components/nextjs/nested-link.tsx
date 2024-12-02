'use client'

import { cn } from '@smartsale/ui'
import { Button, type ButtonProps } from '@smartsale/ui'
import { useRouter } from 'next/navigation'

interface NestedLinkButtonProps extends ButtonProps {
  link: string
}

export function NestedLinkButton({
  children,
  className,
  link,
  ...props
}: NestedLinkButtonProps) {
  const router = useRouter()
  return (
    <Button
      {...props}
      className={cn(className)}
      onClick={(event) => {
        event.preventDefault()
        router.push(link)
      }}
    >
      {children}
    </Button>
  )
}
