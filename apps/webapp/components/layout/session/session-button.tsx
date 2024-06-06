'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { User, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { formatAddress } from 'smartsale-lib'
import { useAccount } from 'wagmi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
// import Link from 'next/link'

export function SessionButton() {
  const {
    session,
    loginRedirect,
    toggleShowSessionDialog,
    openConnectModal,
    logout
  } = useSession()
  const { openAccountModal } = useAccountModal()
  const account = useAccount()
  const router = useRouter()
  const hasSession = session?.account

  const loginUser = () =>
    isMobile ? loginRedirect() : toggleShowSessionDialog()

  return (
    <div className="flex justify-end gap-4">
      {hasSession && (
        <Button
          variant="ghost"
          radius="full"
          className={cn('m-0 md:px-3 lg:px-2 lg:px-4')}
          onClick={openConnectModal ? openConnectModal : openAccountModal}
          suppressHydrationWarning={true}
        >
          <Wallet />
          &nbsp; {account?.address ? formatAddress(account.address) : 'Connect'}
        </Button>
      )}

      {!hasSession ? (
        <Button
          variant="secondary"
          radius="full"
          className={cn('flex min-w-[170px] self-end md:px-3 lg:px-4')}
          onClick={loginUser}
          suppressHydrationWarning={true}
        >
          Login
        </Button>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              radius="full"
              className={cn('min-w-[170px] md:px-3 lg:px-4')}
            >
              <User /> &nbsp; {session?.account}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-44 border-[#845BBF] bg-background text-center"
          >
            <ul className="flex flex-col gap-5 py-2">
              {/* <li>
                <Link href={`/en/wallet`}>Wallet</Link>
              </li> */}
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
