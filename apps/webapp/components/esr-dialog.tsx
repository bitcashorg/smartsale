'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import Link from 'next/link'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { useToggle } from 'react-use'

export function EsrDialog() {
  const [open, toggleOpen] = useToggle(false)
  const [esr, setEsr] = useState('')
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogTrigger asChild>
        <Button>Trigger</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Bitcash App</DialogTitle>
          <DialogDescription>
            Scan this qr code on your bitcash app and sign.
          </DialogDescription>
        </DialogHeader>
        {esr ? (
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              maxWidth: 300,
              width: '100%',
              background: 'white',
              padding: 10
            }}
          >
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={esr.replace('esr://', '')}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
        <DialogFooter className="flex sm:justify-center ">
          <Link href={'https://app.bitcash.org/?share=JVnL7qzrU '}>
            <Button>Get Bitcash App</Button>
          </Link>
          <Button>Sign on Desktop</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
