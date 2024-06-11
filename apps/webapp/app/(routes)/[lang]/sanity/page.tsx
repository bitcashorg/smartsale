import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/sanity/pages/home/HomePage'
import { studioUrl } from '@/services/sanity/lib/api'
import { loadHomePage } from '@/services/sanity/loader/loadQuery'
const HomePagePreview = dynamic(
  () => import('@/components/sanity/pages/home/HomePagePreview')
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
