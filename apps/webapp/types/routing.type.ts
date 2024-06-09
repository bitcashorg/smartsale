import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export interface LangProp {
  lang: SiteLocale
}

export interface CommonPageParams extends LangProp {}

export interface CommonPageProps {
  params: CommonPageParams
}
