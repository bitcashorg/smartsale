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
// import { bitcashLogin } from '@/lib/esr'
import QRCode from 'react-qr-code'
// import { useAsync } from 'react-use'

export function BitcashLoginButton() {
  // const loginEsr = useAsync(bitcashLogin)
  // console.log('loginEsr', loginEsr)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Bitcash App</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Bitcash App</DialogTitle>
          <DialogDescription>
            Scan this qr code on your bitcash app and sign.
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            height: 'auto',
            margin: '0 auto',
            maxWidth: 300,
            width: '100%'
          }}
        >
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={
              'gmNgZGB4wGjh7ytoxAAEDS8lehkZGSCACUpzwASYdTJKSgqKrfT1kzJLkhOLM3RzEkvzkjMKElP0ylKLklNz9BILCvQTCzL1U4uLGAA'
            }
            viewBox={`0 0 256 256`}
          />
        </div>
        <DialogFooter className="flex sm:justify-center ">
          <Button>Get the Bitcash App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
