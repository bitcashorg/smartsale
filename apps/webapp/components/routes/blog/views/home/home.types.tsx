import { CMSLayoutText, CMSPageSeoText } from "@/services/datocms"
import {
  BlogArticleRecord,
  getBlogCategoriesTypes,
} from "@/services/datocms/datacms-blog-category.service"
import { LayoutRecord } from "@/services/datocms/graphql/generated/cms"

export interface HomeProps {
  children?: React.ReactNode
  i18n: CMSLayoutText
  sectionArticles: {
    name: string
    slug: string
    articles: BlogArticleRecord[]
  }[]

  recentsArticles: {
    name: string
    slug: string
    articles: BlogArticleRecord[]
  }[]
  pageSeo: CMSPageSeoText
}
