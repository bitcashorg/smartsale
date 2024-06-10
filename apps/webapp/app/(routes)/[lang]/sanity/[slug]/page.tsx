import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import { Page } from '@/components/sanity/pages/page/Page'
import { generateStaticSlugs } from '@/services/sanity/loader/generateStaticSlugs'
import { loadArticle } from '@/services/sanity/loader/loadQuery'
import { CommonPageProps } from '@/types/routing.type'
const PagePreview = dynamic(
  () => import('@/components/sanity/pages/page/PagePreview')
)

type Props = {
  params: { slug: string }
} & CommonPageProps

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: article } = await loadArticle(params.slug, params.lang)

  console.log('====================  article  ==========================')
  console.log(JSON.stringify(article))

  return {
    title: article?.title,
    description: article?.overview
      ? toPlainText(article.overview)
      : (await parent).description
  }
}

// export function generateStaticParams() {
//   return generateStaticSlugs('page')
// }

export default async function PageSlugRoute({ params }: Props) {
  const initial = await loadArticle(params.slug, params.lang)

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <Page data={initial.data} />
}
