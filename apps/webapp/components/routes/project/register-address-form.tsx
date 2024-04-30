'use client'
import { FunctionComponent, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useAsyncFn } from 'react-use'
import { formatAddress, fromEntries } from 'smartsale-lib'
import { registerAddress } from '@/actions'
import { SignMessageData } from 'wagmi/query'
import { useQuery } from '@tanstack/react-query'
import { useSession } from '@/hooks/use-session'
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { preSaleInsertSchema } from '@repo/supabase'
import { useSupabaseClient } from '@/lib/supabase'

export const RegisterAddressForm: FunctionComponent<{ projectId: number }> = ({
  projectId
}) => {
  const { session, loginOrConnect } = useSession()
  const { address } = useAccount()
  const [formData, setFormData] = useState<FormData>()
  const supabase = useSupabaseClient()

  const registration = useQuery({
    queryKey: ['registration', session?.account || 'nobody'], // unique query key per user
    enabled: Boolean(session), // only fetch if logged in
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pre_sale')
        .select()
        .eq('project_id', projectId)
        .eq('account', session!.account!) // we know for sure

      if (error) throw error

      return data[0]
    }
  })

  const [state, register] = useAsyncFn(async (formData: FormData) => {
    const o = fromEntries(formData)
    const data = {
      ...o,
      project_id: parseInt(o.project_id, 10)
    }
    // validate input
    preSaleInsertSchema.safeParse(data)

    return registerAddress(formData)
  })

  const { signMessage, isPending } = useSignMessage({
    mutation: {
      onSuccess: (signature: SignMessageData) => {
        // append signature to form data and apply
        if (!formData) return
        formData.append('signature', signature)
        register(formData)
      }
    }
  })

  const submitForm = (formData: FormData) => {
    // force login and connect
    if (!address || !session) return loginOrConnect()
    // save form data for later use in register function as sign message success callback
    setFormData(formData)
    // request sign message
    signMessage({ message: `Sign me up for bitlauncher | bitcash pre-sale` })
  }

  return registration.data || state.value ? (
    <RegisterButton
      text={`You are registered for pre-sale with address ${formatAddress(registration.data?.address || address!)}`}
    />
  ) : (
    <form action={submitForm} className="flex justify-center">
      <input type="hidden" name="address" value={address} />
      <input type="hidden" name="project_id" value={projectId} />
      <input type="hidden" name="account" value={session?.account} />
      <RegisterButton
        text={
          state.loading || isPending
            ? `Registering ${formatAddress(address!)}`
            : 'Register for Presale'
        }
      />
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
