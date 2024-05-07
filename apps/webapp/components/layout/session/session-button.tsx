'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { User, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'

export function SessionButton() {
  const { session, loginRedirect, toggleShowSessionDialog, openConnectModal } = useSession()
  const router = useRouter()
  const isSession = session?.account

  const loginUser = () => isMobile
    ? loginRedirect()
    : toggleShowSessionDialog()

  // TODO: Implement logout
  const logoutUser = () => {
    return null
  }

  const redirectToWallet = () => {
    if (appConfig.features.enableWalletAccess) {
      return router.push('/wallet')
    }
  }

  return (
    <div className="flex items-center gap-4">
      {isSession && (
        <Button
          variant="ghost"
          radius="full"
          className={cn('m-0 md:px-3 lg:px-8', !openConnectModal && 'lg:px-2')}
          onClick={openConnectModal ? openConnectModal : redirectToWallet}
          suppressHydrationWarning={true}
        >
          <Wallet /><span className={cn(!openConnectModal && 'hidden')}>&nbsp;</span> {openConnectModal && 'Connect'}
        </Button>
      )}
      <Button
        variant="secondary"
        radius="full"
        className={cn('md:px-3 lg:px-8 min-w-[170px]')}
        onClick={!isSession ? loginUser : logoutUser}
        suppressHydrationWarning={true}
      >
        {!isSession ? (
          'Login'
        ) : (
          <>
            <User /> &nbsp; {session?.account}
          </>
        )}
      </Button>
    </div>
  )
}
