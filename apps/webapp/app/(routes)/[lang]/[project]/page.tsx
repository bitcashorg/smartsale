import { getProjectBySlug, getProjects } from '@/lib/projects'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectDataCard } from '@/components/routes/project/project-data-card'
import { Card } from '@/components/ui/card'
import { Countdown } from '@/components/shared/countdown'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { locales } from '@/dictionaries/locales'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { getDictionary } from '@/dictionaries'
import { appConfig } from '@/lib/config'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)
  if (!project) redirect('/')

  const projectContentObjectKeys = Object.keys(project.content!)
  const projectContent = project.content!

  return (
    <>
      <div className="flex min-h-[calc(83vh-4rem)] flex-col">
        <ProjectHeader project={project}>
          <div className="flex flex-col gap-8 lg:flex-row">
            <Card className="w-full border-card/30 bg-card/60 pb-10 backdrop-blur-lg">
              <Countdown />
              <div className="align-center flex items-center justify-center gap-6">
                <DynamicAddressForm projectId={project.id} />

                {appConfig.features.presale ? (
                  <Link href={`/${project.slug}/presale`}>
                    <Button>Active Presale</Button>
                  </Link>
                ) : null}
              </div>
            </Card>

            <ProjectDataCard project={project} />
          </div>
        </ProjectHeader>

        <div className="container">
          {projectContentObjectKeys.map((key, index) => {
            const pcKey = key as keyof typeof projectContent

            return (
              <section
                key={key}
                className={cn(
                  'mx-auto my-10 flex w-full flex-col gap-11 px-3 pb-12 pt-10 md:px-6 lg:px-11',
                  index % 2 !== 0 ? 'backdrop-xl rounded-3xl bg-primary/70' : ''
                )}
              >
                <h2 className="heading2 mb-10 mt-4 flex justify-center tracking-tighter">
                  {projectContent[pcKey].title}
                </h2>
                <div className="flex w-full flex-col gap-6">
                  {(projectContent[pcKey].content as string[][]).map(
                    (content, index) => {
                      if (content.every((c, i) => c.includes(':'))) {
                        return (
                          <div
                            key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`}
                            className="lg:grid-flow-cols-4 grid list-outside list-disc gap-16 px-6 sm:grid-cols-2 md:grid-cols-3"
                          >
                            {content.map(item => {
                              const text = item.split(': ')
                              return (
                                <div key={`${item}__list-item`}>
                                  <h3 className="heading3 mb-2">{text[0]}</h3>
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
                    }
                  )}
                </div>
              </section>
            )
          })}
        </div>

        <hr className="mx-auto mt-24 max-w-screen-xl border-gray-600/80" />
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

const DynamicAddressForm = dynamic(
  () =>
    import('../../../../components/routes/project/register-address-form').then(
      mod => mod.RegisterAddressForm
    ),
  {
    ssr: false,
    loading: () => <Button>Register</Button>
  }
)
