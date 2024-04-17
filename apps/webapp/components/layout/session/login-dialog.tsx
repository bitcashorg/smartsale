'use client'
import { LoginDialogContent } from '@/components/layout/session/login-dialog-content'
import { RegisterDialogContent } from '@/components/layout/session/register-dialog-content'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { useState } from 'react'

export function LoginDialog({ defaultContent = 'login' }: BitcashAccessProps) {
  const [dialogContent, setDialogContent] =
    useState<BitcashAccessContentType>(defaultContent)
  const { showLoginDialog, toggleShowLoginDialog } = useSession()
  const isLogin = dialogContent === 'login'

  return (
    <Dialog open={showLoginDialog} onOpenChange={toggleShowLoginDialog}>
      <DialogContent className="box-content w-full sm:max-w-[430px]">
        {isLogin ? (
          <LoginDialogContent updateDialogContent={setDialogContent} />
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
