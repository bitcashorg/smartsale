'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/use-session'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const { loginOrConnect, openConnectModal } = useSession()

  const links = [
    {
      href: '/login',
      text: 'Login with Bitcash',
      mobile: true,
      action: loginOrConnect
    },
    {
      href: '/connect',
      text: 'Connect EVM Wallet',
      mobile: true,
      action: openConnectModal
    },
    { href: '/about', text: 'About', mobile: false, action: null },
    { href: '/whitepaper', text: 'White Paper', mobile: false, action: null },
    { href: '/security', text: 'Security', mobile: false, action: null }
    // { href: '/terms', text: 'Privacy', mobile: false, action: null }
  ] as const

  return links.map(link => {
    if (link.mobile && !mobile) return null
    return (
      <Link
        shallow
        key={link.href}
        className="header-link flex"
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
