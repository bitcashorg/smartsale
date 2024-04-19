'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/use-session'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { formatAddress } from 'smartsale-lib'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const { loginRedirect, session } = useSession()
  const { openConnectModal } = useConnectModal()
  const { address } = useAccount()
  const links = [
    {
      href: '/login',
      text: session?.account ? session.account : 'Login with Bitcash',
      mobile: true,
      action: session?.account ? null : loginRedirect,
      disabled: Boolean(session)
    },
    {
      href: '/connect',
      text: session
        ? address
          ? formatAddress(address)
          : ' Connect your EVM Wallet'
        : 'Login to Connect your EVM Wallet',
      mobile: true,
      action: session ? openConnectModal : loginRedirect,
      disabled: false
    },
    {
      href: '/about',
      text: 'About',
      mobile: false,
      action: null,
      disabled: false
    },
    {
      href: '/whitepaper',
      text: 'White Paper',
      mobile: false,
      action: null,
      disabled: false
    },
    {
      href: '/security',
      text: 'Security',
      mobile: false,
      action: null,
      disabled: false
    }
    // { href: '/terms', text: 'Privacy', mobile: false, action: null }
  ] as const

  return links.map(link => {
    if (link.mobile && !mobile) return null

    return (
      <Link
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${crypto.randomUUID()}`}
        shallow
        className="flex"
        href={link.href}
        onClick={e => {
          if (!link.action) return
          e.preventDefault()
          link.action()
        }}
        aria-disabled={link.disabled}
      >
        {link.text}
      </Link>
    )
  })
}
