import { LazyImage, Tag } from "../base"
import Link from "next/link"

import { Subcardprops } from "./hero-sub-card.component"
import { useParams } from "next/navigation"
import { readingTime } from "@/lib/utils.lib"


export const HeroCard = ({ post, sectionSlug, selectedTopic }: Subcardprops) => {
  const { locale } = useParams()

  return (
    <div className="list-none">
      <Link href={`/blog/${sectionSlug}/${post?.slug}`} className="transition-all rounded-images flex flex-col w-full  lg:p-space-20">
        <LazyImage
          src={post?.thumbnail?.url}
          alt={post?.title}
          loading="lazy"
          className="bg-zoom w-full h-full"
          imgWrapperClassName="w-full max-w-space-400 h-space-424 border border-black rounded-images  overflow-hidden"
          fill
        />
        <div className="mt-space-20 ">
          <span className="text-sub-2-lg font-futura-pt-bold font-bold  text-h-text-c  dark:text-white ">/Recents:</span>
          <div className="flex flex-col  w-auto  space-y-space-6 mt-space-10 ">
            <span className="text-h-text font-futura-pt-heavy font-bold  text-h-text-c dark:text-white">{post?.authorName}</span>
            <span className="text-h-text font-futura-pt-book  text-h-text-c  dark:text-white">
              {new Date(post?._publishedAt).toLocaleDateString(locale, { month: 'short', day: '2-digit', year: 'numeric' })} ∙ {readingTime(post)} min read{' '}
            </span>
          </div>
          <Link href={
            selectedTopic
              ? `/blog/${sectionSlug}?topic=${selectedTopic}#${selectedTopic}`
              : `/blog/${sectionSlug}`
          }>
            <Tag className="mt-space-6" title={selectedTopic ? selectedTopic : sectionSlug} />
          </Link>
        </div>
        <div className="flex flex-col space-y-space-10  mt-space-10 md:w-[32.5rem]  w-full">
          <h1 title={post?.title} className="font-futura-pt-medium font-bold md:text-h3-lg  text-h3-md dark:text-white  truncate_text truncate_text--5-lines "> {post?.title}</h1>
          <p className="text-sub-2-lg  text-black dark:text-white truncate_text md:truncate_text--4-lines truncate_text--5-lines">{post?.description}</p>
        </div>
      </Link>
    </div>
  )
}