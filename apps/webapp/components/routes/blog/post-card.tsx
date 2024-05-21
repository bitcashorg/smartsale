import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '~/services/datocms'
import Image from 'next/image'

export const PostCard = ({ post, sectionSlug }: PostCardProps) => {
  return (
    <li className="list-none min-h-space-465 md:max-h-space-465 group">
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="lg:hover:shadow-f1 lg:focus:shadow-f1 lg:hover:border-primary-300 lg:focus:border-primary-300 lg:p-space-20 flex h-full w-full flex-col transition-all lg:max-w-[300px]  lg:border  lg:border-[#040316]  dark:lg:border-[#f5f5f5]"
      >
        <div className="lg:h-space-198 relative order-1 flex h-[200px]  overflow-hidden border lg:border-0">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
            loading="lazy"
            className="transition-all ease-in-out bg-zoom"
            fill
          />
        </div>
        <div className="order-2 mt-space-25">
          <h1
            title={post?.title}
            className="hidden font-bold text-black font-futura-pt-bold text-sub-2-md truncate_text truncate_text--4-lines dark:text-white lg:block "
          >
            {post.title}
          </h1>
          <h1
            title={post?.title}
            className="block font-bold text-black font-futura-pt-bold text-sub-2-md dark:text-white lg:hidden"
          >
            {post.title}
          </h1>
        </div>

        <div className="flex order-2 space-x-space-15 mt-space-20 lg:mt-auto">
          <div>
            <div className="rounded-full h-14 w-14">
              <Image
                src={post.authorPicture.url}
                width={57}
                height={57}
                alt={post.authorName}
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-space-4">
            <span className="font-bold text-h-text font-futura-pt-heavy text-h-text-c dark:text-white">
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
        </div>

        <div className="order-4 block mt-space-10 lg:hidden">
          <span className="font-futural-pt-book text-p-text truncate_text md:truncate_text--4-lines truncate_text--5-lines text-neutral-700 dark:text-white">
            {post.description}
          </span>
        </div>
      </Link>
    </li>
  )
}

export interface PostCardProps {
  post: BlogArticleRecord
  sectionSlug: string
}
