'use client'

import { BitcashAccessContentType } from '@/components/layout/bitcash-access'
import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { useRouter } from 'next/navigation'
import QRCode from 'react-qr-code'
import { useEffectOnce } from 'react-use'
import { runtimeEnv } from 'smartsale-lib'

export function RegisterDialogContent({
  updateDialogContent
}: {
  updateDialogContent: (dialog: BitcashAccessContentType) => void
}) {
  const { session } = useSession()
  const router = useRouter()

  useEffectOnce(() => {
    const compatibleDevice = runtimeEnv.isMobile || runtimeEnv.isIpad

    if (compatibleDevice) {
      router.push('https://app.bitcash.org?share=JVnL7qzrU')
    }
  })

  const isUserLoggedIn = Boolean(session?.account)
  const buttonText = isUserLoggedIn
    ? `You're already logged in with ${session?.account} account.`
    : 'Already have an account? Log in!'

  return (
    <>
      <DialogHeader>
        <DialogTitle>Register to bitcash Wallet</DialogTitle>
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
            borderRadius: 4
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
        <p className="w-full text-sm text-center">On your phone you can also register at <b>bitca.sh/reg</b>!</p>
        <Button variant="link" onClick={() => updateDialogContent('login')} disabled={isUserLoggedIn}>
          {buttonText}
        </Button>
      </DialogFooter>
    </>
  )
}
