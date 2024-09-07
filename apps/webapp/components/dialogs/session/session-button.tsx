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
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'

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
              className={cn('lg:min-w-[170px] md:px-3 lg:px-4')}
            >
              <User /> &nbsp; {session?.account}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-44 border-accent-500 bg-background text-center"
          >
            <ul className="flex flex-col gap-5 py-2">
              {appConfig.features.presale && hasSession && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <li
                  onClick={openConnectModal ? openConnectModal : openAccountModal}
                  className="cursor-pointer text-center flex justify-center"
                >
                  <Wallet />
                  &nbsp;{' '}
                  {account?.address ? formatAddressShort(account.address) : 'Connect'}
                </li>
              )}
              {appConfig.features.presale && (
                <>
                  <li>
                    <Link href="/bitcash-bitlauncher/presale" className="cursor-pointer">
                      Presale
                    </Link>
                  </li>
                  <li>
                    <Link href="/wallet" className="cursor-pointer">
                      Wallet
                    </Link>
                  </li>
                  <li>
                    <Link href="/referrals" className="cursor-pointer">
                      Referrals
                    </Link>
                  </li>
                </>
              )}
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: not needed rn */}
              <li onClick={logout} className="cursor-pointer">
                Sign Out
              </li>
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
