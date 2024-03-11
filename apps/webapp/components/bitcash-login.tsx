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
import { useErc20Balance } from '@/hooks/use-balance'
import { useSession } from '@/hooks/use-session'
import Link from 'next/link'
import { useEffect } from 'react'
// import { bitcashLogin } from '@/lib/esr'
import QRCode from 'react-qr-code'
import { useToggle } from 'react-use'
import { TestnetUSDCred } from 'smartsale-contracts'
import { useAccount } from 'wagmi'

export function BitcashLoginButton() {
  const [open, toggleOpen] = useToggle(false)
  const { session, loginUri } = useSession()
  const { address } = useAccount()
  const balance = useErc20Balance({
    abi: TestnetUSDCred.abi,
    contract: TestnetUSDCred.address,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId
  })

  useEffect(() => {
    toggleOpen(false)
  }, [session, toggleOpen])

  if (session)
    return (
      <Link href="/wallet" shallow>
        <Button>
          {session.account} - ${balance.formatted}
        </Button>
      </Link>
    )

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
              width: '100%',
              background: 'white',
              padding: 10
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
          <Link href={'https://app.bitcash.org/?share=JVnL7qzrU '}>
            <Button>Get Bitcash App</Button>
          </Link>
          <Button>Sign on Desktop</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
