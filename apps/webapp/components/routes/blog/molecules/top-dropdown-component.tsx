"use client"

import { Fragment } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { LayoutRecord } from "@/services/datocms/graphql/generated/cms"
import { Menu, Transition } from "@headlessui/react"

import { cn } from "@/lib/utils.lib"
import { LucideIcons } from "@/components/icons/blog"

interface TopDropdownProps {
  item?: {
    title: String
    items: LayoutRecord["navigationTopic" | "navigationCategories"]
  }
  TextClass: any
}

export const TopDropdown = ({ TextClass, item }: TopDropdownProps) => {
  const { category } = useParams()
  const query = useSearchParams()
  const topic = query?.get("topic")
  const items = item?.items
  const itemList = typeof items === "object" ? Object.keys(item?.items) : null
  return (
    <Menu as="div" className="relative inline-flex items-center text-left">
      <Menu.Button className="flex items-center space-x-5 lg:whitespace-nowrap">
        <span
          className={cn(
            "font-futural-pt-demi  min-w-[80px] text-b-1-md font-semibold dark:text-white",
            TextClass
          )}
        >
          {item?.title}
        </span>
        <LucideIcons.chevronDown className={TextClass} />
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
        <Menu.Items className="absolute top-8 z-10 mt-2 w-56 origin-top-right  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:right-0">
          <div className="scrollbar scrollbar--light flex h-auto max-h-[300px] w-56  flex-col overflow-y-auto rounded-md bg-gray-100 px-5 py-space-40 dark:bg-gray-800">
            {itemList &&
              itemList?.map((value, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={
                        item?.title == "Browse by topic"
                          ? `/blog/${category}?topic=${value}#${value}`
                          : `/blog/${value}`
                      }
                      className={cn(
                        " font-futura-pt-medium py-1 text-b-1-md  capitalize hover:text-primary-200 focus:text-primary-200",
                        (item?.title == "Browse by category" &&
                          category === value) ||
                          (item?.title == "Browse by topic" && topic === value)
                          ? "text-primary-400"
                          : ""
                      )}
                    >
                      {" "}
                      {items ? items[value as keyof typeof items] : null}
                    </Link>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
