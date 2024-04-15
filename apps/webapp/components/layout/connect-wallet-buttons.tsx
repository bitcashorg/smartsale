'use client'

import { useSession } from '@/hooks/use-session'
import { BitcashAccessButton } from './bitcash-access'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { useConnectModal } from '@rainbow-me/rainbowkit'

export function ConnectWalletButtons() {
  const { session } = useSession()
  const { openConnectModal } = useConnectModal()
  return (
    <>
      {session ? (
        <Button
          className={cn(
            buttonVariants({
              variant: 'outline',
              radius: 'full'
            }),
            'border-transparent px-10 md:border-accent'
          )}
          onClick={() => openConnectModal && openConnectModal()}
        >
          Connect
        </Button>
      ) : (
        <BitcashAccessButton
          buttonStyle={{
            variant: 'secondary',
            radius: 'full'
          }}
          buttonClassName="px-10"
        />
      )}
    </>
  )
}
