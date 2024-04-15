import Link from 'next/link'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return links.map(link => {
    if (link.mobile && !mobile) return null
    return (
      <Link
        shallow
        key={link.href}
        className="flex header-link"
        href={link.href}
      >
        {link.text}
      </Link>
    )
  })
}

const links = [
  { href: '#', text: 'Login with Bitcash', mobile: true },
  { href: '#', text: 'Connect EVM Wallet', mobile: true },
  { href: '/about', text: 'About', mobile: false },
  { href: '/security', text: 'Security', mobile: false },
  { href: '/terms', text: 'Privacy', mobile: false }
] as const
