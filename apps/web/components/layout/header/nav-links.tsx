'use client'

import { useMobileNav } from '@/hooks/use-mobile-navigation'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import type { LangProp } from '@/types/routing.type'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { formatAddress } from '@repo/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { useAccount } from 'wagmi'
import Image from "next/image"
import { cn } from '@/lib/utils'

export function NavLinks({
  mobile = false,
  lang,
  dict,
}: { mobile?: boolean } & NavLinksProps) {
  const { loginRedirect, session, logout } = useSession()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { address } = useAccount()
  const router = useRouter()
  const { close } = useMobileNav() // Use context to close the menu
  const bitcashAccount = session?.account

  const links = [
    {
      id: 'login',
      href: null,
      text: bitcashAccount ? bitcashAccount : dict.nav.login,
      mobile: true,
      action: bitcashAccount ? null : loginRedirect,
      disabled: false,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'wallet',
      href: '/wallet',
      text: "My Wallet",
      mobile: true,
      action: null,
      disabled: !appConfig.features.wallet && !bitcashAccount,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'connect',
      href: null,
      text: address ? formatAddress(address) : dict.nav.connect,
      mobile: true,
      action: () => (bitcashAccount ? openConnectModal?.() : openAccountModal?.()),
      disabled: !bitcashAccount,
      icon: {
        path: address ? "/images/wallet.svg" : "",
        left: address ? true : false,
        right: false
      }
    },
    {
      id: 'logout',
      href: null,
      action: logout,
      text: 'Sign out',
      mobile: true,
      disabled: !bitcashAccount,
      icon: {
        path: "/images/sign-out.svg",
        left: false,
        right: true
      }
    },
    {
      id: 'about',
      href: '/about/about-bitlauncher',
      text: dict.nav.about,
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'whitepaper',
      href: '/whitepaper',
      text: 'Whitepaper',
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'security',
      href: '/learn/security',
      text: dict.nav.security,
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'blog',
      href: '/blog',
      text: 'Blog',
      mobile: false,
      action: null,
      disabled: true,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
    {
      id: 'referrals',
      href: '/dashboard/referrals',
      text: 'Referrals',
      mobile: true,
      action: null,
      disabled: !bitcashAccount,
      icon: {
        path: "",
        left: false,
        right: false
      }
    },
  ] as const

  return links.map((link) => {
    if ((link.mobile && !mobile) || link.disabled) return null

    return (
      <Link
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${uuidv4()}`}
        shallow
        className={cn("flex justify-center items-center gap-x-3 font-semibold w-11/12", link.id === "logout" && "pb-8 border-b border-b-textInfoForeground")}
        href={link.href ? `/${lang}${link.href}` : '#'}
        onClick={(e) => {
          e.preventDefault()
          if (link.action) {
            link.action()
          }
          if (link.href) {
            router.push(`/${lang}${link.href}`)
          }
          close() // Close the menu using context
        }}
        aria-disabled={link.disabled}
      >
        {
          link?.icon?.left && (
            <Image 
              src={link?.icon?.path}
              alt={link?.text}
              title={link?.text}
              width={24}
              height={24}
            />
          )
        }
        {link.text}
        {
          link?.icon?.right  && (
            <Image 
              src={link?.icon?.path}
              alt={link?.text}
              title={link?.text}
              width={24}
              height={24}
            />
          )
        }
      </Link>
    )
  })
}

interface NavLinksProps extends LangProp {
  mobile?: boolean
  dict: any
}
