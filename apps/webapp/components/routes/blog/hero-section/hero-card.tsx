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
    <div className="list-none md:w-1/2">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="flex flex-col w-full transition-all rounded-md"
      >
        <figure className="relative w-full overflow-hidden rounded-md h-space-400">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            {...(isMobile
              ? post.id !== 1
                ? { loading: 'lazy' }
                : { priority: true }
              : { priority: true })}
            className="object-cover transition-all ease-in rounded-md bg-zoom"
            fill
          />
        </figure>

        <div className="flex flex-row mt-space-20 justify-stretch">
          {/* <p className="text-xl">
            <span className="font-semibold sub-2-lg">/Recents:</span>
          </p> */}
          {/* Meta */}
          <div className="p-5 min-w-40">
            <div className="flex flex-col w-auto mt-space-10 space-y-space-6">
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
          <div className="flex flex-col w-full mt-space-10 space-y-space-10">
            <h1
              title={post?.title}
              className="truncate_text truncate_text--5-lines font-bolt heading2"
            >
              {post?.title}
            </h1>
            <p className="flex-grow w-full truncate_text md:truncate_text--4-lines truncate_text--5-lines text-sub-2-lt">
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
