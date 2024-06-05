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

export function BlogPage({
  i18n,
  params,
  blogContent,
  relatedBlogs
}: BlogPageProps) {
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

  return (
    <article>
      <div className="flex flex-col items-start gap-2 mx-auto">
        <header className="order-3 md:order-1">
          <h1 className="flex justify-center font-bold text-black heading dark:text-white">
            {blogContent.title}
            <br className="hidden md:inline" />
          </h1>
          <sub className="mt-2 heading3 md:text-sub-1-lg text-neutral-700 dark:text-neutral-400 md:mt-8">
            {blogContent.description}
          </sub>
        </header>

        <div className="flex flex-col order-2 mt-2 space-y-3 md:mt-5">
          <span className="font-bold font-futura-pt-heavy text-h-text text-h-text-c dark:text-white">
            {blogContent.authorName}
          </span>
          <span className="font-futura-pt-book text-h-text text-h-text-c dark:text-white">
            {new Date(blogContent._publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })}{' '}
            ∙ {readingTime(blogContent)} min read
          </span>

          <div className="flex space-x-2">
            {blogContent.topics?.map((topic, index) => (
              <Button className="mt-space-6" key={index}>
                {topic}
              </Button>
            ))}
          </div>
        </div>

        <main
          className="relative flex flex-col items-start justify-start order-4 gap-5 mt-5 md:flex-row "
          id="scroller-wrapper"
        >
          <div
            className="flex flex-col order-2 w-full md:order-1"
            id="extrat-blog-content"
          >
            {blogContent?.contentBlock?.map(
              ({ mainContent, topImages }, ind: number) => {
                return (
                  <div key={ind}>
                    {topImages.map(
                      (
                        image: { url: string | StaticImport; alt: string },
                        index
                      ) => (
                        <div
                          className="relative order-1 my-10 mt-5 flex min-h-[600px] w-full justify-center overflow-hidden text-center align-middle md:order-3"
                          key={`content-${index}`}
                        >
                          <Image
                            src={image.url}
                            alt={image?.alt || `blog-image-${index}`}
                            fill
                            layout="fill"
                            loading="lazy"
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
                                  <a id={anchor} className="pt-32" />
                                  <a href={`#${anchor}`} />
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

      {/* {relatedBlogs.length > 0 && (
        <section className="mt-space-80 mx-auto w-full md:max-w-[74rem] md:px-10">
          <div className="flex items-center justify-between mb-space-32">
            <span className="font-semibold text-black sub-2-lg dark:text-white">
              /Related stories{' '}
            </span>
            <Link
              href={`/blog/${category}`}
              className={cn('text-black dark:text-white')}
            >
              <b>See All Stories</b>
              <LucideIcons.chevronRight className="h-4 w-7" />
            </Link>
          </div>

          <ul className="flex w-full flex-col gap-5 py-5 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:flex-wrap lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {relatedBlogs?.slice(0, 4).map((post, index) => (
              <div key={index}>
                <PostCard post={post} sectionSlug={category} />
              </div>
            ))}
          </ul>
        </section>
      )} */}
    </article>
  )
}

export interface BlogPageProps {
  i18n: CMSLayoutText
  params: {
    lang: SiteLocale
    category: string
    slug: string
  }
  //  searchParams: {},
  blogContent: BlogArticleRecord
  relatedBlogs: BlogArticleRecord[]
}
