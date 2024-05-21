import { LazyImage } from '@/components/routes/blog/base'
import { readingTime } from '@/lib/utils.lib'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

import { BlogArticleRecord } from '~/services/datocms'

export interface PostCardProps {
  post: BlogArticleRecord
  sectionSlug: string
}
export const PostCard = ({ post, sectionSlug }: PostCardProps) => {
  const { locale } = useParams()

  return (
    <li className="min-h-space-465 md:max-h-space-465 group list-none">
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="rounded-images lg:hover:shadow-f1 lg:focus:shadow-f1 lg:hover:border-primary-300 lg:focus:border-primary-300 lg:p-space-20 flex h-full w-full flex-col transition-all lg:max-w-[300px]  lg:border  lg:border-[#040316]  dark:lg:border-[#f5f5f5]"
      >
        <LazyImage
          src={post?.thumbnail?.url}
          alt={post.title}
          sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
          loading="lazy"
          className="bg-zoom rounded-images h-full w-full transition-all ease-in-out"
          imgWrapperClassName="overflow-hidden order-1 lg:h-space-198 h-[203px] lg:border-0 border rounded-images"
          fill
        />
        <div className="mt-space-25 order-2">
          <h1
            title={post?.title}
            className="font-futura-pt-bold text-sub-2-md  truncate_text truncate_text--4-lines hidden font-bold text-black dark:text-white lg:block "
          >
            {post.title}
          </h1>
          <h1
            title={post?.title}
            className="font-futura-pt-bold text-sub-2-md  block font-bold text-black dark:text-white lg:hidden"
          >
            {post.title}
          </h1>
        </div>

        <div className="space-x-space-15 mt-space-20 order-2 flex lg:mt-auto">
          <div>
            <LazyImage
              src={post.authorPicture.url}
              width={57}
              height={57}
              alt={post.authorName}
              className="rounded-full"
              loading="lazy"
              imgWrapperClassName="w-14 h-14 rounded-full"
            />
          </div>
          <div className="gap-y-space-4 flex flex-col">
            <span className="text-h-text font-futura-pt-heavy text-h-text-c  font-bold dark:text-white">
              {post.authorName}
            </span>
            <span className="text-h-text font-futura-pt-book  text-h-text-c  dark:text-white">
              {new Date(post._publishedAt).toLocaleDateString(locale, {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}{' '}
              ∙ {readingTime(post)} min read
            </span>
          </div>
        </div>

        <div className="mt-space-10 order-4  block lg:hidden">
          <span className="font-futural-pt-book text-p-text  truncate_text md:truncate_text--4-lines truncate_text--5-lines text-neutral-700 dark:text-white">
            {post.description}
          </span>
        </div>
      </Link>
    </li>
  )
}
