import { ProjectDataCard } from '@/components/routes/project/project-data-card'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { Countdown } from '@/components/shared/countdown'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getDictionary } from '@/dictionaries'
import { locales } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { createSupabaseServerClient } from '@/services/supabase'
import { getPresaleData } from '@/services/supabase/service'
import type { ProjectPageParams, ProjectPageProps } from '@/types/routing.type'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)
  if (!project || !project.content) redirect('/')

  const projectContentObjectKeys = Object.keys(project.content)
  const projectContent = project.content
  const supabase = await createSupabaseServerClient()
  const presaleData = await getPresaleData({ projectId: project.id, supabase })
  const presaleDataStartDate = new Date(presaleData.start_timestamptz)
  const presaleDataEndDate = new Date(presaleData.end_timestamptz)
  
  return (
    <>
      <div className="flex flex-col">
        <ProjectHeader project={project}>
          <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
            <Card className="flex flex-col w-full pb-5 border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown targetDate={presaleDataStartDate} heading="Pre-Sale Countdown" />
              <div className="flex items-center justify-center gap-3 align-center">
                <DynamicAddressForm projectId={project.id} />

                {appConfig.features.presale ? (
                  <Link href={`/${project.slug}/presale`} className="flex">
                    <Button>Active Presale</Button>
                  </Link>
                ) : null}
              </div>
            </Card>

            {/* // TODO: Update project table to add bitlauncher project. */}
            <ProjectDataCard project={project} />
          </div>
        </ProjectHeader>

        <div className="pt-20 narrow-container">
          {projectContentObjectKeys.map((key, index) => {
            const pcKey = key as keyof typeof projectContent
            const isLastItem = index === projectContentObjectKeys.length - 1

            return (
              <section
                key={key}
                className={cn(
                  !isLastItem &&
                    'backdrop-x my-10 overflow-hidden rounded-3xl bg-primary/70 pb-10',
                  index % 2 !== 0
                    ? 'backdrop-x rounded-3xl bg-primary/70 pb-10'
                    : '',
                )}
              >
                <div className="relative mb-14 h-[400px] w-full">
                  <Image
                    src={projectContent[pcKey].image}
                    alt={projectContent[pcKey].title as string}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="flex justify-center mt-4 tracking-tighter heading2 mb-14">
                  {projectContent[pcKey].title}
                </h2>

                <div className="flex flex-col w-full gap-6">
                  {(projectContent[pcKey].content as string[][]).map(
                    (content, index) => {
                      if (content.every((c, i) => c.includes(':'))) {
                        return (
                          <div
                            key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`}
                            className="grid gap-16 px-6 list-disc list-outside lg:grid-flow-cols-4 sm:grid-cols-2 md:grid-cols-3"
                          >
                            {content.slice(0, 6).map((item) => {
                              const text = item.split(': ')
                              return (
                                <div key={`${item}__list-item`}>
                                  <h3 className="mb-2 heading3">{text[0]}</h3>
                                  <p className="paragraph">{text[1]}</p>
                                </div>
                              )
                            })}
                          </div>
                        )
                      }

                      // return content.map((item, index) => (
                      //   <p
                      //     key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`}
                      //     className="paragraph"
                      //   >
                      //     {item}
                      //   </p>
                      // ))
                    },
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </>
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

const DynamicAddressForm = dynamic(
  () =>
    import('../../../../components/routes/project/register-address-form').then(
      (mod) => mod.RegisterAddressForm,
    ),
  {
    ssr: false,
    loading: () => <Button className="flex">Register</Button>,
  },
)
