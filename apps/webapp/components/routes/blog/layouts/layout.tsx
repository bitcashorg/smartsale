'use client'

import { useParams, usePathname } from 'next/navigation'
import { CMSLayoutText, CMSPageSeoText } from '@/services/datocms'

import {
  BlogHeader,
  HeaderSEO,
  SiteFooter,
  SiteHeader
} from '@/components/routes/blog/modules'
import { appConfig } from '@/lib/config'

interface RootLayoutProps {
  children?: React.ReactNode
  blogLayout?: boolean
  i18n: CMSLayoutText
  pageSeo: CMSPageSeoText['pageSeo']
}

interface OriginalTopics {
  [key: string]: string
}

export function Layout({
  children,
  blogLayout,
  i18n: {
    backHome,
    backBitcash,
    navigationPoliciesTerms,
    navigationTopic,
    navigationCategories,
    searchInputPlaceholder,
    homeFollowLinks,
    cryptoFollowLinks,
    bitcoinFollowLinks,
    startUpsFollowLinks,
    aiFollowLinks,
    investingFollowLinks,
    cookieConsentCta,
    cookieConsentDescription
  },
  pageSeo
}: RootLayoutProps) {
  const param = useParams()
  const { category } = param
  const pathname = usePathname()
  const currentUrl = process.env.NEXT_PUBLIC_VERCEL_URL + pathname

  // Format topics

  const topicsArray = Object.entries(navigationTopic).map(
    ([name, count]: any) => {
      const matchResult = count.match(/\d+/)
      const countValue = matchResult ? parseInt(matchResult[0], 10) : 0 // Use 0 or any default value
      return { name, count: countValue }
    }
  )

  // Step 1: Sort by content count (highest to lowest)
  const sortedByCount = topicsArray.sort(
    (a, b) => a.name.localeCompare(b.name) || a.count - b.count
  )

  // Step 2: Format the topics
  const formattedTopics: OriginalTopics = sortedByCount.reduce(
    (result, { name, count }) => {
      result[name] = `${name} (${count})`
      return result
    },
    {} as OriginalTopics
  )

  const navItems = [
    {
      title: 'Browse by topic',
      items: formattedTopics
    },
    {
      title: 'Browse by category',
      items: navigationCategories
    }
  ]

  let followLinks: never[] = []

  switch (category) {
    case 'bitcoin':
      followLinks = bitcoinFollowLinks
      break
    case 'startup':
      followLinks = startUpsFollowLinks
      break
    case 'investing':
      followLinks = investingFollowLinks
      break
    case 'crypto':
      followLinks = cryptoFollowLinks
      break
    case 'ai':
      followLinks = aiFollowLinks
      break

    default:
      followLinks = homeFollowLinks
      break
  }

  const footerItems = {
    followLinks,
    backHome,
    backBitcash,
    navigationPoliciesTerms
  }

  return (
    <>
      <HeaderSEO
        title={pageSeo?.title ? pageSeo.title : appConfig.seo.name}
        description={
          pageSeo?.description ? pageSeo.description : appConfig.seo.description
        }
        ogType="website"
        ogImageUrl={pageSeo?.image?.url}
        ogUrl={currentUrl}
        twitterCard={pageSeo?.twitterCard ? pageSeo?.twitterCard : ''}
      />
      <div className="relative flex flex-col min-h-screen">
        {/* {blogLayout ? (
        <BlogHeader navItems={navItems} searchInputPlaceholder={searchInputPlaceholder} />
      ) : ( */}
        <SiteHeader
          navItems={navItems}
          searchInputPlaceholder={searchInputPlaceholder}
        />
        {/* )} */}
        <main className="relative flex flex-col flex-1 min-h-screen">
          {children}
        </main>
        <SiteFooter footerItems={footerItems} />
      </div>
    </>
  )
}
