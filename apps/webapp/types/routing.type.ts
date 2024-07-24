import { Lang } from '@/dictionaries/locales'

export interface LangProp {
  lang: Lang
}

export interface CommonPageParams extends LangProp {}

export interface CommonPageProps {
  params: CommonPageParams
}

export type ProjectPageParams = { project: string; lang: Lang }

export type ProjectPageProps = {
  children: React.ReactNode
  params: ProjectPageParams
}
