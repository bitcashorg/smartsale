import { CMSLayoutText, CMSPageSeoText } from "@/services/datocms"
import { getBlogCategoriesTypes } from "@/services/datocms/datacms-blog-category.service"

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
    content: getBlogCategoriesTypes["allBlogBitcoins"]
  }[]
  recentBlogs: {
    topic: string
    content: getBlogCategoriesTypes["allBlogBitcoins"]
  }[]
  pageSeo: CMSPageSeoText
}
