'use client'
import Link from 'next/link'
import { readingTime } from '@/lib/blog'
import { BlogArticleRecord } from '~/services/datocms'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
import { Card } from '@/components/ui/card'

export interface Subcardprops {
  post: BlogArticleRecord
  sectionSlug: string
  selectedTopic: string | null
}
export const HeroSubCard = ({
  post,
  sectionSlug,
  selectedTopic
}: Subcardprops) => {
  const router = useRouter()
  const { locale } = useParams()

  return (
    <Card
      className="md:min-h-space-200 group cursor-pointer list-none overflow-hidden border-muted bg-transparent p-0"
      id={post.slug}
    >
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex flex-col justify-between space-y-3 px-space-15 py-space-20 transition-all md:flex-row md:space-y-0"
        onClick={event =>
          (event.target as HTMLElement).tagName === 'BUTTON' &&
          event.preventDefault()
        }
      >
        <div className="flex flex-col items-start justify-start space-y-space-6">
          <span className="font-futura-pt-heavy text-h-text-c text-h-text font-bold dark:text-white">
            {post.authorName}
          </span>
          <span className="font-futura-pt-book text-h-text-c text-h-text dark:text-white">
            {new Date(post?._publishedAt).toLocaleDateString(locale, {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })}{' '}
            ∙ {readingTime(post)} min read{' '}
          </span>
          <Tag
            className="mt-space-6"
            title={selectedTopic ? selectedTopic : sectionSlug}
            onClick={() =>
              router.push(
                selectedTopic
                  ? `/blog/${sectionSlug}?topic=${selectedTopic}#${selectedTopic}`
                  : `/blog/${sectionSlug}`
              )
            }
          />
        </div>
        <div className="flex max-w-[366px] flex-col items-start justify-start space-y-space-10">
          <h1
            title={post?.title}
            className="font-futura-pt-bold truncate_text truncate_text--3-lines text-sub-2-lg font-bold text-black dark:text-white"
          >
            {post?.title}
          </h1>
          <p className="font-futura-pt-book text-h-text-c truncate_text md:truncate_text--4-lines truncate_text--5-lines text-h-text dark:text-white">
            {post?.description}
          </p>
        </div>
      </Link>
    </Card>
  )
}
