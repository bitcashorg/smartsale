import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  BlogArticleRecord,
  getBlogCategory,
  getLayoutText,
  getPageSeoText
} from '@/services/datocms'
import { uniq } from 'lodash'

import { generateMetadataFromSEO } from '@/lib/seo.lib'
import { Layout } from '@/components/routes/blog/layouts'
import { CategoryComponent } from '@/components/routes/blog/views/category'

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { locale, category }
  } = props
  const locales = [locale]

  const pageSeo = await getPageSeoText(category, locale, locales)

  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

export default async function Page(props: any) {
  const {
    searchParams: { topic },
    params: { locale, category }
  } = props

  const locales = [locale]

  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(locale, locales),
    getBlogCategory(category, locale, locales, undefined, 100),
    getPageSeoText(category, locale, locales)
  ])

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) =>
    m[1].toUpperCase()
  )
  const categoryContent: BlogArticleRecord[] | undefined = categories[
    `${blogCategory}Data`
  ] as BlogArticleRecord[] | undefined
  const error: string | undefined = categories[`${blogCategory}Error`] as
    | string
    | undefined

  if (!categoryContent || error) {
    console.log(`${blogCategory}::ERROR::`, error)
    notFound()
  }

  // get topics
  const allTopics: string[] = []

  categoryContent.forEach(blog => {
    blog?.topics?.forEach((topic: string) => {
      allTopics.push(topic)
    })
  })

  // section topics & blogs content
  const topics = uniq(allTopics)
  const sectionsContents = topics?.map((tp, index) => {
    const content = categoryContent.filter(content =>
      content.topics.includes(tp)
    )
    return {
      topic: tp,
      content: !topic && index < 4 ? content.slice(1, content?.length) : content
    }
  })

  const sectionsContentsTopics = topics?.map(topic => {
    const content = categoryContent.filter(content =>
      content.topics.includes(topic)
    )
    return {
      topic,
      content
    }
  })

  // layoutTopics
  var LayoutTopics: any = {}
  sectionsContentsTopics.forEach(
    (key, i) =>
      (LayoutTopics[key.topic] =
        sectionsContentsTopics[i].topic + ' (' + key.content.length + ')')
  )

  // update only navigationTopic
  i18n['navigationTopic'] = LayoutTopics

  // recents

  const assignedContentTitles = new Set()
  // Create the test array by iterating through the topics
  const recentContents = topics?.map(topic => {
    // Filter categoryContent to get content items that include the current topic

    const content = categoryContent.filter(content => {
      return (
        content.topics[0] === topic && !assignedContentTitles.has(content.title)
      )
    })
    // Add the titles of the filtered content to the set of assigned content titles

    content.forEach(item => {
      assignedContentTitles.add(item.title)
    })

    // Return an object containing the topic and the filtered content
    return {
      topic,
      content
    }
  })

  recentContents.sort((a, b) => b.content.length - a.content.length)

  const recentBlogs = recentContents
    .filter(content => content !== null)
    .slice(0, 4)

  return (
    <Layout i18n={i18n} pageSeo={pageSeo?.pageSeo}>
      {/* // TODO: Code split */}
      <CategoryComponent
        i18n={i18n}
        pageSeo={pageSeo}
        params={props.params}
        sectionsContents={sectionsContents}
        recentBlogs={recentBlogs}
        topics={topics}
      />
    </Layout>
  )
}
