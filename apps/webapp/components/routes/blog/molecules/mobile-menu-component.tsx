'use client'

import { usePathname } from 'next/navigation'
import { LayoutRecord } from '@/services/datocms/graphql/generated/cms'
import { LucideIcons } from '@/components/icons/blog'

import { AppSearchBar, LocalesModal, TopDropdown } from '.'
import { Dialog, DialogContent, DialogTrigger, ThemeToggle } from '../modules'

interface MobileMenuProps {
  headerType: String
  navItems: {
    title: String
    items: LayoutRecord['navigationTopic' | 'navigationCategories']
  }[]
  searchInputPlaceholder: String
}

export const MobileMenu = ({
  headerType,
  navItems,
  searchInputPlaceholder
}: MobileMenuProps) => {
  const path = usePathname()
  return (
    <Dialog>
      <DialogTrigger>
        <LucideIcons.menu
          className={
            headerType === 'blog'
              ? 'text-white  dark:text-black'
              : 'text-black dark:text-white'
          }
        />
      </DialogTrigger>

      <DialogContent
        onInteractOutside={() => console.log('clicked')}
        className="mx-10 text-black bg-white pointer-events-auto dark:bg-black dark:text-white"
      >
        <div className="relative ">
          <div className="mt-5">
            <AppSearchBar searchInputPlaceholder={searchInputPlaceholder} />
          </div>

          <div className="flex items-center justify-center col-2">
            <div className="relative grid w-[75%] gap-5">
              {navItems.length ? (
                <div className="flex flex-col space-y-1">
                  {navItems?.map((item, index) => (
                    <div
                      key={index}
                      className={
                        path != '/[category]' && item.title == 'Browse by topic'
                          ? 'hidden'
                          : 'block'
                      }
                    >
                      <TopDropdown
                        item={item}
                        TextClass="text-black dark:text-white"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex w-[25%] gap-4 py-5">
              {/* {clientConfig.features.inDevelopment ? <LocalesModal /> : null} */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
