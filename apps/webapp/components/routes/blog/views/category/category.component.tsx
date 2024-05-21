'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BlogArticleRecord } from '@/services/datocms'

import { cn } from '@/lib/utils.lib'
import { buttonVariants } from '@/components/routes/blog/base'
import { AppSubscription } from '@/components/routes/blog/modules'
import {
  HeroCard,
  HeroSubCard,
  PostCard
} from '@/components/routes/blog/molecules'
import { LucideIcons } from '@/components/icons/blog'

import { BlogCategoryPageProps } from './category.types'

export function CategoryComponent({
  i18n,
  params,
  sectionsContents,
  recentBlogs,
  pageSeo
}: BlogCategoryPageProps) {
  const singlePost = recentBlogs[0]
  const subHeroPosts =
    recentBlogs.length > 1
      ? recentBlogs.slice(1, recentBlogs.length)
      : recentBlogs
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
    <section className="flex w-full flex-col items-center justify-start py-10">
      <div className="container flex flex-col items-start gap-2 px-10">
        <h1 className="text-sub-1-lg md:text-h1-lg lg:text-h1-lg font-extrabold capitalize tracking-tighter">
          {pageSeo?.title}
        </h1>
        {!topic ? (
          <p className="text-sub-2-md md:text-sub-1-lg mt-2 text-neutral-700 dark:text-neutral-400 md:mt-5">
            {pageSeo?.description}
          </p>
        ) : (
          <hr className="mx-auto mt-10 h-0.5 w-full bg-gray-100 dark:bg-gray-800" />
        )}
      </div>

      {!topic ? (
        <>
          <section className="container mt-10 flex w-full flex-col gap-5 lg:flex-row">
            <HeroCard
              sectionSlug={category}
              post={singlePost?.content[0]}
              selectedTopic={singlePost?.content[0].topics[0]}
            />
            <ul className="flex flex-col space-y-5">
              {subHeroPosts?.map(
                (post, index) =>
                  post != null &&
                  post.content.length > 0 && (
                    <HeroSubCard
                      sectionSlug={category}
                      post={post.content[0]}
                      key={index}
                      selectedTopic={post.topic}
                    />
                  )
              )}
            </ul>
          </section>

          <hr className="container mx-auto mt-10 h-0.5 w-[calc(100%-64px)] bg-gray-100 dark:bg-gray-800" />
        </>
      ) : null}

      {/* articels  by category */}
      <div id="allArticles" />
      {(filteredSectionContent || sectionsContents)?.map((section, index) => {
        const contents = topic ? section?.content : section?.content.slice(0, 4)
        //  console.log("contents::", contents)
        return (
          contents.length > 0 && (
            <>
              <section
                className="mt-space-80 container"
                key={index}
                id={section.topic}
              >
                <div className="mb-space-32 flex items-center justify-between">
                  <span className="sub-2-lg font-semibold capitalize text-black dark:text-white">
                    /{section.topic}
                  </span>
                  <Link
                    href={
                      filteredSectionContent
                        ? `/blog/${category}`
                        : `/blog/${category}?topic=${section.topic}`
                    }
                    className={cn(
                      buttonVariants({ variant: 'tertiary' }),
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
              {/* // TODO: fix this. this will open all the content on all sections. it should be per section */}
              {/* <div className="flex justify-center w-full mt-5 md:hidden">
                <Button variant="primary" size="lg" className="w-32" onClick={handleReadMore}>
                  {showAllContent ? 'Read Less' : 'Read More'}
                </Button>
              </div> */}
            </>
          )
        )
      })}

      <section className="mt-space-130 container my-10">
        <AppSubscription {...i18n} />
      </section>
    </section>
  )
}
