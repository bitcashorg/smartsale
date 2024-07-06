import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { render as toPlainText } from 'datocms-structured-text-to-plain-text'
import { isHeading, isParagraph } from 'datocms-structured-text-utils'
import {
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponse
} from 'react-datocms'
import { cn } from '@/lib/utils'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { readingTime } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArticleCard } from '../../../shared/article-card'
import { Lang } from '@/dictionaries/locales'
import { ShareArticle } from './share-article'
import { Suspense } from 'react'
import { ArticleIndex } from './article-index'
import Balancer from 'react-wrap-balancer'

export function BlogPage({
  params,
  blogContent,
  relatedBlogs,
  shortlink
}: BlogPageProps) {
  const category = params.category

  let block
  block = blogContent.contentBlock
    .map(({ mainContent }) => {
      return mainContent.value.document.children.filter(
        ({ type, level }) => (type === 'heading' && level == 2) || level == 3
      )
    })
    .filter(block => Boolean(block[0]))

  if (block[0].length > 1) {
    const updatedBlock = block[0].map(function (item) {
      return [item]
    })
    block = updatedBlock
  }
  // console.log(blogContent)
  const title =
    blogContent.title ||
    blogContent.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  const headingTexts = block
    ?.filter(filt => filt !== undefined)
    .map(item => {
      const children = (
        item[0] as unknown as {
          type: string
          level: number
          children: { type: string; marks: string[]; value: string }[]
        }
      ).children
      let sentence = children.map(child => child.value).join(' ')
      const headingItem = { value: sentence }
      return {
        level: item[0].level,
        text: headingItem.value,
        anchor: headingItem.value
          .trim()
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/-$/, '')
      }
    })
  return (
    <div>
      <article className="content-container mx-auto flex-row">
        <div className="mx-auto flex flex-col items-start gap-2">
          <header className="order-3 md:order-1">
            <h1 className="heading flex justify-center font-bold text-black dark:text-white">
              <Balancer>{title}</Balancer>
              <br className="hidden md:inline" />
            </h1>
            <sub className="mt-2 text-sub-1-md text-neutral-400 md:mt-8">
              {blogContent.description}
            </sub>
          </header>

          <div className="order-2 mt-2 flex flex-col space-y-3 md:mt-5">
            <span className="font-futura-pt-heavy text-h-text-c text-h-text font-bold dark:text-white">
              {blogContent.authorName}
            </span>
            <span className="font-futura-pt-book text-h-text-c text-h-text dark:text-white">
              {new Date(blogContent._publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}{' '}
              ∙ {readingTime(blogContent)} min read
            </span>

            <div className="flex space-x-2">
              {blogContent.topics?.map((topic, index) => (
                <Button className="mt-space-6" key={`${topic}-${index}`}>
                  {topic}
                </Button>
              ))}
            </div>
          </div>

          <main className="relative order-4 mt-5 flex flex-col items-start justify-start gap-5 md:flex-row">
            <div className="order-2 flex w-full flex-col md:order-1">
              {blogContent?.contentBlock?.map(
                ({ mainContent, topImages }, ind: number) => {
                  // if (ind >= 2) return null

                  mainContent.value.document.children =
                    mainContent.value.document.children.map(item => {
                      if (item.type !== 'paragraph') return item

                      const sanitizedChildren = item.children?.map(child => {
                        if (child.type !== 'span') return child
                        if (typeof child.value === 'string') return child

                        if (Array.isArray(child.value)) {
                          return {
                            ...child,
                            value: (child.value as string[]).join(' ')
                          }
                        }
                        return child
                      })
                      return { ...item, children: sanitizedChildren }
                    }) as any

                  // console.log(`================ ${ind} =================`)
                  // console.log(
                  //   JSON.stringify(mainContent.value.document.children)
                  // )
                  return (
                    <div key={mainContent.value.document.level}>
                      {topImages.map(
                        (
                          image: { url: string | StaticImport; alt: string },
                          index
                        ) => (
                          <div
                            className="relative order-1 my-10 mt-5 flex min-h-[600px] w-full justify-center overflow-hidden text-center align-middle md:order-3"
                            key={`content-${image}-${index}`}
                          >
                            <Image
                              src={image.url}
                              alt={image?.alt || `blog-image-${index}`}
                              layout="fill"
                              objectFit="cover"
                              className="m-auto flex self-center"
                            />
                          </div>
                        )
                      )}
                      <div>
                        {/* { mainContent.value.document.children.values} */}
                        <StructuredText
                          data={mainContent as StructuredTextGraphQlResponse}
                          customNodeRules={[
                            // Add HTML anchors to heading levels for in-page navigation
                            renderNodeRule(
                              isHeading,
                              ({ node, children, key }) => {
                                const HeadingTag = `h${node.level}` as any
                                const anchor = toPlainText(node)
                                  ?.trim()
                                  .toLowerCase()
                                  .replace(/ /g, '-')
                                  .replace(/[^\w-]+/g, '')
                                  .replace(/-$/, '')
                                return (
                                  // add types to ref and key props to satisfy React requirements
                                  <HeadingTag
                                    className={cn(
                                      'my-5',
                                      node.level === 1 ? 'heading' : 'heading2'
                                    )}
                                    key={key}
                                  >
                                    {children}
                                  </HeadingTag>
                                )
                              }
                            ),
                            renderNodeRule(isParagraph, ({ children, key }) => {
                              return (
                                <p className="paragraph mb-10" key={key}>
                                  {children}
                                </p>
                              )
                            })
                          ]}
                        />
                      </div>
                    </div>
                  )
                }
              )}
            </div>

            <div className="sticky top-[120px] order-1 hidden w-full md:order-2 md:mt-5 md:block md:w-space-250">
              <ArticleIndex articleHeaders={headingTexts} />

              <div className="mt-5 text-center">
                <span className="font-futura-pt-bold text-b-1-sbold-md text-black underline dark:text-white">
                  Share this article
                </span>
                <Suspense fallback={<div>Loading...</div>}>
                  <ShareArticle url={shortlink} title={title} />
                </Suspense>
              </div>
            </div>
          </main>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="narrow-container pt-20">
          <div className="mb-space-32 flex items-center justify-between text-xl">
            <span className="sub-2-lg font-semibold text-black dark:text-white">
              /Related stories{' '}
            </span>
            <Link href={`/blog`} className={cn('text-black dark:text-white')}>
              <b>See All Stories &gt;</b>
            </Link>
          </div>
          <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
            {relatedBlogs
              ?.slice(0, 5)
              .map(post => (
                <ArticleCard
                  post={post}
                  sectionSlug={category}
                  key={post.id}
                  lang={params.lang}
                  meta={true}
                />
              ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export interface BlogPageProps {
  // i18n: CMSLayoutText
  params: {
    lang: Lang
    category: string
    slug: string
  }
  shortlink: string
  //  searchParams: {},
  blogContent: BlogArticleRecord
  relatedBlogs: BlogArticleRecord[]
}
