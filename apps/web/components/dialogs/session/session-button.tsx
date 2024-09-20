'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { formatAddressShort } from '@repo/utils'
import { User, Wallet } from 'lucide-react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'
import Image from "next/image"

export function SessionButton() {
  const { session, loginRedirect, toggleShowSessionDialog, openConnectModal, logout } =
    useSession()
  const { openAccountModal } = useAccountModal()
  const account = useAccount()
  const hasSession = session?.account

  const loginUser = () => (isMobile ? loginRedirect() : toggleShowSessionDialog())

  return (
    <div className="flex justify-end gap-1.5 lg:gap-5">
      {!hasSession ? (
        <Button
          variant="secondary"
          radius="full"
          className={cn('flex min-w-[170px] self-end md:px-3 lg:px-4')}
          onClick={loginUser}
          suppressHydrationWarning={true}
        >
          Login / Register
        </Button>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              radius="full"
              className={cn('lg:min-w-52 md:px-3 lg:px-4')}
            >
              <User /> &nbsp; {session?.account}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-52 mt-5 bg-accent-600 border-none font-semibold text-center relative after:content-[''] after:absolute after:-top-3 after:mx-auto after:-translate-x-2 after:w-6 after:h-6 after:rotate-45 after:bg-accent-600"
          >
            <ul className="flex flex-col gap-5 py-2 justify-center items-start text-left">
              {appConfig.features.wallet ? (
                <Link className="w-full cursor-pointer" href="/wallet">
                  <li className="w-full">
                    My Wallet
                  </li>
                </Link>
              ) : null}

              <li
                onClick={openConnectModal ? openConnectModal : openAccountModal}
                className="w-full cursor-pointer text-center flex justify-start"
              >
                <Wallet />
                &nbsp;{' '}
                {account?.address ? formatAddressShort(account.address) : 'Connect'}
              </li>

              <li onClick={logout} className="cursor-pointer flex justify-start items-center gap-x-3 pb-5 border-b w-full border-b-textInfoForeground">
                <span>Sign Out</span>
                <Image
                  src="/images/sign-out.svg"
                  alt="Sign out"
                  title="Sign out"
                  width={24}
                  height={24}
                />
              </li>

              {appConfig.features.presale ? (
                <Link href="/bitcash-bitlauncher/presale" className="w-full cursor-pointer">
                  <li className="w-full">
                    Presale
                  </li>
                </Link>
              ) : null}

              <Link href="/about/about-bitlauncher" className="w-full cursor-pointer">
                <li className="w-full">
                  About
                </li>
              </Link>

              <Link href="/whitepaper" className="w-full cursor-pointer">
                <li className="w-full">
                  Whitepaper
                </li>
              </Link>

              <Link href="/learn/security" className="w-full cursor-pointer">
                <li className="w-full">
                  Security
                </li>
              </Link>

              <Link href="/dashboard/referrals" className="w-full cursor-pointer">
                <li className="w-full">
                  Referrals
                </li>
              </Link>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

export const SessionButtonLoader = () => {
  return (
    <div className="flex justify-end gap-4">
      <Button
        variant="secondary"
        radius="full"
        className={cn('min-w-[170px] md:px-3 lg:px-4')}
        suppressHydrationWarning={true}
      >
        Login
      </Button>
    </div>
  )
}
