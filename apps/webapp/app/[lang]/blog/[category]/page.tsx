import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  BlogArticleRecord,
  getBlogCategory,
  getLayoutText,
  getPageSeoText
} from '@/services/datocms'
import { uniq } from 'lodash'

import { generateMetadataFromSEO } from '@/lib/seo'
import { CategoryComponent } from '@/components/routes/blog/category'

export default async function Page(props: any) {
  const {
    searchParams: { topic },
    params: { lang, category }
  } = props

  const locales = [lang]

  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(lang, locales),
    getBlogCategory(category, lang, locales, undefined, 100),
    getPageSeoText(category, lang, locales)
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
  const sections = topics?.map((tp, index) => {
    const content = categoryContent.filter(content =>
      content.topics.includes(tp)
    )
    return {
      topic: tp,
      content: !topic && index < 4 ? content.slice(1, content?.length) : content
    }
  })

  const sectionsTopics = topics?.map(topic => {
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
  sectionsTopics.forEach(
    (key, i) =>
      (LayoutTopics[key.topic] =
        sectionsTopics[i].topic + ' (' + key.content.length + ')')
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
    <main>
      <h1 className="flex justify-center py-10 heading md:py-24">
        {blogCategory} Articles
      </h1>
      {/* <BlogSections sections={sections} /> */}

      <CategoryComponent
        i18n={i18n}
        pageSeo={pageSeo}
        params={props.params}
        sections={sections}
        recentBlogs={recentBlogs}
        topics={topics}
      />
    </main>
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { lang, category }
  } = props
  const locales = [lang]

  const pageSeo = await getPageSeoText(category, lang, locales)

  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}
