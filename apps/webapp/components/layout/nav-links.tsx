'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/use-session'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { formatAddress } from 'smartsale-lib'
import { useRouter } from 'next/navigation'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const { loginRedirect, session } = useSession()
  const { openConnectModal } = useConnectModal()
  // console.log('🎬', openConnectModal)
  const { address } = useAccount()
  const router = useRouter()

  const links = [
    {
      id: 'login',
      href: null,
      text: session?.account ? session.account : 'Login with Bitcash',
      mobile: true,
      action: session?.account ? null : loginRedirect,
      disabled: Boolean(session)
    },
    {
      id: 'connect',
      href: null,
      text: session
        ? address
          ? formatAddress(address)
          : ' Connect your EVM Wallet'
        : 'Login to Connect your EVM Wallet',
      mobile: true,
      action: () =>
        session?.account
          ? openConnectModal && openConnectModal()
          : loginRedirect(),
      disabled: false
    },
    {
      id: 'about',
      href: '/about',
      text: 'About',
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'whitepaper',
      href: '/whitepaper',
      text: 'Whitepaper',
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'security',
      href: '/security',
      text: 'Security',
      mobile: false,
      action: null,
      disabled: false
    }
    // {
    //   id: 'wallet',
    //   href: '/wallet',
    //   text: 'Wallet',
    //   mobile: false,
    //   action: null,
    //   disabled: false
    // }
    // { href: '/terms', text: 'Privacy', mobile: false, action: null }
  ] as const

  return links.map(link => {
    if (link.mobile && !mobile) return null

    return (
      <Link
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${crypto.randomUUID()}`}
        shallow
        className="flex"
        href={link.href || location.href}
        onClick={e => {
          e.preventDefault()
          console.log('🤌🏻 onclick', link)
          if (link.action) return link.action()
          if (link.href) router.push(link.href)
        }}
        aria-disabled={link.disabled}
      >
        {link.text}
      </Link>
    )
  })
}
