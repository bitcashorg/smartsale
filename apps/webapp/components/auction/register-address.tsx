'use client'

import { registerAddress } from '@/actions'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, Card } from '@/components/ui/card'
import { useSession } from '@/hooks/use-session'
import { formatAddress, fromEntries } from '@/lib/utils'
import { registerAddressSchema } from '@/lib/validators'
import { useFormStatus } from 'react-dom'
import { useAccount } from 'wagmi'

export function RegisterAddress({ projectId }: { projectId: number }) {
  const { session } = useSession()
  const { address } = useAccount()
  const { pending } = useFormStatus()

  const submitForm = (formData: FormData) => {
    const { success } = registerAddressSchema.safeParse(fromEntries(formData))
    if (!success) alert('invalid address or project id')
    registerAddress(formData)
  }
  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">
            Register you address before the auction starts
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <form action={submitForm}>
          <input type="hidden" name="address" value={address} />
          <input type="hidden" name="project_id" value={projectId} />
          <Button
            className="w-full bg-[#bd1e59]"
            disabled={!session || !address || pending}
          >
            Register {address ? formatAddress(address) : 'Address'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
