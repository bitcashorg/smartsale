import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export const langSelectorOptions: LangSelectorOption[] = [
  { name: 'English', code: 'en' },
  { name: 'Español', code: 'es' },
  { name: '中文', code: 'zh' },
  { name: 'Bahasa Indonesia', code: 'id' },
  { name: 'Tiếng Việt', code: 'vi' }
]

export interface LangSelectorOption {
  name: string
  code: SiteLocale
}
