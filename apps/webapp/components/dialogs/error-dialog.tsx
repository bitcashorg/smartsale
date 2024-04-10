'use client'

import { Button } from '@/components/ui/button'
import {
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogContent,
  Dialog
} from '@/components/ui/dialog'
import { useGlobalData } from '@/hooks/use-global-store'

export function ErrorModal() {
  const { errorMessage, setGlobalError } = useGlobalData()
  return (
    <Dialog open={!!errorMessage}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
        </DialogHeader>
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
