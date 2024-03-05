'use client'

import { registerAddress } from '@/actions'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, Card } from '@/components/ui/card'
import { useSession } from '@/hooks/use-session'
import { supabase } from '@/lib/supabase'
import { formatAddress, fromEntries } from '@/lib/utils'
import { registerAddressSchema } from '@/lib/validators'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { useAccount } from 'wagmi'

export function RegisterAddress({ projectId }: { projectId: number }) {
  const { session } = useSession()
  const { address } = useAccount()
  const { pending } = useFormStatus()
  const [isRegistered, setIsRegistered] = useState(false)

  const submitForm = async (formData: FormData) => {
    try {
      const o = fromEntries(formData)
      const data = {
        ...o,
        project_id: parseInt(o.project_id)
      }
      const { success } = registerAddressSchema.safeParse(data)
      if (!success) alert('invalid address or project id')

      await registerAddress(formData)
      setIsRegistered(true)
    } catch (error) {
      alert('something went wrong')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetch data', { projectId, address })
      const { data, error } = await supabase
        .from('whitelist')
        .select()
        .eq('project_id', projectId)
        .eq('address', address)

      if (error) console.error('error', error)

      if (data && data.length > 0) setIsRegistered(true)
    }

    fetchData()
  }, [])

  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">
            {!isRegistered
              ? 'Register your address before the auction starts'
              : 'You are already registered'}
          </div>
        </div>
      </CardContent>
      {!isRegistered ? (
        <CardFooter className="flex flex-col space-y-2">
          <form action={submitForm}>
            <input type="hidden" name="address" value={address} />
            <input type="hidden" name="project_id" value={projectId} />
            <input type="hidden" name="account" value={session?.account} />
            <Button
              className="w-full bg-[#bd1e59]"
              disabled={!session || !address || pending}
            >
              Register {address ? formatAddress(address) : 'Address'}
            </Button>
          </form>
        </CardFooter>
      ) : null}
    </Card>
  )
}
