'use client'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, Card } from '@/components/ui/card'
import { useSession } from '@/hooks/use-session'
import { useAccount } from 'wagmi'

export function ClaimTokens() {
  const { session } = useSession()
  const { address } = useAccount()
  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">Claim your MBOTS Tokens</div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full bg-[#bd1e59]" disabled={!session || !address}>
          Claim
        </Button>
      </CardFooter>
    </Card>
  )
}
