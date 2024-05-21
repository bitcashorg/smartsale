"use client"

import { LayoutRecord } from "@/services/datocms/graphql/generated/cms"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import { LogoMain } from "@/components/icons/blog"

import { AppSearchBar, MobileMenu, TopDropdown } from "../molecules"

interface MainNavProps {
  items: {
    title: String
    items: LayoutRecord["navigationTopic" | "navigationCategories"]
  }[]
  headerType: String
  searchInputPlaceholder: String
}

export function MainNav({
  items,
  headerType,
  searchInputPlaceholder,
}: MainNavProps) {
  const path = usePathname()
  const { locale, category } = useParams()

  return (
    <div className="flex items-center justify-between w-full py-5 md:justify-normal md:gap-10">
      <Link href={`/blog`} className="flex space-x-2">
        {/* <LogoBlog className="w-full max-w-[45px] md:max-w-[100px] lg:hidden flex" blog={headerType === 'blog'} /> */}
        <LogoMain
          className="max-h-[38px] w-full max-w-[250px] md:max-h-[46px]"
          blog={headerType === "blog"}
        />
      </Link>

      <div className="relative mx-auto hidden h-full w-full flex-col content-center items-center md:flex md:max-w-[300px]">
        <AppSearchBar searchInputPlaceholder={searchInputPlaceholder} />
      </div>

      <div className="flex md:hidden">
        <MobileMenu
          headerType={headerType}
          navItems={items}
          searchInputPlaceholder={searchInputPlaceholder}
        />
      </div>

      {items?.length ? (
        <nav className="hidden gap-6 pr-10 ml-auto md:flex">
          {items?.map((item, index) => (
            <div
              key={index}
              className={
                path != `/${locale}/blog/${category}` &&
                  item.title == "Browse by topic"
                  ? "hidden"
                  : "flex items-center"
              }
            >
              <TopDropdown
                item={item}
                TextClass={
                  headerType === "blog"
                    ? "dark:text-black text-white"
                    : "text-black dark:text-white"
                }
              />
            </div>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
