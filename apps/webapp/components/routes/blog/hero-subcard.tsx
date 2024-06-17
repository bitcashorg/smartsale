'use client'
import Link from 'next/link'
import { readingTime } from '@/lib/blog'
import { BlogArticleRecord } from '~/services/datocms'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tag } from 'lucide-react'

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
    <li className="list-none" id={post.slug}>
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="md:space-x-space-76 hover:shadow-f1 focus:shadow-f1 hover:border-primary-300 focus:border-primary-300 rounded-cards py-space-20 px-space-15 flex flex-col justify-between space-y-3 border-2 border-black transition-all hover:border-2 focus:border-2 dark:border-white md:flex-row md:space-y-0"
        onClick={event =>
          (event.target as HTMLElement).tagName === 'BUTTON' &&
          event.preventDefault()
        }
      >
        <div className="space-y-space-6 flex flex-col items-start justify-start">
          <span className="text-h-text font-futura-pt-heavy text-h-text-c font-bold dark:text-white">
            {post.authorName}
          </span>
          <span className="text-h-text font-futura-pt-book text-h-text-c dark:text-white">
            {new Date(post?._publishedAt).toLocaleDateString(locale, {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })}{' '}
            ∙ {readingTime(post)} min read{' '}
          </span>
          {/* <Tag
            className="mt-space-6"
            title={selectedTopic ? selectedTopic : sectionSlug}
            onClick={() =>
              router.push(
                selectedTopic
                  ? `/blog/${sectionSlug}?topic=${selectedTopic}#${selectedTopic}`
                  : `/blog/${sectionSlug}`
              )
            }
          /> */}
        </div>
        <div className="space-y-space-10 flex max-w-[366px] flex-col items-start justify-start">
          <h1
            title={post?.title}
            className="text-sub-2-lg font-futura-pt-bold truncate_text truncate_text--3-lines font-bold text-black dark:text-white"
          >
            {post?.title}
          </h1>
          <p className="text-h-text font-futura-pt-book text-h-text-c truncate_text md:truncate_text--4-lines truncate_text--5-lines dark:text-white">
            {post?.description}
          </p>
          <Button
            className="text-h-text font-futura-pt-heavy z-10 px-0 font-bold text-black underline dark:text-white"
            onClick={() => router.push(`/blog/${sectionSlug}/${post.slug}`)}
          >
            Learn More
          </Button>
        </div>
      </Link>
    </li>
  )
}
