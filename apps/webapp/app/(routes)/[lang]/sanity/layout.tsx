import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { toPlainText } from 'next-sanity'
import { Suspense } from 'react'

import { Footer } from '@/components/sanity/global/Footer'
import { Navbar } from '@/components/sanity/global/Navbar'
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
      <div className="flex flex-col min-h-screen text-black bg-white">
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="flex-grow px-4 mt-20 md:px-16 lg:px-32">
          <Suspense>{children}</Suspense>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
