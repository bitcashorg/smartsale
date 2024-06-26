import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { render as toPlainText } from 'datocms-structured-text-to-plain-text'
import { isHeading, isParagraph } from 'datocms-structured-text-utils'
import {
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponse
} from 'react-datocms'

import { cn } from '@/lib/utils'
import { BlogArticleRecord, CMSLayoutText } from '@/services/datocms'

import Image from 'next/image'
import { readingTime } from '@/lib/blog'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArticleCard } from '../../shared/article-card'

export function BlogPage({ params, blogContent, relatedBlogs }: BlogPageProps) {
  const category = params.category
  const canonicalUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL + `/${category}/${params.slug}`

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
  // End of  Selection
  return (
    <main>
      <article className="mx-auto content-container">
        <div className="flex flex-col items-start gap-2 mx-auto">
          <header className="order-3 md:order-1">
            <h1 className="flex justify-center font-bold text-black heading dark:text-white">
              {title}
              <br className="hidden md:inline" />
            </h1>
            <sub className="mt-2 text-sub-1-md text-neutral-400 md:mt-8">
              {blogContent.description}
            </sub>
          </header>

          <div className="flex flex-col order-2 mt-2 space-y-3 md:mt-5">
            <span className="font-bold font-futura-pt-heavy text-h-text-c text-h-text dark:text-white">
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

          <main
            className="relative flex flex-col items-start justify-start order-4 gap-5 mt-5 md:flex-row"
            id="scroller-wrapper"
          >
            <div
              className="flex flex-col order-2 w-full md:order-1"
              id="extrat-blog-content"
            >
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
                              className="flex self-center m-auto"
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
                                <p className="mb-10 paragraph" key={key}>
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

            {/* <div className="md:w-space-250 top-[120px] order-1 w-full md:sticky md:order-2 md:mt-5"> */}
            {/* <Navigator articleHeaders={headingTexts} /> */}

            {/* <div className="mt-5">
              <span className="text-black underline font-futura-pt-bold text-b-1-sbold-md dark:text-white">
                Share this article
              </span>
              <div className="flex mt-2 space-x-3">
                <TelegramShareButton
                  url={canonicalUrl}
                  title={blogContent.title}
                >
                  <LucideIcons.sendIcon className="transition-all hover:stroke-primary-500 focus:stroke-primary-500" />
                </TelegramShareButton>

                <TwitterShareButton
                  url={canonicalUrl}
                  title={blogContent.title}
                >
                  <LucideIcons.twitter className="transition-all hover:stroke-primary-500 focus:stroke-primary-500" />
                </TwitterShareButton>

                <FacebookShareButton
                  url={canonicalUrl}
                  title={blogContent.title}
                >
                  <LucideIcons.facebook className="transition-all hover:stroke-primary-500 focus:stroke-primary-500" />
                </FacebookShareButton>

                <LinkedinShareButton
                  url={canonicalUrl}
                  title={blogContent.title}
                >
                  <LucideIcons.linkedin className="transition-all hover:stroke-primary-500 focus:stroke-primary-500" />
                </LinkedinShareButton>
              </div>
            </div> */}
            {/* </div> */}
          </main>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="container mb-10">
          <div className="flex items-center justify-between text-xl mb-space-32">
            <span className="font-semibold text-black sub-2-lg dark:text-white">
              /Related stories{' '}
            </span>
            <Link href={`/blog`} className={cn('text-black dark:text-white')}>
              <b>See All Stories &gt;</b>
            </Link>
          </div>

          <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
            {relatedBlogs
              ?.slice(0, 4)
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
    </main>
  )
}

export interface BlogPageProps {
  // i18n: CMSLayoutText
  params: {
    lang: SiteLocale
    category: string
    slug: string
  }
  //  searchParams: {},
  blogContent: BlogArticleRecord
  relatedBlogs: BlogArticleRecord[]
}
