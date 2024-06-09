import { getDictionary } from '@/dictionaries'
import { locales } from '@/dictionaries/locales'
import { AuctionBids } from '@/components/routes/auction/auction-bids'
import { AuctionOrders } from '@/components/routes/auction/auction-orders'
import { ClaimTokens } from '@/components/routes/auction/claim-tokens'
import { Tabs } from '@/components/ui/tabs'
import {
  ProjectWithAuction,
  getProjectBySlug,
  getProjects
} from '@/lib/projects'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { redirect } from 'next/navigation'
import React from 'react'

const auctionPageClassNames = {
  tabCard:
    'border border-primary/50 bg-card w-full h-[512px] overflow-y-auto scrollbar rounded-lg p-0 md:p-10'
}

export default async function AuctionPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const p = await getProjectBySlug(params.project, dict)
  if (!p || (!p.auctionId && !p.registrationOpen)) redirect('/')
  const project = p as ProjectWithAuction

  const isAuctionClosed = project.badgeText === 'AUCTION CLOSED'
  const tabs = [
    {
      title: 'Auction',
      value: 'auction',
      content: (
        <div className={auctionPageClassNames.tabCard}>
          <React.Suspense fallback={<div>Loading ...</div>}>
            {isAuctionClosed ? (
              <ClaimTokens />
            ) : project.registrationOpen ? null : ( // <RegisterAddressForm projectId={project.id} />
              <AuctionBids project={project} />
            )}
          </React.Suspense>
        </div>
      )
    },
    {
      title: 'Orders',
      value: 'orders',
      content: (
        <div className={auctionPageClassNames.tabCard}>
          <AuctionOrders />
        </div>
      )
    }
    // {
    //   title: 'Debug',
    //   value: 'debug',
    //   content: (
    //     <div className={auctionPageClassNames.tabCard}>
    //       <React.Suspense fallback={<div>Loading ...</div>}>
    //         <AuctionDebug auctionId={project.auctionId} />
    //       </React.Suspense>
    //     </div>
    //   )
    // }
  ]

  return (
    <div className="max-w-[100vw] px-2">
      <section className="b relative mx-auto mb-24 flex size-full max-w-screen-xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
        <Tabs tabs={tabs} />
      </section>

      <hr className="mx-auto mt-24 max-w-screen-xl border-gray-600/80" />
    </div>
  )
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  const params: ProjectPageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ProjectPageParams[]> => {
        const dict = await getDictionary(lang)
        return getProjects(dict)
          .map(project =>
            project.slug ? { lang, project: project.slug } : null
          )
          .filter((param): param is ProjectPageParams => param !== null)
      })
    )
  ).flat()

  return params
}

type ProjectPageParams = { project: string; lang: SiteLocale }
type ProjectPageProps = {
  params: ProjectPageParams
}
