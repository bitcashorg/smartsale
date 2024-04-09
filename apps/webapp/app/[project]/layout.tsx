import '@/app/globals.css'
import { LayoutContainer } from '@/components/layout-container'
import { ProjectHeader } from '@/components/pages/auction/project-header'
import { Providers } from '@/components/providers'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@rainbow-me/rainbowkit/styles.css'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'bitlauncher',
  description: 'Invest in the intelligent future and join the Ai/Web3 revolution now!',
  metadataBase: new URL('https://bitlauncher.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://bitlauncher.ai',
    title: 'bitlauncher',
    description: 'Invest in the intelligent future and join the Ai/Web3 revolution now!',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.jpeg',
        alt: 'bitlauncher'
      }
    ]
  },
  twitter: {
    creator: 'bitlauncher',
    site: '@bitlauncher',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.jpeg',
        alt: 'bitlauncher'
      }
    ]
  },
  robots: 'index, search',
  keywords: ['bitlauncher', 'smartsale', 'ai', 'web3', 'crypto', 'investment', 'auction', 'marketplace', 'platform', 'launchpad', 'launch', 'pad', 'launching', 'launching']
}

export default function ProjectLayout({ children, params, ...props }: ProjectLayoutProps) {
  const project = projects.find(p => p.slug == params.project)
  if (!project) redirect('/')

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased open-sans',
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutContainer
            projectHeader={<ProjectHeader projectData={project} />}
          >
            {children}
          </LayoutContainer>
        </Providers>
        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
      </body>
    </html >
  )
}
interface ProjectLayoutProps {
  children: React.ReactNode
  params: { project: string }
}
