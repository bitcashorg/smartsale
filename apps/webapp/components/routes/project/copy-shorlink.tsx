'use client'
import { AnimatePresence } from 'framer-motion'
import { LucideCheck, LucideLoader2, LucideShare, LucideX } from 'lucide-react'
import { useState } from 'react'

import { generateShortLink } from '@/actions'
import { useSession } from '@/hooks/use-session'
import { useParams } from 'next/navigation'
import { useAccount } from 'wagmi'
import { useSupabaseClient } from '../../../services/supabase/client'

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
      .select('shortLink')
      .eq('address', address || '')
      .single()

    if (error) {
      console.error('Failed to check share link:', error)
      setStatus('error')

      return { data: null, error }
    }

    if (!data.shortLink) {
      const { data: dubCoShortLink, error: dubCoError } = await generateShortLink(
        'https://bitlauncher.ai' + window.location.pathname + param
      )

      if (error) {
        console.error('Failed to check share link:', error)
        setStatus('error')

        return { data: null, error }
      }

      await supabase.from('user').upsert(
        [
          {
            shareLink: dubCoShortLink?.shortLink,
          }
        ],
        { returning: 'minimal' }
      )

      setTimeout(() => setStatus('default'), 5000)
    }

    return { data, error: null }
  }

  const copyToClipboard = async () => {
    setStatus('loading')
    try {
      const { data, error } = await checkShareLink()

      if (error || !data) throw new Error(error?.message || 'Unknown error')
      navigator.clipboard.writeText(data.shortLink)
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
  default: <LucideShare size={26} className="stroke-accent-secondary" />
}
