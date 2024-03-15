'use client'

import { BitcashAccessContentType } from '@/components/bitcash-access'
import { Button } from '@/components/ui/button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { useEffectOnce } from 'react-use'
import { platform } from 'smartsale-lib'

export function RegisterDialogContent({ updateDialogContent }: { updateDialogContent: (dialog: BitcashAccessContentType) => void }) {
  useEffectOnce(() => {
    const compatibleDevice = platform.isMobile || platform.isIpad

    if (compatibleDevice) {
      window.location.href = 'https://app.bitcash.org?share=JVnL7qzrU'
    }
  })

  return (
    <>
      <DialogHeader>
        <DialogTitle>Register to Bitcash App</DialogTitle>
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
      <DialogFooter className="flex sm:justify-center ">
        <Button variant="link" onClick={() => updateDialogContent('login')}>
          Already have an account? Log in!
        </Button>
      </DialogFooter>
    </>
  )
}