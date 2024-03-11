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
import { eosEvmTestnet } from 'smartsale-chains'
import { TestnetUSDCred } from 'smartsale-contracts'
import { useAccount } from 'wagmi'

// import { useAsync } from 'react-use'

export function BitcashLoginButton() {
  const [open, toggleOpen] = useToggle(false)
  const { session, loginUri } = useSession()
  const { address } = useAccount()
  const balance = useErc20Balance({
    abi: TestnetUSDCred.abi,
    contract: TestnetUSDCred.address,
    address: address || '0x',
    chainId: eosEvmTestnet.id
  })

  useEffect(() => {
    console.log('😬 closing login button')
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
        <Button className="hover:scale-105">Connect Bitcash App</Button>
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
              padding: 10,
              borderRadius: 4,
              border: '1px solid #e5e7eb',
            }}
          >
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%', borderRadius: 4 }}
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
