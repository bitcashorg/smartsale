'use client'
import { generateShortLink } from '@/app/actions/general'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase/client'
import { AnimatePresence } from 'framer-motion'
import { LucideCheck, LucideLoader2, LucideShare, LucideX } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export function CopyShortlinkIcon() {
  const [status, setStatus] = useState<
    'default' | 'loading' | 'copied' | 'error'
  >('default')
  const { session } = useSession()
  const supabase = useSupabaseClient()
  const existingParams = useParams() // Get existing query parameters
  const param = session
    ? `${existingParams ? '&' : '?'}referrer=${session.account}?source=bitlauncher.ai`
    : ''

  const checkShareLink = async () => {
    const { data, error } = await supabase
      .from('account')
      // select shareLink from user where linkPath = 'https://bitlauncher.ai${window.location.pathname}${param}'
      .select('account, short_link')
      .eq('account', session?.account || '')
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
          `https://bitlauncher.ai${window.location.pathname}${param}`,
        )

      if (dubCoError) {
        console.error('❌ Failed to generate short link:', dubCoError)
        setStatus('error')

        return { data: null, error: dubCoError }
      }

      await supabase.from('account').upsert(
        {
          account: session?.account || '',
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
      type="button"
      key={'share-shortlink'}
      onClick={copyToClipboard}
      className="relative size-[58px] rounded-full [&>svg]:size-[36px]"
    >
      <AnimatePresence>{iconsMap[status]}</AnimatePresence>
    </button>
  )
}

const iconsMap = {
  loading: (
    <LucideLoader2 size={26} className="animate-spin stroke-accent-secondary" />
  ),
  copied: <LucideCheck size={26} className="stroke-success" />,
  error: <LucideX size={26} className="stroke-destructive" />,
  default: <LucideShare size={26} className="stroke-accent-secondary" />,
}
