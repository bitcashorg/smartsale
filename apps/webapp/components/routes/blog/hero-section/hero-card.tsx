import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import { Tag } from '@/components/shared/tag'
import { LangProp } from '@/types/routing.type'

export const HeroArticleCard = ({
  post,
  sectionSlug,
  lang
}: HeroArticleCardProps) => {
  return (
    <div className="w-full list-none lg:w-1/2">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="w-ful h-full rounded-md bg-red-500"
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
            className="bg-zoom rounded-md object-cover transition-all ease-in"
            fill
          />
        </figure>

        <div className="mt-space-20 flex w-full flex-1 flex-col md:flex-row">
          {/* <p className="text-xl">
            <span className="font-semibold sub-2-lg">/Recents:</span>
          </p> */}
          {/* Meta */}
          <div className="min-w-40 text-sm sm:pr-5">
            <div className="mt-space-10 flex w-auto flex-col">
              <span className="font-futura-pt-heavy font-bolt">
                {post?.authorName}
              </span>
              <span className="font-futura-pt-book">
                {new Date(post?._publishedAt).toLocaleDateString(lang, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })}{' '}
                ∙ {readingTime(post)} min read
              </span>
            </div>
            <Link href={`/blog/${sectionSlug}`}>
              <Tag className="mt-space-6" title={sectionSlug} />
            </Link>
          </div>

          {/* Content */}
          <div className="mt-space-10 flex w-full flex-1 flex-col space-y-space-10">
            <h1
              title={post?.title}
              className="truncate_text truncate_text--5-lines font-bolt heading2"
            >
              {post?.title}
            </h1>
            <p className="truncate_text md:truncate_text--4-lines truncate_text--5-lines text-sub-2-lt w-full flex-grow">
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
}
