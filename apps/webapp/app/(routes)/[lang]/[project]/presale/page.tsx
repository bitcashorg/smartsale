import { Project, ProjectWithAuction, getProjectBySlug } from '@/lib/projects'
import { redirect } from 'next/navigation'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectPresaleCard } from '@/components/routes/project/project-presale-card'
import { Card, CardContent } from '@/components/ui/card'
import { Countdown } from '@/components/shared/countdown'
import { ProjectDataCard } from '@/components/routes/project/project-data-card'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { PresaleTransactionsCard } from '@/components/routes/project/presale-transactions-card'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = (await getProjectBySlug(
    params.project,
    params.lang
  )) as ProjectWithAuction
  if (!project) redirect('/')

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="container">
          <div className="mb-10 flex gap-8">
            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown auctionId={project.auctionId!} />
              <CardContent>
                <ProjectPresaleData />
              </CardContent>
            </Card>

            <ProjectDataCard project={project} />
          </div>
          <PresaleTransactionsCard />
        </div>
      </ProjectHeader>
    </div>
  )
}

type ProjectPageProps = {
  params: { project: string; lang: SiteLocale }
}
