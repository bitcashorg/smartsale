'use client'

import { registerAddress } from '@/actions'
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { formatAddress, fromEntries } from 'smartsale-lib'
import { RegisterAddressSchema } from '@/lib/validators'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { useAccount } from 'wagmi'
import { useSupabaseClient } from '@/services/supabase'
import { cn } from '@/lib/utils'

export function RegisterAddressForm({ projectId }: { projectId: number }) {
  const supabase = useSupabaseClient()
  const { loginOrConnect, session } = useSession()
  const { address } = useAccount()
  const { pending } = useFormStatus()
  const [isRegistered, setIsRegistered] = useState(false)
  const account = useAccount()

  const submitForm = async (formData: FormData) => {
    try {
      const o = fromEntries(formData)
      const data = {
        ...o,
        project_id: parseInt(o.project_id)
      }
      const { success } = RegisterAddressSchema.safeParse(data)
      if (!success) alert('invalid address or project id')

      await registerAddress(formData)
      setIsRegistered(true)
    } catch (error) {
      alert('something went wrong')
    }
  }

  const fetchData = async () => {
    if (!address) return
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

  return isRegistered ? (
    <RegisterButton
      text={`You are already registered for pre-sale with address ${formatAddress(address || '')}`}
    />
  ) : (
    <form action={submitForm}>
      <input type="hidden" name="address" value={address} />
      <input type="hidden" name="project_id" value={projectId} />
      <input type="hidden" name="account" value={session?.account} />
      <RegisterButton onClick={loginOrConnect} text="Register for Presale" />
    </form>
  )
}

function RegisterButton(props: ButtonProps & { text: string }) {
  return (
    <Button
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'mx-auto mt-5 border border-solid border-accent bg-background px-10 py-5'
      )}
      {...props}
    >
      {props.text}
    </Button>
  )
}
