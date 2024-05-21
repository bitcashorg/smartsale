'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  BlogArticleRecord,
  CMSLayoutText,
  CMSPageSeoText,
  getBlogCategoriesTypes
} from '@/services/datocms'

import { LucideIcons } from '@/components/icons/blog'
import { PostCard } from './post-card'
import { cn } from '@/lib/utils'

export function CategoryComponent({
  params,
  sectionsContents,
  recentBlogs
}: BlogCategoryPageProps) {
  const [filteredSectionContent, setFilterSectionContent] = useState<
    | {
        topic: string
        content: BlogArticleRecord[]
      }[]
    | null
  >(null)
  // const [showAllContent, setShowAllContent] = useState(false)
  const category = params.category
  const Params = useSearchParams()
  const topic = Params.get('topic')
  // Step 2: Sort alphabetically within each count group
  sectionsContents.sort((a, b) => a.topic.localeCompare(b.topic))

  const filterSectionContent = () => {
    const getContents = sectionsContents.filter(
      content => content.topic === topic
    )

    setFilterSectionContent(getContents)
  }

  const resetFilterSectionContent = () => {
    setFilterSectionContent(null)
  }

  useEffect(() => {
    if (topic) {
      filterSectionContent()
    } else {
      resetFilterSectionContent()
    }

    scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, sectionsContents.length])

  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      {(filteredSectionContent || sectionsContents)?.map((section, index) => {
        const contents = topic ? section?.content : section?.content.slice(0, 4)
        //  console.log("contents::", contents)
        return (
          contents.length > 0 && (
            <section
              className="container mt-space-80"
              key={index}
              id={section.topic}
            >
              <div className="flex items-center justify-between mb-space-32">
                <span className="font-semibold text-black capitalize sub-2-lg dark:text-white">
                  {section.topic}
                </span>
                <Link
                  href={
                    filteredSectionContent
                      ? `/blog/${category}`
                      : `/blog/${category}?topic=${section.topic}`
                  }
                  className={cn(
                    'focus-within:!text-primary-200 hover:!text-primary-200 text-black dark:text-white '
                  )}
                  shallow
                >
                  <b>
                    {filteredSectionContent ? 'Return to all' : 'Go to topic'}
                  </b>
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {contents.map((post, index) => (
                  <PostCard post={post} sectionSlug={category} key={index} />
                ))}
              </ul>
            </section>
          )
        )
      })}
    </div>
  )
}

export interface BlogCategoryPageProps {
  i18n: CMSLayoutText
  params: {
    category: string
    locale: string
  }
  // searchParams: {},
  topics: string[]
  sectionsContents: {
    topic: string
    content: getBlogCategoriesTypes['allBlogBitcoins']
  }[]
  recentBlogs: {
    topic: string
    content: getBlogCategoriesTypes['allBlogBitcoins']
  }[]
  pageSeo: CMSPageSeoText
}
