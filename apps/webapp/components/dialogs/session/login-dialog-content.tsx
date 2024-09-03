'use client'

import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import Link from 'next/link'
import QRCode from 'react-qr-code'

export function SessionDialogContent() {
  const { loginUri, toggleShowSessionDialog } = useSession()
  return (
    <>
      <DialogHeader className="gap-4 ">
        {/* @ts-ignore */}
        <DialogTitle className="text-center text-green-500">
          Login or Register with Bitcash
        </DialogTitle>
        {/* @ts-ignore */}
        <DialogDescription className="text-center">
          Scan this QR code to login or register.
        </DialogDescription>
      </DialogHeader>
      {loginUri ? (
        <div className="qr-code-container">
          <QRCode
            size={256}
            style={{
              height: 'auto',
              maxWidth: '100%',
              width: '100%',
              borderRadius: 4,
            }}
            value={loginUri}
            viewBox={'0 0 256 256'}
          />
        </div>
      ) : null}

      <DialogFooter className="flex !flex-col gap-4 border-t border-t-gray-300 pt-2 dark:border-t-gray-800 sm:justify-center">
        <Link
          href="/blog/bitcash/how-to-register-and-kyc-to-bitcash"
          className="text-center text-accent cursor-pointer"
          onClick={toggleShowSessionDialog}
        >
          Learn more about the Bitcash KYC process
        </Link>
      </DialogFooter>
    </>
  )
}
