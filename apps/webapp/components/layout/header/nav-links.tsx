'use client'

import { LangProp } from '@/app/types/routing.type'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { formatAddress } from 'smartsale-lib'
import { useAccount } from 'wagmi'

export function NavLinks({
  mobile = false,
  lang
}: { mobile?: boolean } & LangProp) {
  const { loginRedirect, session, logout } = useSession()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { address } = useAccount()
  const router = useRouter()
  const bitcashAccount = session?.account

  const links = [
    {
      id: 'login',
      href: null,
      text: bitcashAccount ? bitcashAccount : 'Login with Bitcash',
      mobile: true,
      action: bitcashAccount ? null : loginRedirect,
      disabled: false
    },
    {
      id: 'connect',
      href: null,
      text: address ? formatAddress(address) : ' Connect your EVM Wallet',
      mobile: true,
      action: () =>
        bitcashAccount
          ? openConnectModal && openConnectModal()
          : openAccountModal && openAccountModal(),
      disabled: !bitcashAccount
    },
    {
      id: 'wallet',
      href: '/wallet',
      text: 'Wallet',
      mobile: true,
      action: null,
      disabled: !appConfig.features.enableWalletAccess
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
    },
    {
      id: 'blog',
      href: '/blog',
      text: 'Blog',
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'logout',
      href: null,
      action: logout,
      text: 'Sign out',
      mobile: true,
      disabled: !bitcashAccount
    }
  ] as const

  return links.map(link => {
    if ((link.mobile && !mobile) || link.disabled) return null

    return (
      <Link
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${crypto.randomUUID()}`}
        shallow
        className="flex"
        href={`/${lang}${link.href}` || location.href}
        onClick={e => {
          e.preventDefault()
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
