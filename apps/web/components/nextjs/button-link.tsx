'use client'

import { cn } from '@smartsale/ui'
import { Button, type ButtonProps } from '@smartsale/ui'

interface ExternalLinkButtonProps extends ButtonProps {
  link: string
}

export function ExternalLinkButton({
  children,
  className,
  link,
  ...props
}: ExternalLinkButtonProps) {
  return (
    <Button
      {...props}
      className={cn(className)}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        window.open(link, '_blank', 'noopener,noreferrer')
      }}
    >
      {children}
    </Button>
  )
}
