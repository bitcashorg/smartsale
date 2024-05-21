import Link from "next/link";
import { readingTime } from "~/lib/utils.lib";
import { BlogArticleRecord } from "~/services/datocms";
import { Button, Tag } from "../base";
import { useParams, useRouter } from "next/navigation";

export interface Subcardprops {
  post: BlogArticleRecord,
  sectionSlug: string,
  selectedTopic: string | null
}
export const HeroSubCard = ({ post, sectionSlug, selectedTopic }: Subcardprops) => {
  const router = useRouter()
  const { locale } = useParams()

  return (
    <li className="list-none" id={post.slug}>
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="transition-all flex md:flex-row flex-col md:space-y-0 space-y-3 justify-between md:space-x-space-76 border-2 border-black dark:border-white hover:shadow-f1 focus:shadow-f1 hover:border-2 focus:border-2 hover:border-primary-300   focus:border-primary-300  rounded-cards  py-space-20 px-space-15"
        onClick={event => (event.target as HTMLElement).tagName === 'BUTTON' && event.preventDefault()}
      >
        <div className="flex flex-col space-y-space-6 justify-start items-start">
          <span className="text-h-text font-futura-pt-heavy font-bold text-h-text-c dark:text-white">
            {post.authorName}
          </span>
          <span className="text-h-text font-futura-pt-book text-h-text-c dark:text-white">
            {new Date(post?._publishedAt).toLocaleDateString(locale, { month: 'short', day: '2-digit', year: 'numeric' })} ∙ {readingTime(post)} min read{' '}
          </span>
          <Tag
            className="mt-space-6"
            title={selectedTopic ? selectedTopic : sectionSlug}
            onClick={() =>
              router.push(
                selectedTopic
                  ? `/blog/${sectionSlug}?topic=${selectedTopic}#${selectedTopic}`
                  : `/blog/${sectionSlug}`
              )
            }
          />
        </div>
        <div className="flex flex-col space-y-space-10  justify-start items-start max-w-[366px]">
          <h1 title={post?.title} className="text-sub-2-lg  font-futura-pt-bold font-bold text-black dark:text-white  truncate_text  truncate_text--3-lines">{post?.title}</h1>
          <p className="text-h-text font-futura-pt-book  text-h-text-c dark:text-white truncate_text md:truncate_text--4-lines truncate_text--5-lines ">{post?.description}</p>
          <Button
            variant="tertiary"
            className="underline text-h-text font-futura-pt-heavy px-0 font-bold text-black dark:text-white z-10"
            onClick={() => router.push(`/blog/${sectionSlug}/${post.slug}`)}
          >
            Learn More
          </Button>
        </div>
      </Link>
    </li>
  )
}
