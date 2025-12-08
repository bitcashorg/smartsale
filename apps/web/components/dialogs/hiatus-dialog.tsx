'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@repo/utils'
import { PauseCircle } from 'lucide-react'

export function HiatusDialog() {
  return (
    <Dialog open={true}>
      <DialogContent
        className={cn(
          'sm:max-w-[512px]',
          'rounded-2xl border border-border/60 bg-background/95 backdrop-blur',
          'px-6 py-8 shadow-2xl shadow-black/10',
          'space-y-6 text-center',
          '[&>button]:hidden',
        )}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
          <PauseCircle className="h-8 w-8" aria-hidden="true" />
        </div>
        <DialogHeader className="space-y-4 text-balance">
          <DialogTitle className="text-4xl tracking-tight">
            Bitlauncher is on hiatus
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            We&apos;re taking a pause to refine the experience and build tools
            that better serve decentralized founders and supporters. Thanks for
            staying with us.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-between rounded-xl border border-border/50 px-4 py-3">
            <span className="font-medium text-foreground">Status</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span>Maintenance mode</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
