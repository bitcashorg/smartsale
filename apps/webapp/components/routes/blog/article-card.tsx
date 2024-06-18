'use client'
import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { isMobile } from 'react-device-detect'
import { LangProp } from '@/types/routing.type'
import { useEffect, useState } from 'react'

export const ArticleCard = ({ post, sectionSlug, lang }: ArticleCardProps) => {
  const [imageLoading, setImageLoading] = useState<'lazy' | 'eager'>('eager')

  useEffect(() => {
    if (isMobile) {
      setImageLoading(post.id !== 1 ? 'lazy' : 'eager')
    }
  }, [post.id])

  return (
    <Card className="group min-h-space-465 list-none overflow-hidden md:max-h-space-465">
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex h-full w-full flex-col transition-all lg:p-space-20 lg:hover:border-primary-300 lg:hover:shadow-f1 lg:focus:border-primary-300 lg:focus:shadow-f1"
      >
        <figure className="relative h-[216px] w-full overflow-hidden rounded-images">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
            priority={imageLoading === 'eager'}
            loading={imageLoading}
            className="bg-zoom transition-all ease-in-out"
            fill
          />
        </figure>

        <CardContent className="mt-5">
          <h1
            title={post?.title}
            className="font-futura-pt-bold truncate_text md:truncate_text--4-lines truncate_text--5-lines font-bold text-black dark:text-white lg:block"
          >
            {post.title}
          </h1>
        </CardContent>

        <CardFooter className="mt-auto">
          <div>
            <div className="mr-5 h-[45px] w-[45px] rounded-full">
              <Image
                src={post.authorPicture.url}
                width={45}
                height={45}
                alt={post.authorName}
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="p-y-1 flex flex-col gap-y-space-4">
            <span className="font-futura-pt-heavy text-h-text-c text-h-text font-bold dark:text-white">
              {post.authorName}
            </span>
            <span className="font-futura-pt-book text-h-text-c text-h-text dark:text-white">
              {new Date(post._publishedAt).toLocaleDateString(lang, {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}{' '}
              ∙ {readingTime(post)} min read
            </span>
          </div>
        </CardFooter>

        {/* <div className="order-4 block mt-space-10 lg:hidden">
          <span className="font-futural-pt-book text-p-text truncate_text md:truncate_text--4-lines truncate_text--5-lines text-neutral-700 dark:text-white">
            {post.description}
          </span>
        </div> */}
      </Link>
    </Card>
  )
}

export interface ArticleCardProps extends LangProp {
  post: BlogArticleRecord
  sectionSlug: string
}
