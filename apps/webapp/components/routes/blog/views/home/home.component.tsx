'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { buttonVariants } from '@/components/routes/blog/base'
import { AppSubscription } from '@/components/routes/blog/modules'
import {
  HeroCard,
  HeroSubCard,
  PostCard
} from '@/components/routes/blog/molecules'
import { HomeProps } from '@/components/routes/blog/views/home/home.types'
import { LucideIcons } from '@/components/icons/blog'
import { cn } from '@/lib/utils.lib'

export function HomeComponent({
  i18n,
  sectionArticles,
  recentsArticles,
  pageSeo
}: HomeProps) {
  const singlePost = recentsArticles[0]
  const subHeroPosts =
    recentsArticles.length > 1
      ? recentsArticles.slice(1, recentsArticles.length)
      : recentsArticles
  const [getSectionArticles, setSectionArticles] = useState(sectionArticles)
  const { lang } = useParams()
  const locale = lang ? lang : 'en'

  function handleReadMore() {
    setSectionArticles(sectionArticles)
  }

  return (
    <section className="flex w-full flex-col items-center justify-start py-10">
      <div className="container flex flex-col items-start gap-2 px-10">
        <h1 className="text-sub-1-lg md:text-h1-lg  lg:text-h1-lg  font-extrabold tracking-tighter">
          {pageSeo?.title}
        </h1>
        <p className="text-sub-2-md md:text-sub-1-lg mt-2 text-neutral-700 dark:text-neutral-400 md:mt-5">
          {pageSeo?.description}
        </p>
      </div>

      <section className="container mt-10 flex w-full flex-col  gap-5 lg:flex-row">
        <HeroCard
          sectionSlug={singlePost?.slug}
          post={singlePost?.articles[0]}
          selectedTopic={null}
        />
        <ul className="flex flex-col space-y-20">
          {subHeroPosts?.map(
            (post, index) =>
              post.articles.length > 0 && (
                <HeroSubCard
                  sectionSlug={post?.slug}
                  post={post.articles[0]}
                  key={index}
                  selectedTopic={null}
                />
              )
          )}
        </ul>
      </section>

      <hr className="container mx-auto mt-10 h-0.5 w-[calc(100%-64px)] bg-gray-100 dark:bg-gray-800" />

      {/* articels  by category */}
      <div id="allArticles" />
      {getSectionArticles?.map(
        section =>
          section?.articles?.length > 0 && (
            <section className="mt-space-80 container" key={section.name}>
              <div className="mb-space-32 flex items-center justify-between">
                <span className="sub-2-lg font-semibold text-black dark:text-white">
                  /{section.name}
                </span>
                <Link
                  href={`/blog/${section.slug}`}
                  className={cn(
                    buttonVariants({ variant: 'tertiary' }),
                    'focus-within:!text-primary-200 hover:!text-primary-200 text-black dark:text-white '
                  )}
                >
                  <b>Go to category</b>
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {section?.articles?.map((post, index) => (
                  <PostCard
                    post={post}
                    sectionSlug={section.slug}
                    key={index}
                  />
                ))}
              </ul>
            </section>
          )
      )}

      {/* {
        sectionArticles.length > 3 && getSectionArticles.length === 3 && (
          <div className="flex w-full justify-center mt-5">
            <Button variant="primary" size="lg" className="w-32" onClick={handleReadMore}>Read More</Button>
          </div>
        )
      } */}

      <section className="mt-space-130  container my-10">
        <AppSubscription {...i18n} />
      </section>
    </section>
  )
}
