'use client'

import { Fragment } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { Menu, Transition } from '@headlessui/react'

import { LucideIcons } from '@/components/icons/blog'

import { Button } from '../base'
import { cn } from '@/lib/utils'

export function LocalesModal({ blog }: { blog?: boolean }) {
  const router = useRouter()
  const { locale } = useParams()
  const lang = locale
  const path = usePathname()

  // console.log({ lang })
  const changeLanguage = (locale: string) => {
    const currentPath = path // Get the current URL path
    const currentLocale = lang // Get the current locale
    const newPath = currentPath.replace(`/${currentLocale}`, `/${locale}`) // Replace the current language code with the new one
    router.push(newPath) // Push the new URL to navigate to the page in the new language
  }

  const selectedLocale = lang
  return (
    <Menu as="div" className="relative inline-flex items-center text-left">
      <Menu.Button className="flex items-center space-x-5 lg:whitespace-nowrap">
        {/* <span className={cn("font-futural-pt-demi  text-b-1-md font-semibold  dark:text-white min-w-[80px]")}>Change Language </span> */}
        <span title="Change  default language">
          {' '}
          <LucideIcons.globe
            className={
              blog ? 'text-white dark:text-black' : 'text-black dark:text-white'
            }
          />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-8 z-10 mt-2 w-[160px] origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col w-full p-5 overflow-y-auto bg-black rounded-md scrollbar max-h-space-250 whitespace-nowrap dark:bg-slate-50">
            {locales &&
              locales?.map(({ locale, label }) => (
                <Menu.Item key={`${locale}-${label}`}>
                  <Button
                    variant="tertiary"
                    onClick={() => changeLanguage(locale)}
                    className={cn(
                      'flex h-full w-full  space-x-2  py-2 text-white dark:text-black',
                      selectedLocale === locale ? 'text-primary-600' : ''
                    )}
                  >
                    {selectedLocale === locale ? (
                      <span className="w-2 h-2 mt-1 rounded-full bg-primary-600"></span>
                    ) : !selectedLocale && locale === 'en' ? (
                      <span className="w-2 h-2 mt-1 rounded-full bg-primary-600"></span>
                    ) : (
                      <span className="w-2 h-2 mt-1 rounded-full"></span>
                    )}

                    {/*  */}
                    <span className="w-[60px] text-left"> {label}</span>
                  </Button>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const locales: LocalesContextProps[] = [
  {
    locale: 'en',
    label: 'English'
  },
  {
    locale: 'es',
    label: 'Español'
  },
  {
    locale: 'zh',
    label: '简体中文'
  },
  {
    locale: 'id',
    label: 'Indonésien'
  },
  {
    locale: 'vi',
    label: 'Tiếng Việt'
  }
  // ...
]
// "en" | "es" | "zh" | "id" | "vi"

export type LocalesContextProps = {
  locale: SiteLocale
  label: string
}
