'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  UseSigningRequestProvider,
  useSigningRequest
} from '@/hooks/use-signing-request'
import { useSearchParams } from 'next/navigation'
import React, { ReactNode } from 'react'
import QRCode from 'react-qr-code'
import { runtimeEnv } from 'smartsale-lib'

export function EsrDialog() {
  const searchParams = useSearchParams()
  const { open, toggleOpen, esr } = useSigningRequest()
  const code = esr?.encode() || ''

  // never show the qr on mobile or bitcash explorer
  const hideQr =
    runtimeEnv.isMobile || searchParams.has('bitcash_explorer') || !code

  if (hideQr) return <div />
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      {/* <DialogTrigger asChild>
        <Button>Trigger</Button>
      </DialogTrigger> */}
      {/* @ts-ignore */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* @ts-ignore */}
          <DialogTitle>Sign transaction</DialogTitle>
          {/* @ts-ignore */}
          <DialogDescription>
            Scan this qr code on your bitcash app and sign.
          </DialogDescription>
        </DialogHeader>
        {esr ? (
          <div className="qr-code-container">
            <QRCode
              size={256}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
                borderRadius: 4
              }}
              value={code}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
        <DialogFooter className="flex sm:justify-center ">
          go to app.bitcash.org to register
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const SigningRequestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <React.Suspense fallback={<div />}>
      <UseSigningRequestProvider>
        {children}
        <EsrDialog />
      </UseSigningRequestProvider>
    </React.Suspense>
  )
}
