import { LayoutContainer } from '@/components/layout-container'
import { ProjectHeader } from '@/components/pages/auction/project-header'
import { projects } from '@/lib/projects'
import React, { Suspense } from 'react'

export const metadata: MetadataCallback = (_metadata) => {
  return {
    title: 'project | bitlauncher',
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
}

export default function ProjectLayout({ children, params, ...props }: RootLayoutProps) {
  const project = projects.find(p => p.slug === params.project)

  return (
    <LayoutContainer
      projectHeader={project ? (
        <Suspense fallback={<section className="relative bg-black/40 w-screen py-40 min-h-[calc(83vh-4rem)]" />}>
          <ProjectHeader projectData={project} />
        </Suspense>
      ) : null
      }
    >
      {children}
    </LayoutContainer>
  )
}
interface RootLayoutProps {
  children: React.ReactNode
  params: { project: string }
}
