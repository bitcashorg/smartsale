'use client'

import { registerAddress } from '@/app/actions/register-address'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase'
import { formatAddress } from '@repo/utils'
import { useQuery } from '@tanstack/react-query'
import { useAction } from 'next-safe-action/hooks'
import toast from 'react-hot-toast'
import { useAccount, useSignMessage } from 'wagmi'
import type { SignMessageData } from 'wagmi/query'

export function RegisterAddressForm({ projectId }: { projectId: number }) {
  const { session, loginOrConnect } = useSession()
  const { address } = useAccount()
  const supabase = useSupabaseClient()
  const { execute, result } = useAction(registerAddress)

  // check if the address is already registered
  const registration = useQuery({
    queryKey: ['registration', session?.account, address],
    enabled: Boolean(session?.account && address),
    queryFn: async () => {
      try {
        // this should never happen. see enabled: Boolean(session?.account && address)
        if (!address || !session?.account) throw new Error('No address or account')

        const { data, error } = await supabase
          .from('whitelist')
          .select()
          .eq('project_id', projectId)
          .eq('account', session.account)
          .single()

        if (error) throw error

        return data
      } catch (error) {
        console.error('Registration error:', error)
      }
    },
  })

  // sign the message to register the address
  const { signMessage, isPending } = useSignMessage({
    mutation: {
      onSuccess: async (signed_message: SignMessageData) => {
        if (!session || !address) return

        await execute({
          address,
          project_id: projectId,
          account: session.account,
          signed_message,
        })
      },
    },
  })

  const handleRegister = () => {
    if (!address || !session) return loginOrConnect()
    signMessage({ message: 'Sign me up for bitlauncher | bitcash presale' })
  }

  return registration.data?.address || result.data?.info?.address ? (
    <RegisterButton text={'Your are registered!'} />
  ) : (
    <div className="flex justify-center">
      <RegisterButton
        text={
          !address
            ? 'Connect EVM Wallet'
            : isPending && address
              ? `Registering ${formatAddress(address)}`
              : 'Get Whitelisted'
        }
        onClick={handleRegister}
      />
    </div>
  )
}

function RegisterButton(props: ButtonProps & { text: string }) {
  return (
    <Button variant="accent" {...props}>
      {props.text}
    </Button>
  )
}
