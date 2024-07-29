'use client'

import { LangProp } from '@/types/routing.type'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { formatAddress } from 'app-lib'
import { useAccount } from 'wagmi'
import { v4 as uuidv4 } from 'uuid'
import { useMobileNav } from '@/hooks/use-mobile-navigation'

export function NavLinks({ mobile = false, lang, dict }: { mobile?: boolean } & NavLinksProps) {
  const { loginRedirect, session, logout } = useSession()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { address } = useAccount()
  const router = useRouter()
  const { close } = useMobileNav() // Use context to close the menu
  const bitcashAccount = session?.account

  console.log('NavLinks rendered with mobile:', mobile)

  const links = [
    {
      id: 'login',
      href: null,
      text: bitcashAccount ? bitcashAccount : dict.nav.login,
      mobile: true,
      action: bitcashAccount ? null : loginRedirect,
      disabled: false
    },
    {
      id: 'connect',
      href: null,
      text: address ? formatAddress(address) : dict.nav.connect,
      mobile: true,
      action: () =>
        bitcashAccount
          ? openConnectModal && openConnectModal()
          : openAccountModal && openAccountModal(),
      disabled: !bitcashAccount
    },
    {
      id: 'about',
      href: '/learn/batch-auctions',
      text: dict.nav.about,
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
      href: '/learn/security',
      text: dict.nav.security,
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'wallet',
      href: '/wallet',
      text: dict.nav.wallet,
      mobile: false,
      action: null,
      disabled: !appConfig.features.enableWalletAccess
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
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${uuidv4()}`}
        shallow
        className="flex"
        href={link.href ? `/${lang}${link.href}` : '#'}
        onClick={e => {
          e.preventDefault()
          console.log('Link clicked:', link.text)
          if (link.action) {
            link.action()
          }
          if (link.href) {
            console.log('Navigating to:', link.href)
            router.push(`/${lang}${link.href}`)
          }
          console.log('Closing menu')
          close() // Close the menu using context
        }}
        aria-disabled={link.disabled}
      >
        {link.text}
      </Link>
    )
  })
}

interface NavLinksProps extends LangProp {
  mobile?: boolean
  dict: any
}