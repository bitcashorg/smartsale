'use client'
import { LoginDialogContent } from '@/components/dialogs/login'
import { RegisterDialogContent } from '@/components/dialogs/register'
import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useErc20Balance } from '@/hooks/use-balance'
import { useSession } from '@/hooks/use-session'
import { VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
// import { bitcashLogin } from '@/lib/esr'
import { useToggle } from 'react-use'
import { TestnetUSDCred } from 'smartsale-contracts'
import { runtimeEnv } from 'smartsale-lib'
import { useAccount } from 'wagmi'

export function BitcashAccessButton({
  defaultContent = 'login',
  buttonLabel = 'Connect Bitcash App',
  buttonStyle
}: BitcashAccessProps) {
  const [open, toggleOpen] = useToggle(false)
  const [dialogContent, setDialogContent] =
    useState<BitcashAccessContentType>(defaultContent)
  const { session, loginUri, newSessionId } = useSession()
  const { address } = useAccount()
  const searchParams = useSearchParams()
  const balance = useErc20Balance({
    abi: TestnetUSDCred.abi,
    contract: TestnetUSDCred.address,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId
  })
  const isLogin = dialogContent === 'login'

  useEffect(() => {
    !searchParams.has('bitcash_explorer') && isLogin && toggleOpen(false)
  }, [session, searchParams])

  useEffect(() => {
    if (!loginUri || !open || !isLogin) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    if (runtimeEnv.isMobile && !searchParams.has('bitcash_explorer')) {
      const params = new URLSearchParams()
      params.append('esr_code', loginUri.replace('esr://', ''))
      const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
      console.log('💥 callbackUrl', callbackUrl)
      const encodedCallbackUrl = encodeURIComponent(callbackUrl)
      params.append('callback', encodedCallbackUrl)
      window.location.href = `https://test.bitcash.org/login?${params.toString()}`
    }
  }, [open, loginUri, searchParams])

  if (session && isLogin)
    return (
      <Link href="/wallet" shallow>
        <Button>
          {session.account} - ${balance.formatted}
        </Button>
      </Link>
    )

  // never show the qr on mobile or bitcash explorer
  const hideQr = runtimeEnv.isMobile || searchParams.has('bitcash_explorer')

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogTrigger asChild>
        <Button
          className="focus-within:scale-105 hover:scale-105"
          {...buttonStyle}
        >
          {buttonLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        {!hideQr && isLogin && (
          <LoginDialogContent updateDialogContent={setDialogContent} />
        )}
        {!isLogin && (
          <RegisterDialogContent updateDialogContent={setDialogContent} />
        )}
      </DialogContent>
    </Dialog>
  )
}

interface BitcashAccessProps {
  defaultContent?: BitcashAccessContentType
  buttonLabel?: string
  buttonStyle?: VariantProps<typeof buttonVariants>
}

export type BitcashAccessContentType = 'login' | 'register'
