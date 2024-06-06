import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export interface CommonPageParams {
  lang: SiteLocale
}

export interface CommonPageProps {
  params: CommonPageParams
}
