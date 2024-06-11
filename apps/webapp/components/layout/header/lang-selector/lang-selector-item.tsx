'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LangSelectorOption } from './lang-selector-options'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { setLanguage } from '@/app/actions/set-lang'

export function LangSelectorItem({ option, lang }: LangSelectorProps) {
  const pathname = usePathname()
  // const handleSetLanguage = async (lang: string) => {
  //   'use server'
  //   await
  // }

  return (
    <Link
      onClick={() => setLanguage(option.code)}
      href={pathname.replace(new RegExp(`/${lang}(?=/|$)`), `/${option.code}`)}
    >
      <DropdownMenuItem>{option.name}</DropdownMenuItem>
    </Link>
  )
}

export interface LangSelectorProps {
  option: LangSelectorOption
  lang: SiteLocale
}
