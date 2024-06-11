import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { isMobile } from 'react-device-detect'
import { LangProp } from '@/types/routing.type'

export const ArticleCard = ({ post, sectionSlug, lang }: ArticleCardProps) => {
  return (
    <Card className="min-h-space-465 md:max-h-space-465 group list-none overflow-hidden">
      <Link
        href={`${lang}/blog/${sectionSlug}/${post.slug}`}
        className="lg:hover:shadow-f1 lg:focus:shadow-f1 lg:hover:border-primary-300 lg:focus:border-primary-300 lg:p-space-20 flex h-full w-full flex-col transition-all"
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
            className="bg-zoom transition-all ease-in-out"
            fill
          />
        </figure>

        <CardContent className="mt-5">
          <h1
            title={post?.title}
            className="font-futura-pt-bold text-sub-2-md truncate_text truncate_text--4-lines hidden font-bold text-black dark:text-white lg:block"
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
          <div className="gap-y-space-4 flex flex-col">
            <span className="text-h-text font-futura-pt-heavy text-h-text-c font-bold dark:text-white">
              {post.authorName}
            </span>
            <span className="text-h-text font-futura-pt-book text-h-text-c dark:text-white">
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
