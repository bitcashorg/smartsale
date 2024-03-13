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
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
// import { bitcashLogin } from '@/lib/esr'
import QRCode from 'react-qr-code'
import { useToggle } from 'react-use'
import { TestnetUSDCred } from 'smartsale-contracts'
import { platform } from 'smartsale-lib'
import { useAccount } from 'wagmi'

export function BitcashLoginButton() {
  const [open, toggleOpen] = useToggle(false)
  const { session, loginUri, newSessionId } = useSession()
  const { address } = useAccount()
  const searchParams = useSearchParams()
  const balance = useErc20Balance({
    abi: TestnetUSDCred.abi,
    contract: TestnetUSDCred.address,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId
  })

  useEffect(() => {
    toggleOpen(false)
  }, [session, toggleOpen])

  useEffect(() => {
    if (!loginUri || !open) return
    if (platform.isMobile || !searchParams.has('bitcash_explorer')) {
      // redirect with esr and callback on mobile
      const params = new URLSearchParams()
      params.append('esr_code', loginUri.replace('esr://', ''))
      const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
      console.log('💥 callbackUrl', callbackUrl)
      const encodedCallbackUrl = encodeURIComponent(callbackUrl)
      params.append('callback', encodedCallbackUrl)
      window.location.href = `https://test.bitcash.org/login?${params.toString()}`
    }
    // post request to parent if present
    window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')
  }, [open, loginUri, searchParams])

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
              border: '1px solid #e5e7eb'
            }}
          >
            <QRCode
              size={256}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
                borderRadius: 4
              }}
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
