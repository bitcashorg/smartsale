'use client'

import { BitcashAccessContentType } from '@/components/layout/session/session-dialog'
import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { useSearchParams } from 'next/navigation'
import QRCode from 'react-qr-code'

export function SessionDialogContent({
  updateDialogContent
}: {
  updateDialogContent: (dialog: BitcashAccessContentType) => void
}) {
  const { loginUri } = useSession()
  const searchParams = useSearchParams()
  const referrer = searchParams.get('referrer')
  return (
    <>
      <DialogHeader className="gap-4">
        {/* @ts-ignore */}
        <DialogTitle>Connect bitcash Wallet</DialogTitle>
        {/* @ts-ignore */}
        <DialogDescription>
          Scan this QR code with the bitcash wallet QR reader and sign to log
          in.
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
              borderRadius: 4
            }}
            value={`${loginUri}${referrer ? `?referrer=${referrer}` : ''}`}
            viewBox={`0 0 256 256`}
          />
        </div>
      ) : null}

      <DialogFooter className="flex !flex-col gap-4 border-t border-t-gray-300 pt-2 dark:border-t-gray-800 sm:justify-center">
        <Button onClick={() => updateDialogContent('register')}>
          Get Bitcash App
        </Button>
      </DialogFooter>
    </>
  )
}
