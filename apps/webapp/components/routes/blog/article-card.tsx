import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { isMobile } from 'react-device-detect'
import { LangProp } from '@/types/routing.type'

export const ArticleCard = ({
  post,
  sectionSlug,
  lang,
  meta = false
}: ArticleCardProps) => {
  const title =
    post.title ||
    post.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return (
    <Card className="p-0 overflow-hidden list-none group md:max-h-space-465">
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex flex-col w-full h-full transition-all"
      >
        <div className="m-3">
          <figure className="relative h-[216px] w-full overflow-hidden rounded-md">
            <Image
              src={post?.thumbnail?.url}
              alt={title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
              {...(isMobile
                ? post.id !== 1
                  ? { loading: 'lazy' }
                  : { priority: true }
                : { priority: true })}
              className="m-0 transition-all ease-in-out rounded-md bg-zoom"
            />
          </figure>
        </div>
        <CardContent>
          <h4 className="pt-1 mb-0 text-center text-white truncate_text truncate_text--4-lines text-sub-2-md lg:block">
            {title}
          </h4>
        </CardContent>
        {meta ? (
          <CardFooter className="flex flex-wrap items-center justify-between text-left md:flex-nowrap">
            <div className="flex-shrink-0">
              <div className="mr-5 h-[45px] w-[45px] overflow-hidden rounded-full">
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
            <div className="flex flex-col flex-grow gap-y-2 md:gap-y-1">
              <span className="font-bold font-futura-pt-heavy text-h-text-c text-h-text dark:text-white">
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
        ) : null}
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
  meta: boolean
}
