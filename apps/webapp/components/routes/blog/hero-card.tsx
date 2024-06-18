'use client'
import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { isMobile } from 'react-device-detect'
import { LazyImage } from './lazy-image'
import { useParams } from 'next/navigation'
import { Tag } from '@/components/ui/tag'

export const HeroArticleCard = ({
  post,
  sectionSlug,
  selectedTopic
}: HeroArticleCardProps) => {
  const { locale } = useParams()

  return (
    <div className="list-none">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="flex w-full flex-col transition-all"
      >
        <figure className="rounded-images h-space-424 relative w-full overflow-hidden">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            {...(isMobile
              ? post.id !== 1
                ? { loading: 'lazy' }
                : { priority: true }
              : { priority: true })}
            className="bg-zoom max-w-space-500 transition-all ease-in-out"
            fill
          />
        </figure>

        <div className="mt-space-20">
          <span className="text-sub-2-lg font-futura-pt-bold text-h-text-c font-bold dark:text-white">
            /Recents:
          </span>
          <div className="space-y-space-6 mt-space-10 flex w-auto flex-col">
            <span className="text-h-text font-futura-pt-heavy text-h-text-c font-bold dark:text-white">
              {post?.authorName}
            </span>
            <span className="text-h-text font-futura-pt-book text-h-text-c dark:text-white">
              {new Date(post?._publishedAt).toLocaleDateString(locale, {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}{' '}
              ∙ {readingTime(post)} min read{' '}
            </span>
          </div>
          <Link
            href={
              selectedTopic
                ? `/blog/${sectionSlug}?topic=${selectedTopic}#${selectedTopic}`
                : `/blog/${sectionSlug}`
            }
          >
            <Tag
              className="mt-space-6"
              title={selectedTopic ? selectedTopic : sectionSlug}
            />
          </Link>
        </div>
        <div className="space-y-space-10 mt-space-10 flex w-full flex-col md:w-[32.5rem]">
          <h1
            title={post?.title}
            className="font-futura-pt-medium md:text-sub-1-md truncate_text truncate_text--5-lines font-bold dark:text-white"
          >
            {post?.title}
          </h1>
          <p className="text-sub-2-lg truncate_text md:truncate_text--4-lines truncate_text--5-lines dark:text-white">
            {post?.description}
          </p>
        </div>
      </Link>
    </div>
  )
}

export interface HeroArticleCardProps {
  post: BlogArticleRecord
  sectionSlug: string
  selectedTopic: string | null
}
