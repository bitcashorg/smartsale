import { BlogArticleRecord, CMSLayoutText } from "@/services/datocms"

export interface BlogPageProps {
  i18n: CMSLayoutText
  params: {
    locale: string
    category: string
    slug: string
  }
  //  searchParams: {},
  blogContent: BlogArticleRecord
  relatedBlogs: BlogArticleRecord[]
}
