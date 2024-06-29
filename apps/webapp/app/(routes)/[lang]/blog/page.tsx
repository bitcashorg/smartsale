import { Metadata } from 'next'
import {
  getArticleSections,
  getPageSeoText,
  getRecentArticleSections
} from '@/services/datocms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'
import { BlogHero } from '@/components/routes/blog/blog-hero'
import { notFound } from 'next/navigation'
import { HeroArticleCard } from '@/components/routes/blog/hero-card'
import { HeroSubCard } from '@/components/routes/blog/hero-subcard'
import { Lang } from '@/dictionaries/locales'

export default async function BlogPage({ params }: BlogPageProps) {
  const sections = await getArticleSections(params.lang)
  const recentsArticles = await getRecentArticleSections()
  const singlePost = recentsArticles[0]
  const subHeroPosts =
    recentsArticles.length > 1
      ? recentsArticles.slice(1, recentsArticles.length)
      : recentsArticles
  if (!sections) notFound()

  return (
    <main>
      <h1 className="flex justify-center py-10 heading md:py-24">
        AI, Crypto & Startup Ventures
      </h1>
      {/* <section className="container flex justify-between w-full py-10 lg:flex-row">
        <HeroArticleCard
          sectionSlug={singlePost?.slug}
          post={singlePost?.articles[0]}
          selectedTopic={null}
        />
        <ul className="flex flex-col w-1/2 space-y-10">
          {subHeroPosts?.map(
            (post, index) =>
              post.articles.length > 0 && (
                <HeroSubCard
                  sectionSlug={post?.slug}
                  post={post.articles[0]}
                  key={index}
                  selectedTopic={null}
                />
              )
          )}
        </ul>
      </section> */}
      <BlogSections sections={sections} lang={'en'} />
    </main>
  )
}

export async function generateMetadata({
  params
}: BlogPageProps): Promise<Metadata> {
  const pageSeo = await getPageSeoText('home')
  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

type BlogPageProps = { params: { lang: Lang } }
