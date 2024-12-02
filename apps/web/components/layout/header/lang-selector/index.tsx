import { LangSetter } from '@/components/layout/header/lang-selector/lang-setter'
import type { LangProp } from '@/types/routing.type'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@smartsale/ui'
import { Button } from '@smartsale/ui'
import { ChevronDownIcon } from 'lucide-react'
import { LangSelectorItem } from './lang-selector-item'
import { langSelectorOptions } from './lang-selector-options'

export function LangSelector({ lang }: LangProp) {
  return (
    <div className="flex items-center lg:gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center h-auto px-3 py-1 text-sm ga-1 lg:h-10 lg:px-4 lg:py-2"
            variant="outline"
          >
            {lang.toUpperCase()}
            <span />
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {/* <DropdownMenuLabel>Select Language</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          {langSelectorOptions.map((option) => (
            <LangSelectorItem key={option.name} option={option} lang={lang} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <LangSetter />
    </div>
  )
}
