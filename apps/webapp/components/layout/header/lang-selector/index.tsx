import { LangProp } from '@/types/routing.type'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import { langSelectorOptions } from './lang-selector-options'
import { LangSelectorItem } from './lang-selector-item'
import { LangSetter } from '@/components/layout/header/lang-selector/lang-setter'

export function LangSelector({ lang }: LangProp) {
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2" variant="outline">
            {lang.toUpperCase()}
            <span />
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {/* <DropdownMenuLabel>Select Language</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          {langSelectorOptions.map(option => (
            <LangSelectorItem option={option} lang={lang} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <LangSetter /> */}
    </div>
  )
}
