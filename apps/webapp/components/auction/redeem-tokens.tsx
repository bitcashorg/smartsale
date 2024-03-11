'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { useAccount } from 'wagmi'

export function RedeemTokens() {
  const { session } = useSession()
  const { address } = useAccount()
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-6 p-4">
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-center">Redeem your MBOTS Tokens</p>
      </div>
      <div className="flex flex-col space-y-2">
        <Button
          className="w-full text-lg font-semibold bg-[#bd1e59] text-white"
          disabled={!session || !address}
          size="lg"
        >
          Redeem
        </Button>
      </div>
    </div>
  )
}
