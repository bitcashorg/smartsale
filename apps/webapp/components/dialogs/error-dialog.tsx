'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useGlobalStore } from '@/hooks/use-global-store'

export function ErrorModal() {
  const { errorMessage, setGlobalError } = useGlobalStore()
  return (
    <Dialog open={!!errorMessage}>
      {/* @ts-ignore */}
      <DialogContent>
        <DialogHeader>
          {/* @ts-ignore */}
          <DialogTitle>Error</DialogTitle>
        </DialogHeader>
        {/* @ts-ignore */}
        <DialogDescription>{errorMessage}</DialogDescription>
        <DialogFooter>
          <Button onClick={() => setGlobalError('')} variant="ghost">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
