'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { render as toPlainText } from 'datocms-structured-text-to-plain-text'
import { isHeading, isParagraph } from 'datocms-structured-text-utils'
import {
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponse
} from 'react-datocms'

import { AppSubscription } from '@/components/routes/blog/modules'
import { Navigator } from '@/components/routes/blog/molecules'

import { TermsPageProps } from './page.types'

export function PageComp({ i18n, mainContent }: TermsPageProps) {
  const pageContent = mainContent

  const block = pageContent?.mainContent.value.document.children.filter(
    ({ type, level }: any) => (type === 'heading' && level == 2) || level == 3
  )
  const headingTexts = block?.map((value: any) => {
    const headingItem = (
      value as unknown as {
        type: string
        level: number
        children: { type: string; marks: string[]; value: string }[]
      }
    ).children[0]

    return {
      level: value.level,
      text: headingItem.value,
      anchor: headingItem.value
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    }
  })

  return (
    <section className="container mx-auto px-5  md:px-0">
      <div className="mx-auto mt-5 flex max-w-[900px] flex-col items-start gap-2 md:px-5 lg:px-0">
        <div className="relative order-4 mt-5 flex flex-col items-start justify-start gap-5 md:flex-row  ">
          <div
            className="order-2 flex w-full flex-col md:order-1 md:max-w-[calc(100%-250px)]"
            id="extrat-blog-content"
          >
            <div className="blog-content">
              <StructuredText
                data={pageContent?.mainContent as StructuredTextGraphQlResponse}
                customNodeRules={[
                  renderNodeRule(isHeading, ({ node, children, key }) => {
                    const HeadingTag = `h${node.level}` as any
                    const anchor = toPlainText(node)
                      ?.toLowerCase()
                      .replace(/ /g, '-')
                      .replace(/[^\w-]+/g, '')

                    return (
                      <HeadingTag className="my-5" key={key}>
                        {children}
                        <a id={anchor} className="pt-32" />
                        <a href={`#${anchor}`} />
                      </HeadingTag>
                    )
                  }),
                  renderNodeRule(isParagraph, ({ children, key }) => {
                    return (
                      <p className="mb-5 text-xl" key={key}>
                        {children}
                      </p>
                    )
                  })
                ]}
              />
            </div>
          </div>

          <div className="md:w-space-250 top-[120px] order-1 w-full md:sticky md:order-2 md:mt-5">
            <Navigator articleHeaders={headingTexts} />
          </div>
        </div>
      </div>

      <section className="mt-space-130  container my-10">
        <AppSubscription {...i18n} />
      </section>
    </section>
  )
}
