import { LayoutContainer } from '@/components/layout/layout-container'
import { ProjectHeader } from '@/components/pages/auction/project-header'
import { projects } from '@/lib/projects'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'bitcash | bitlauncher',
  description:
    'Invest in the intelligent future and join the Ai/Web3 revolution now!'
}

export default function ProjectLayout({
  children,
  params,
  ...props
}: RootLayoutProps) {
  const project = projects.find(p => p.slug === params.project)

  return (
    <LayoutContainer
      projectHeader={
        project ? (
          <Suspense
            fallback={
              <section className="relative min-h-[calc(83vh-4rem)] w-screen bg-black/40 py-40" />
            }
          >
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
