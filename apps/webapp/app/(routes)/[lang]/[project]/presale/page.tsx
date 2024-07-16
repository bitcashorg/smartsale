import { ProjectWithAuction, getProjectBySlug } from '@/lib/projects'
import { redirect } from 'next/navigation'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { Card, CardContent } from '@/components/ui/card'
import { Countdown } from '@/components/shared/countdown'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { PresaleTransactionsCard } from '@/components/routes/project/presale/presale-transactions-card'
import { Lang } from '@/dictionaries/locales'
import { getDictionary } from '@/dictionaries'
import { PresaleDepositCard } from '@/components/routes/project/presale/presale-deposit-card'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = (await getProjectBySlug(
    params.project,
    dict
  )) as ProjectWithAuction
  if (!project) redirect('/')

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
          <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
            <Countdown />
            <CardContent>
              <ProjectPresaleData />
            </CardContent>
          </Card>

          <PresaleDepositCard project={project} />
        </div>

        <PresaleTransactionsCard />
      </ProjectHeader>
    </div>
  )
}

export type ProjectPageProps = {
  params: { project: string; lang: Lang }
}
