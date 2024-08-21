import { AuctionBids } from '@/components/routes/project/auction/auction-bids'
import { AuctionDataCard } from '@/components/routes/project/auction/auction-data-card'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { Countdown } from '@/components/shared/countdown'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getDictionary } from '@/dictionaries'
import { locales } from '@/dictionaries/locales'
import {
  type ProjectWithAuction,
  getProjectBySlug,
  getProjects,
} from '@/lib/projects'
import type { ProjectPageParams, ProjectPageProps } from '@/types/routing.type'
import { redirect } from 'next/navigation'

export default async function AuctionPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const p = await getProjectBySlug(params.project, dict)
  if (!p || (!p.auctionId && !p.registrationOpen)) redirect('/')
  const project = p as ProjectWithAuction

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown />
              <CardContent>
                <ProjectPresaleData />
              </CardContent>
            </Card>

            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <CardHeader>
                <CardTitle>Place Bids</CardTitle>
                <CardDescription>
                  Up to five 5 bids per project auction. You can update your
                  order.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AuctionBids project={project!} />
              </CardContent>
            </Card>
          </div>
          <AuctionDataCard />
        </div>
      </ProjectHeader>
    </div>
  )
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  const params: ProjectPageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ProjectPageParams[]> => {
        const dict = await getDictionary(lang)
        return getProjects(dict)
          .map((project) =>
            project.slug ? { lang, project: project.slug } : null,
          )
          .filter((param): param is ProjectPageParams => param !== null)
      }),
    )
  ).flat()

  return params
}
