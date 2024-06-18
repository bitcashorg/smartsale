'use client'
import Link from 'next/link'
import { readingTime } from '@/lib/blog'
import { BlogArticleRecord } from '~/services/datocms'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'

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
    <li className="text-black bg-white rounded-cards" id={post.slug}>
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex flex-col justify-between space-y-3 transition-all border-2 border-black rounded-cards px-space-15 py-space-20 hover:border-2 hover:border-primary-300 hover:shadow-f1 focus:border-2 focus:border-primary-300 focus:shadow-f1 dark:border-white md:flex-row md:space-y-0"
        onClick={event =>
          (event.target as HTMLElement).tagName === 'BUTTON' &&
          event.preventDefault()
        }
      >
        <div className="flex flex-col items-start justify-start space-y-space-6">
          <span className="font-bold font-futura-pt-heavy text-h-text-c text-h-text dark:text-white">
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
            className="font-bold text-black font-futura-pt-bold truncate_text truncate_text--3-lines text-sub-2-lg dark:text-white"
          >
            {post?.title}
          </h1>
          <p className="font-futura-pt-book text-h-text-c truncate_text md:truncate_text--4-lines truncate_text--5-lines text-h-text dark:text-white">
            {post?.description}
          </p>
          <Button
            // variant="tertiary"
            className="z-10 px-0 font-bold text-black underline font-futura-pt-heavy text-h-text dark:text-white"
            onClick={() => router.push(`/blog/${sectionSlug}/${post.slug}`)}
          >
            Learn More
          </Button>
        </div>
      </Link>
    </li>
  )
}
