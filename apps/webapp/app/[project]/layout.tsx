import '@/app/globals.css'
import { LayoutContainer } from '@/components/layout-container'
import { Providers } from '@/components/providers'
import { Project, projects } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@rainbow-me/rainbowkit/styles.css'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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

function ProjectHeader({ projectData }: { projectData: Project }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {projectData.title}
            </h1>

            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {projectData.registrationOpen
                ? 'Register to participate in the auction!'
                : projectData.auctionClosed
                  ? 'Auction is closed. You can now claim your tokens.'
                  : 'Join the auction and be a part of our project. The countdown has begun!'}
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={`${projectData.slug}/auction`}
            >
              {projectData.registrationOpen
                ? 'Register Now!'
                : projectData.auctionClosed
                  ? 'Claims your Tokens'
                  : 'Participate Now'}
            </Link>
          </div>
          <Image
            alt="Project Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src={projectData.heroImage}
            width="550"
          />
        </div>
      </div>
    </section>
  )
}

interface ProjectLayoutProps {
  children: React.ReactNode
  params: { project: string }
}
