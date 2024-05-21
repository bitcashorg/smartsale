'use client'

import { Key, useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getBlogCategories } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { useEffectOnce } from 'react-use'
import { LucideIcons } from '@/components/icons/blog'

import { Input } from '../base'

interface AppSearchBarProps {
  searchInputPlaceholder: String
}

export function AppSearchBar({ searchInputPlaceholder }: AppSearchBarProps) {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState<any>([])
  const [searchResult, setSearchResult] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const { locale } = useParams()
  const locales = [locale] as SiteLocale[]

  useLayoutEffect(() => {
    fetchBlogCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (search?.length > 0 && !isLoading) {
      onSearchHandler(search)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  async function fetchBlogCategories() {
    setIsLoading(true)

    try {
      const categories = await getBlogCategories(
        locale as SiteLocale,
        locales as SiteLocale[]
      )

      setCategories(categories)
    } catch (error) {
      console.error('AppSearchBar::fetchBlogCategories::ERROR', { error })
    } finally {
      setIsLoading(false)
    }
  }

  function onSearchHandler(value: string) {
    setIsLoading(true)
    const searchKeywords = value.toLowerCase()
    setSearch(searchKeywords)
    let result = []

    const bitcoinBlogs = categories?.allBlogBitcoins
    const cryptoBlogs = categories?.allBlogCryptos
    const startupBlogs = categories?.allBlogStartups
    const investingBlogs = categories.allBlogInvestings

    if (
      searchKeywords.length === 0 ||
      categories === null ||
      Object.keys(categories).length === 0
    )
      return false

    const bitcoinBlogsResult = filterIt(bitcoinBlogs, searchKeywords)
    if (bitcoinBlogsResult?.length > 0) {
      result.push({
        category: 'bitcoin',
        result: bitcoinBlogsResult
      })
    }

    const cryptoBlogsResult = filterIt(cryptoBlogs, searchKeywords)
    if (cryptoBlogsResult?.length > 0) {
      result.push({
        category: 'crypto',
        result: cryptoBlogsResult
      })
    }

    const startupBlogsResult = filterIt(startupBlogs, searchKeywords)
    if (startupBlogsResult?.length > 0) {
      result.push({
        category: 'startup',
        result: startupBlogsResult
      })
    }

    const investingBlogsResult = filterIt(investingBlogs, searchKeywords)
    if (investingBlogsResult?.length > 0) {
      result.push({
        category: 'investing',
        result: investingBlogsResult
      })
    }

    setSearchResult(result)
    setIsLoading(false)
  }

  function filterIt(arr: any[], searchKey: any) {
    return !false
      ? arr?.filter(function (obj: {
          title?: any
          description?: any
          category?: any
          _publishedAt?: any
        }) {
          return (
            obj._publishedAt !== null &&
            Object.keys(obj).some(function (key) {
              return (
                obj.title?.toLowerCase().includes(searchKey) ||
                obj.description?.toLowerCase().includes(searchKey)
              )
            })
          )
        })
      : arr
  }

  useEffectOnce(() => {
    document.addEventListener('click', e => {
      const dropdown = document.getElementById('app-search-bar')
      const target = e.target as HTMLElement
      if (dropdown && !dropdown.contains(target)) {
        setSearch('')
      }
    })

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setSearch('')
      }
    })
  })

  return (
    <div className="w-full " id="app-search-bar">
      <div className="w-full">
        <Input
          type="text"
          placeholder={
            searchInputPlaceholder ? searchInputPlaceholder : 'Search'
          }
          righticon={
            search?.length > 0 ? (
              <button
                className="flex items-center justify-center text-lg text-black cursor-pointer bg dark:text-white"
                onClick={() => setSearch('')}
              >
                {' '}
                <LucideIcons.close className="w-4" />
              </button>
            ) : (
              <LucideIcons.search className="w-4" />
            )
          }
          className="w-full"
          value={search}
          onChange={(e: any) => onSearchHandler(e.target.value)}
        />
      </div>
      {search && (
        <div className="inset-0 z-[100]">
          <div className="scrollbar scrollbar--light absolute top-[4.5rem] z-10 h-[20rem] w-full divide-y divide-gray-100 overflow-x-hidden rounded bg-gray-100 shadow transition delay-150 ease-in-out dark:divide-gray-600 dark:bg-gray-800 md:top-[3rem]">
            {isLoading ? (
              <div className="p-3 bg-gray-100 animate-pulse dark:bg-gray-800">
                <div className="flex-1 py-1 space-y-2">
                  <div className="h-4 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                </div>
                <div className="flex-1 py-1 space-y-2">
                  <div className="h-4 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                </div>

                <div className="flex-1 py-1 space-y-2">
                  <div className="h-4 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                  <div className="h-2 rounded bg-slate-300"></div>
                </div>
              </div>
            ) : searchResult.length > 0 ? (
              searchResult?.map((item: any, index: Key | null | undefined) => (
                <>
                  <div
                    key={index}
                    className="px-4 py-2 text-sm text-gray-900 dark:text-white"
                  >
                    <a title={item.category} href={`/blog/${item?.category}`}>
                      <span className="text-lg font-semibold capitalize">
                        {item?.category}
                      </span>
                    </a>
                  </div>
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformationButton"
                  >
                    {item.result
                      ?.slice(0, 4)
                      ?.map((val: any, index: Key | null | undefined) => (
                        <li key={index}>
                          <a
                            title={val.title}
                            href={`/blog/${item?.category}/${val.slug}`}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {val.title.length > 37
                              ? val.title.substring(0, 37) + '…'
                              : val.title}
                          </a>
                        </li>
                      ))}
                  </ul>
                </>
              ))
            ) : (
              <div className="flex items-center justify-center h-32 mt-6 text-center md:mt-0">
                <span className="text-lg text-center text-black dark:text-white">
                  No result found!
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
