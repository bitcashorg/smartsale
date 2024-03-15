'use client'

import { BitcashAccessContentType } from '@/components/bitcash-access'
import { Button } from '@/components/ui/button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import QRCode from 'react-qr-code'
import { platform } from 'smartsale-lib'

export function RegisterDialogContent({ updateDialogContent }: { updateDialogContent: (dialog: BitcashAccessContentType) => void }) {
  const { loginUri, newSessionId } = useSession()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!loginUri || !open) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    if (platform.isMobile && !searchParams.has('bitcash_explorer')) {
      const params = new URLSearchParams()
      params.append('esr_code', loginUri.replace('esr://', ''))
      const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
      console.log('💥 callbackUrl', callbackUrl)
      const encodedCallbackUrl = encodeURIComponent(callbackUrl)
      params.append('callback', encodedCallbackUrl)
      window.location.href = `https://test.bitcash.org/login?${params.toString()}`
    }
  }, [open, loginUri, searchParams])

  return (
    <>
      <DialogHeader>
        <DialogTitle>Connect Bitcash App</DialogTitle>
        <DialogDescription>
          Scan this qr code with your smartphone camera.
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
        {/* <QRCode
            size={256}
            style={{
              height: 'auto',
              maxWidth: '100%',
              width: '100%',
              borderRadius: 4
            }}
            value={https://app.bitcash.org?share=JVnL7qzrU}
            viewBox={`0 0 256 256`}
          /> */}
        <Image
          src="/images/qr-bitcash-reg-bitlauncher.png"
          width={256}
          height={256}
          className="size-full"
          alt="bitcash app registration"
        />
      </div>
      <DialogFooter className="flex sm:justify-center ">
        <Button onClick={() => updateDialogContent('login')}>
          Already have an account? Login!
        </Button>
      </DialogFooter>
    </>
  )
}