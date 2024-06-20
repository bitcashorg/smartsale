import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export type Lang = 'en' | 'es' | 'zh' | 'id' | 'vi' | 'ko' | 'pt' | 'fr'
export const locales: SiteLocale[] = [
  'en',
  'es',
  'zh',
  'id',
  'vi'
  // 'ko',
  // 'pt',
  // 'fr'
]
export const defaultLocale: Lang = 'en'
