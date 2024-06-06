'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LangSelectorOption } from './lang-selector-options'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export function LangSelectorItem({ option, lang }: LangSelectorProps) {
  const pathname = usePathname()

  return (
    <Link
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
