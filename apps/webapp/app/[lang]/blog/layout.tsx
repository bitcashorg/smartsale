import { Metadata } from 'next'

import React from 'react'

export default function BlogLayout({ children }: RootLayoutProps) {
  return <div className='container'>  {children}</div>

}

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: `%s - Blog`
  },
  description: 'Ai and Web3 articles, community with tips and latest updates.'
}
