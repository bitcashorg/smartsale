'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/use-session'

import { useConnectModal } from '@rainbow-me/rainbowkit'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const { session, loginUri, newSessionId } = useSession()
  const { openConnectModal } = useConnectModal()

  const login = () => {
    if (!loginUri || !open) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    const params = new URLSearchParams()
    params.append('esr_code', loginUri.replace('esr://', ''))
    const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
    console.log('💥 callbackUrl', callbackUrl)
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    params.append('callback', encodedCallbackUrl)
    location.href = `https://app.bitcash.org/login?${params.toString()}`
  }

  const links = [
    { href: '/login', text: 'Login with Bitcash', mobile: true, action: login },
    {
      href: '/connect',
      text: 'Connect EVM Wallet',
      mobile: true,
      action: openConnectModal
    },
    { href: '/about', text: 'About', mobile: false, action: null },
    { href: '/paper', text: 'White Paper', mobile: false, action: null },
    { href: '/security', text: 'Security', mobile: false, action: null }
    // { href: '/terms', text: 'Privacy', mobile: false, action: null }
  ] as const

  return links.map(link => {
    if (link.mobile && !mobile) return null
    return (
      <Link
        shallow
        key={link.href}
        className="flex header-link"
        href={link.href}
        onClick={e => {
          if (!link.action) return
          e.preventDefault()
          link.action()
        }}
      >
        {link.text}
      </Link>
    )
  })
}
