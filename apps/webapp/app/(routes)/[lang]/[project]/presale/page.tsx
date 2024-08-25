import { PresaleDepositCard } from '@/components/routes/project/presale/presale-deposit-card'
import { PresaleTransactionsCard } from '@/components/routes/project/presale/presale-transactions-card'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { Countdown } from '@/components/shared/countdown'
import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/dictionaries'
import { type ProjectWithAuction, getProjectBySlug } from '@/lib/projects'
import { createSupabaseServerClient } from '@/services/supabase/server'
import type { ProjectPageProps } from '@/types/routing.type'
import { redirect } from 'next/navigation'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = (await getProjectBySlug(
    params.project,
    dict,
  )) as ProjectWithAuction
  if (!project) redirect('/')
  const presaleData = await getPresaleData(project.id)
  if (!project) redirect('/')

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
            <Countdown
              targetDate={new Date(presaleData.end_timestamptz)}
              heading="Pre-Sale Countdown"
            />
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

async function getPresaleData(projectId: number) {
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase
    .from('presale')
    .select('*')
    .eq('id', projectId)
    .single()

  if (error) {
    console.error('Error checking presale data:', error)
    throw error
  }

  return data
}
