'use client'
import { LoginDialogContent } from '@/components/layout/bitcash-auth/login-dialog-content'
import { RegisterDialogContent } from '@/components/layout/bitcash-auth/register-dialog-content'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useErc20Balance } from '@/hooks/use-balance'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'

import { LucideWallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useToggle } from 'react-use'
import { TestnetUSDCred } from 'smartsale-contracts'

import { useAccount } from 'wagmi'

export function BitcashLogin() {
  const [open, toggleOpen] = useToggle(false)
  const [dialogContent, setDialogContent] =
    useState<BitcashAccessContentType>('login')
  const { session } = useSession()
  const { address } = useAccount()
  const balance = useErc20Balance({
    abi: TestnetUSDCred.abi,
    contract: TestnetUSDCred.address,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId
  })
  const isLogin = dialogContent === 'login'

  // TODO: review this, do we need it?
  if (session && isLogin)
    return (
      <Link href="#">
        <Button variant="secondary" className="flex w-full gap-2">
          <LucideWallet size={18} /> ${balance.formatted} on Wallet
        </Button>
      </Link>
    )

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" radius="full" className={cn('px-10')}>
          {session ? 'Connect' : 'Login'}
        </Button>
      </DialogTrigger>

      <DialogContent className="box-content w-full sm:max-w-[430px]">
        {!isLogin && (
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
}

export type BitcashAccessContentType = 'login' | 'register'
