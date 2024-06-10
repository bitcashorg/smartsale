import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { toPlainText } from 'next-sanity'
import { Suspense } from 'react'

import { urlForOpenGraphImage } from '@/services/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/services/sanity/loader/loadQuery'

const LiveVisualEditing = dynamic(
  () => import('@/services/sanity/loader/LiveVisualEditing')
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage()
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website'
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : []
    }
  }
}

export const viewport: Viewport = {
  themeColor: '#000'
}

export default async function IndexRoute({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="flex flex-col min-h-screen mx-auto content-container">
        <Suspense fallback={<main>Loading...</main>}>{children}</Suspense>
      </main>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
