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
import { ArticleCard } from './article-card'
import { cn } from '@/lib/utils'
import { LucideIcons } from './lucide-icons'

export function CategoryComponent({ params, sections }: BlogCategoryPageProps) {
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
  sections.sort((a, b) => a.topic.localeCompare(b.topic))

  const filterSectionContent = () => {
    const getContents = sections.filter(content => content.topic === topic)

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
  }, [topic, sections.length])

  return (
    <div className="flex w-full flex-col items-center justify-start py-10">
      {(filteredSectionContent || sections)?.map((section, index) => {
        const contents = topic ? section?.content : section?.content.slice(0, 4)
        //  console.log("contents::", contents)
        return (
          contents.length > 0 && (
            <section
              className="mt-space-80 container"
              key={index}
              id={section.topic}
            >
              <div className="mb-space-32 flex items-center justify-between">
                <span className="sub-2-lg font-semibold capitalize text-black dark:text-white">
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
                  <ArticleCard post={post} sectionSlug={category} key={index} />
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
  sections: {
    topic: string
    content: getBlogCategoriesTypes['allBlogBitcoins']
  }[]
  recentBlogs: {
    topic: string
    content: getBlogCategoriesTypes['allBlogBitcoins']
  }[]
  pageSeo: CMSPageSeoText
}
