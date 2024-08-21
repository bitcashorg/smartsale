'use client'
import { SessionDialogContent } from '@/components/layout/session/login-dialog-content'
import { RegisterDialogContent } from '@/components/layout/session/register-dialog-content'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { useState } from 'react'

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

export type BitcashAccessContentType = 'login' | 'register'
