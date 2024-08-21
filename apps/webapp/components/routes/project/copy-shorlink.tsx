'use client'
import { AnimatePresence } from 'framer-motion'
import { LucideCheck, LucideLoader2, LucideShare, LucideX } from 'lucide-react'
import { useState } from 'react'

import { generateShortLink } from '@/actions'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase/client'
import { uniq } from 'lodash'
import { useParams } from 'next/navigation'
import { useAccount } from 'wagmi'

export function CopyShortlinkIcon() {
  const [status, setStatus] = useState<
    'default' | 'loading' | 'copied' | 'error'
  >('default')
  const { session } = useSession()
  const { address } = useAccount()
  const supabase = useSupabaseClient()
  const existingParams = useParams() // Get existing query parameters
  const param = session
    ? `${existingParams ? '&' : '?'}referrer=${session.account}?source=bitlauncher.ai`
    : ''

  const checkShareLink = async () => {
    const { data, error } = await supabase
      .from('user')
      // select shareLink from user where linkPath = 'https://bitlauncher.ai${window.location.pathname}${param}'
      .select('id, account, address, short_link')
      .eq('account', session?.account || '')
      .contains('address', [address || ''])
      .single()

    if (error) {
      console.error('Failed to check share link:', error)
      setStatus('error')

      return { data: null, error }
    }

    let returnData = data

    if (!data.short_link) {
      const { data: dubCoShortLink, error: dubCoError } =
        await generateShortLink(
          'https://bitlauncher.ai' + window.location.pathname + param,
        )

      if (dubCoError) {
        console.error('❌ Failed to check share link:', dubCoError)
        setStatus('error')

        return { data: null, error: dubCoError }
      }

      // ? Doing upsert (account, address) for current users with active sessions
      const updatedAddresses = [
        ...(data?.address.length
          ? [...data?.address, address as string]
          : [address as string]),
      ]
      await supabase.from('user').upsert(
        {
          id: data.id,
          account: session?.account || '',
          address: uniq(updatedAddresses),
          short_link: dubCoShortLink?.shortLink,
        },
        {
          onConflict: 'account',
        },
      )

      returnData = { ...data, short_link: dubCoShortLink?.shortLink as string }

      setTimeout(() => setStatus('default'), 5000)
    }

    return { data: returnData, error: null }
  }

  const copyToClipboard = async () => {
    setStatus('loading')
    try {
      const { data, error } = await checkShareLink()

      if (error || !data) throw new Error(error?.message || 'Unknown error')
      navigator.clipboard.writeText(data?.short_link || '')
      setStatus('copied')
      setTimeout(() => setStatus('default'), 5000)
    } catch (error) {
      console.error('Failed to copy share link:', error)
      setStatus('error')
      setTimeout(() => setStatus('default'), 5000)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="relative size-[58px] rounded-full [&>svg]:size-[36px]"
    >
      <AnimatePresence>{iconsMap[status]}</AnimatePresence>
    </button>
  )
}

interface CopyShortlinkIconProps {
  linkPath: string
}

const iconsMap = {
  loading: (
    <LucideLoader2 size={26} className="animate-spin stroke-accent-secondary" />
  ),
  copied: <LucideCheck size={26} className="stroke-success" />,
  error: <LucideX size={26} className="stroke-destructive" />,
  default: <LucideShare size={26} className="stroke-accent-secondary" />,
}
