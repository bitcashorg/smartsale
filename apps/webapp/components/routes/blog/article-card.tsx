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
  return (
    <Card className="overflow-hidden list-none group md:max-h-space-465">
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex flex-col w-full h-full transition-all lg:p-space-20 lg:hover:border-primary-300 lg:hover:shadow-f1 lg:focus:border-primary-300 lg:focus:shadow-f1"
      >
        <figure className="relative h-[216px] w-full">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
            {...(isMobile
              ? post.id !== 1
                ? { loading: 'lazy' }
                : { priority: true }
              : { priority: true })}
            className="transition-all ease-in-out bg-zoom"
            fill
          />
        </figure>

        <CardContent className="p-0 my-10">
          <h4
            title={post?.title}
            className="mb-0 text-center text-white truncate_text truncate_text--4-lines text-sub-2-md lg:block"
          >
            {post.title}
          </h4>
        </CardContent>

        {meta ? (
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
            <div className="flex flex-col gap-y-space-4">
              <span className="font-bold font-futura-pt-heavy text-h-text-c text-h-text dark:text-white">
                {post.authorName}
              </span>
              <span className="font-futura-pt-book text-h-text-c text-h-text dark:text-white">
                {
                  // TODO: use lang from props
                  new Date(post._publishedAt).toLocaleDateString('en', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                  })
                }{' '}
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
