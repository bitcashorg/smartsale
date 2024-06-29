import { ProjectWithAuction, getProjectBySlug } from '@/lib/projects'
import { redirect } from 'next/navigation'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { Card, CardContent } from '@/components/ui/card'
import { Countdown } from '@/components/shared/countdown'
import { ProjectDataCard } from '@/components/routes/project/project-data-card'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { PresaleTransactionsCard } from '@/components/routes/project/presale-transactions-card'
import { Lang } from '@/dictionaries/locales'

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
          <div className="flex gap-8 mb-10">
            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown />
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
  params: { project: string; lang: Lang }
}
