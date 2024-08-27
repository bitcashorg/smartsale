'use client'
import { RegisterDialogContent } from '@/components/dialogs/session/register-dialog-content'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { useState } from 'react'
import { SessionDialogContent } from './login-dialog-content'
import type { BitcashAccessContentType } from './session-dialog.type'

export function SessionDialog({
  defaultContent = 'login',
}: BitcashAccessProps) {
  const [dialogContent, setDialogContent] =
    useState<BitcashAccessContentType>(defaultContent)
  const { showSessionDialog, toggleShowSessionDialog } = useSession()
  const isLogin = dialogContent === 'login'

  return (
    <Dialog open={showSessionDialog} onOpenChange={toggleShowSessionDialog}>
      {/* @ts-ignore */}
      <DialogContent className="box-content w-full sm:max-w-[430px]">
        {isLogin ? (
          <SessionDialogContent updateDialogContent={setDialogContent} />
        ) : (
          <RegisterDialogContent updateDialogContent={setDialogContent} />
        )}
      </DialogContent>
    </Dialog>
  )
}

interface BitcashAccessProps {
  defaultContent?: BitcashAccessContentType
}
