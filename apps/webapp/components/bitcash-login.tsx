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
import { useSession } from '@/hooks/use-session'
import { useEffect } from 'react'
// import { bitcashLogin } from '@/lib/esr'
import QRCode from 'react-qr-code'
import { useToggle } from 'react-use'
// import { useAsync } from 'react-use'

export function BitcashLoginButton() {
  const [open, toggleOpen] = useToggle(false)
  const { session, loginUri } = useSession()

  console.log({ loginUri })

  useEffect(() => {
    console.log('😬 closing login button')
    toggleOpen(false)
  }, [session, toggleOpen])

  if (session) return <Button>{session.account}</Button>

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
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
        {loginUri ? (
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
              value={loginUri.replace('esr://', '')}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
        <DialogFooter className="flex sm:justify-center ">
          <Button>Get the Bitcash App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
