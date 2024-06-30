import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import { Tag } from '@/components/ui/tag'
import { LangProp } from '@/types/routing.type'

export const HeroArticleCard = ({
  post,
  sectionSlug,
  selectedTopic,
  lang
}: HeroArticleCardProps) => {
  return (
    <div className="w-1/2 list-none">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="flex w-full flex-col rounded-md transition-all"
      >
        <figure className="relative h-space-400 w-full overflow-hidden rounded-md">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            {...(isMobile
              ? post.id !== 1
                ? { loading: 'lazy' }
                : { priority: true }
              : { priority: true })}
            className="bg-zoom rounded-md transition-all ease-in"
            fill
          />
        </figure>

        <div className="mt-space-20 flex">
          {/* <p className="text-xl">
            <span className="font-semibold sub-2-lg">/Recents:</span>
          </p> */}
          {/* Meta */}
          <div className="min-w-40 p-5">
            <div className="mt-space-10 flex w-auto flex-col space-y-space-6">
              <p className="font-futura-pt-heavy text-h-text-c font-bolt text-h-text">
                {post?.authorName}
              </p>
              <p className="font-futura-pt-book text-h-text-c leading-2 text-h-text">
                {new Date(post?._publishedAt).toLocaleDateString(lang, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })}{' '}
                ∙ {readingTime(post)} min read
              </p>
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

          {/* Content */}
          <div className="mt-space-10 flex w-full flex-col space-y-space-10">
            <h1
              title={post?.title}
              className="truncate_text truncate_text--5-lines font-bolt heading2"
            >
              {post?.title}
            </h1>
            <p className="truncate_text md:truncate_text--4-lines truncate_text--5-lines text-sub-2-lt">
              {post?.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export interface HeroArticleCardProps extends LangProp {
  post: BlogArticleRecord
  sectionSlug: string
  selectedTopic: string | null
}
