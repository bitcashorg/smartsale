import { LayoutRecord } from '@/services/datocms/graphql/generated/cms'
import { LocalesModal } from '../molecules'
import { MainNav } from './main-nav.component'
import { ThemeToggle } from './theme-toggle.component'

interface BlogHeaderProps {
  navItems: {
    title: String
    items: LayoutRecord['navigationTopic' | 'navigationCategories']
  }[]
  searchInputPlaceholder: String
}

export function BlogHeader({
  navItems,
  searchInputPlaceholder
}: BlogHeaderProps) {
  return (
    <header className="h-space-176 sticky -top-[70px] z-40 w-full bg-black/95 py-0 backdrop-blur dark:bg-white/95">
      <div className="container sticky top-0 flex items-center h-space-126 px-space-10 py-space-30 md:px-space-50 md:py-0">
        <MainNav
          items={navItems}
          searchInputPlaceholder={searchInputPlaceholder}
          headerType="blog"
        />

        <div className="hidden gap-4 py-5 md:flex">
          <LocalesModal blog />
          <ThemeToggle blog />
        </div>
      </div>
    </header>
  )
}
