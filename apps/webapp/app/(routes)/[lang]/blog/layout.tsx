import { Metadata } from 'next'
import { ReactNode } from 'react'
import { locales } from '@/dictionaries/locales'

export default function BlogLayout({ children }: RootLayoutProps) {
  return (
    <div className="container">
      <div className="relative flex flex-col min-h-screen">
        <main className="relative flex flex-col flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}

// generate static routes for a given set of locales,
export async function generateStaticParams() {
  return ['en'].map(lang => ({ lang }))
}

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: `%s - Blog`
  },
  description: 'Ai and Web3 articles, community with tips and latest updates.'
}
