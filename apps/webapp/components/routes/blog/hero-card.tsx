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
import { useEffect, useState } from 'react'

export const HeroArticleCard = ({
  post,
  sectionSlug,
  selectedTopic
}: HeroArticleCardProps) => {
  const { locale } = useParams()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const imageLoading =
    isClient && isMobile ? (post.id !== 1 ? 'lazy' : 'eager') : 'eager'

  return (
    <div className="list-none">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="flex w-full flex-col transition-all"
      >
        <figure className="relative h-space-424 w-full overflow-hidden rounded-images">
          {isClient && (
            <Image
              src={post?.thumbnail?.url}
              alt={post.title}
              sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
              priority={imageLoading === 'eager'}
              loading={imageLoading}
              className="bg-zoom max-w-space-500 transition-all ease-in-out"
              fill
            />
          )}
        </figure>

        <div className="mt-space-20">
          <span className="font-futura-pt-bold text-h-text-c text-sub-2-lg font-bold dark:text-white">
            /Recents:
          </span>
          <div className="mt-space-10 flex w-auto flex-col space-y-space-6">
            <span className="font-futura-pt-heavy text-h-text-c text-h-text font-bold dark:text-white">
              {post?.authorName}
            </span>
            <span className="font-futura-pt-book text-h-text-c text-h-text dark:text-white">
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
        <div className="mt-space-10 flex w-full flex-col space-y-space-10 md:w-[32.5rem]">
          <h1
            title={post?.title}
            className="font-futura-pt-medium truncate_text truncate_text--5-lines font-bold dark:text-white md:text-sub-1-md"
          >
            {post?.title}
          </h1>
          <p className="truncate_text md:truncate_text--4-lines truncate_text--5-lines text-sub-2-lg dark:text-white">
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
