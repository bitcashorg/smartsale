'use client'
import { registerAddress } from '@/actions'
import {
  Button,
  type ButtonProps,
  buttonVariants,
} from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import { useSupabaseClient } from '@/services/supabase'
import { presaleInsertSchema } from '../../../../../packages/supabase/src'
import { useQuery } from '@tanstack/react-query'
import { formatAddress, fromEntries } from '../../../../../packages/utils/src'
import { type FunctionComponent, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { useAccount, useSignMessage } from 'wagmi'
import type { SignMessageData } from 'wagmi/query'

export const RegisterAddressForm: FunctionComponent<{ projectId: number }> = ({
  projectId,
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
        .from('presale')
        .select()
        .eq('project_id', projectId)
        .eq('account', session!.account!) // we know for sure

      if (error) throw error

      return data[0]
    },
  })

  const [state, register] = useAsyncFn(async (formData: FormData) => {
    const o = fromEntries(formData)
    const data = {
      ...o,
      project_id: Number.parseInt(o.project_id, 10),
    }
    // validate input
    presaleInsertSchema.safeParse(data)

    return registerAddress(formData)
  })

  const { signMessage, isPending } = useSignMessage({
    mutation: {
      onSuccess: (signature: SignMessageData) => {
        // append signature to form data and apply
        if (!formData) return
        formData.append('signature', signature)
        register(formData)
      },
    },
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
      text={`${formatAddress(registration.data?.address || address!)} is registered!`}
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
            : 'Register'
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
          radius: 'full',
        }),
        'flex h-auto whitespace-normal border border-solid border-accent-secondary bg-background px-5',
      )}
      {...props}
    >
      {props.text}
    </Button>
  )
}
