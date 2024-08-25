'use client'
import { LoginDialogContent } from '@/components/dialogs/login'
import { RegisterDialogContent } from '@/components/dialogs/register'
import { Button, type buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { IconDownRightArrow } from '@/components/ui/icons'
import { useErc20Balance } from '@/hooks/use-balance'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import { TestnetUSDCred } from '@repo/contracts'
import { runtimeEnv } from 'app-lib'
import type { VariantProps } from 'class-variance-authority'
import { LucideWallet } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
// import { bitcashLogin } from '@/lib/esr'
import { useToggle } from 'react-use'
import { useAccount } from 'wagmi'

export function BitcashAccessButton({
  defaultContent = 'login',
  buttonLabel = 'Log In',
  buttonClassName,
  buttonStyle,
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
    chainId: TestnetUSDCred.chainId,
  })
  const isLogin = dialogContent === 'login'
  const router = useRouter()

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
      router.push(`https://app.bitcash.org/login?${params.toString()}`)
    }
  }, [open, loginUri, searchParams])

  if (session && isLogin)
    return (
      <Button variant="secondary" className="flex w-full gap-2">
        <LucideWallet size={18} /> ${balance.formatted} on Wallet
      </Button>
    )

  // never show the qr on mobile or bitcash explorer
  const hideQr = runtimeEnv.isMobile || searchParams.has('bitcash_explorer')

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            {
              'text-md group relative size-14 rounded-full px-0 py-0 font-bold hover:[&svg]:fill-card':
                buttonLabel === 'down-right-icon',
            },
            buttonClassName,
          )}
          {...buttonStyle}
        >
          {buttonLabel === 'down-right-icon' ? (
            <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-[45deg] group-hover:-rotate-[45deg] [&_path]:stroke-white" />
          ) : (
            buttonLabel
          )}
        </Button>
      </DialogTrigger>

      {/* @ts-ignore */}
      <DialogContent className="box-content w-full sm:max-w-[430px]">
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
  buttonClassName?: string
  defaultContent?: BitcashAccessContentType
  buttonLabel?: string
  buttonStyle?: VariantProps<typeof buttonVariants>
}

export type BitcashAccessContentType = 'login' | 'register'
