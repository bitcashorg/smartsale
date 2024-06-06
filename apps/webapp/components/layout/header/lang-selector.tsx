import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'

export function LangSelector() {
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2" variant="outline">
            Lang
            <span />
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>Select Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((language: Language) => (
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{language.name}</span>
                </div>
                {/* <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language.code}
                </span> */}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const languages: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Español', code: 'es' },
  { name: '中文', code: 'zh' },
  { name: 'Bahasa Indonesia', code: 'id' },
  { name: 'Tiếng Việt', code: 'vi' }
]

interface Language {
  name: string
  code: string
}
