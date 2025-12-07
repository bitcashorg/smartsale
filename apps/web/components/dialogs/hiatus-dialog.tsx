'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@repo/utils'

export function HiatusDialog() {
  return (
    <Dialog open={true}>
      <DialogContent
        className={cn(
          'sm:max-w-[425px]',
          '[&>button]:hidden', // Hide the close button
        )}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Bitlauncher Hiatus</DialogTitle>
          <DialogDescription>
            We are currently pausing the development to improve our products for
            our users and the future of crowdfunding decentralized startups.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
