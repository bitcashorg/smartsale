'use client'

import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useReferral } from '@/hooks/use-referral'
import { useSession } from '@/hooks/use-session'
import QRCode from 'react-qr-code'
import type { BitcashAccessContentType } from './session-dialog.type'

export function RegisterDialogContent({
  updateDialogContent,
}: {
  updateDialogContent: (dialog: BitcashAccessContentType) => void
}) {
  const { session } = useSession()
  const isUserLoggedIn = Boolean(session?.account)
  const { bitcashRegisterUri } = useReferral()
  const buttonText = isUserLoggedIn
    ? `You're already logged in with ${session?.account} account.`
    : 'Already have an account? Log in!'

  return (
    <>
      <DialogHeader>
        {/* @ts-ignore */}
        <DialogTitle>Register to Bitcash Wallet</DialogTitle>
        {/* @ts-ignore */}
        <DialogDescription>
          Scan this QR code with your smartphone camera or a QR reader to create
          a bitcash account.
        </DialogDescription>
      </DialogHeader>

      <div className="qr-code-container">
        <QRCode
          size={256}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%',
            borderRadius: 4,
          }}
          value={bitcashRegisterUri}
          viewBox={'0 0 256 256'}
        />
        {/* <Image
          src="/images/qr-bitcash-reg-bitlauncher.webp"
          width={256}
          height={256}
          className="size-full"
          alt="bitcash app registration"
        /> */}
      </div>
      <DialogFooter className="flex !flex-col gap-4 border-t border-t-gray-300 pt-2 dark:border-t-gray-800 sm:justify-center">
        <p className="w-full text-center text-sm">
          On your phone you can also register at <b>bitcash.to/reg</b>!
        </p>
        <Button
          variant="link"
          onClick={() => updateDialogContent('login')}
          disabled={isUserLoggedIn}
        >
          {buttonText}
        </Button>
      </DialogFooter>
    </>
  )
}
