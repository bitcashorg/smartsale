'use client'

import { BitcashAccessContentType } from '@/components/bitcash-access'
import { Button } from '@/components/ui/button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import QRCode from 'react-qr-code'
import { useEffectOnce } from 'react-use'
import { platform } from 'smartsale-lib'

export function RegisterDialogContent({ updateDialogContent }: { updateDialogContent: (dialog: BitcashAccessContentType) => void }) {
  const { session } = useSession()

  useEffectOnce(() => {
    const compatibleDevice = platform.isMobile || platform.isIpad

    if (compatibleDevice) {
      window.location.href = 'https://app.bitcash.org?share=JVnL7qzrU'
    }
  })

  return (
    <>
      <DialogHeader>
        <DialogTitle>Register to bitcash Wallet</DialogTitle>
        <DialogDescription>
          Scan this QR code with your smartphone camera or a QR reader to create a bitcash account.
        </DialogDescription>
      </DialogHeader>

      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 300,
          width: '100%',
          background: 'white',
          borderRadius: 4,
          border: '1px solid #e5e7eb'
        }}
      >
        <QRCode
          size={256}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%',
            padding: 10,
            borderRadius: 4,
          }}
          value={'https://app.bitcash.org?share=JVnL7qzrU'}
          viewBox={`0 0 256 256`}
        />
        {/* <Image
          src="/images/qr-bitcash-reg-bitlauncher.png"
          width={256}
          height={256}
          className="size-full"
          alt="bitcash app registration"
        /> */}
      </div>
      <DialogFooter className="flex !flex-col gap-4 pt-2 sm:justify-center border-t border-t-gray-300 dark:border-t-gray-800">
        <p className="w-full text-sm text-center">On your phone you can also register at <b>bit.app/register</b>!</p>
        <Button variant="link" onClick={() => updateDialogContent('login')} disabled={Boolean(session?.account)}>
          {session?.account ? `You're already logged in with ${session?.account} account.` : (
            'Already have an account? Log in!'
          )}
        </Button>
      </DialogFooter>
    </>
  )
}