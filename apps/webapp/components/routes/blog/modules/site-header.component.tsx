import { LayoutRecord } from '@/services/datocms/graphql/generated/cms'
import { MainNav } from './main-nav.component'
import { ThemeToggle } from './theme-toggle.component'

interface SiteHeaderProps {
  navItems?: LayoutRecord['navigationCategories']
  searchInputPlaceholder: String
}
export function SiteHeader({
  navItems,
  searchInputPlaceholder
}: SiteHeaderProps) {
  return (
    <header className="h-space-90 sticky -top-[20px] z-40 w-full bg-gradient-to-b from-[#A5EFC0E5] via-[#E6FBEDE5] to-[#FFFFFFE5] pt-5 backdrop-blur dark:from-neutral-950/80 dark:via-neutral-900/50 dark:to-neutral-900/30">
      <div className="container top-0 flex items-center h-space-70 px-space-10 md:px-space-50 ">
        <MainNav
          items={navItems}
          headerType="home"
          searchInputPlaceholder={searchInputPlaceholder}
        />

        <div className="hidden gap-4 py-5 md:flex">
          {/* {clientConfig.features.inDevelopment ? <LocalesModal /> : null} */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
