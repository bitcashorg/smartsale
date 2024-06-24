import { appConfig } from '@/lib/config'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export const locales: SiteLocale[] = appConfig.features.i18n
  ? ['en', 'es', 'zh', 'id', 'vi', 'ko', 'pt', 'fr']
  : ['en']
export const defaultLocale: SiteLocale = 'en'
