'use client'

import { registerAddress } from '@/actions'
import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { supabase } from '@/lib/supabase'
import { formatAddress, fromEntries } from 'smartsale-lib'
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

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('whitelist')
      .select()
      .eq('project_id', projectId)
      .eq('address', address)

    if (error) console.error('error', error)

    if (data && data.length > 0) setIsRegistered(true)
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col space-y-4">
        <p className="text-center font-bold">
          {!isRegistered
            ? 'Register your address before the auction starts'
            : 'You are already registered'}
        </p>
      </div>
      {!isRegistered ? (
        <form action={submitForm}>
          <input type="hidden" name="address" value={address} />
          <input type="hidden" name="project_id" value={projectId} />
          <input type="hidden" name="account" value={session?.account} />
          <Button
            className="w-full bg-[#bd1e59] text-lg font-semibold text-white"
            disabled={!session || !address || pending}
            size="lg"
          >
            Register {address ? formatAddress(address) : 'Address'}
          </Button>
        </form>
      ) : null}
    </div>
  )
}
