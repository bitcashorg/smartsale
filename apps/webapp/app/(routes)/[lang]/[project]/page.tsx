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
import { Lang, locales } from '@/dictionaries/locales'
import { getDictionary } from '@/dictionaries'
import { appConfig } from '@/lib/config'
import Image from 'next/image'
import { BgHeader } from '@/components/shared/bg-header'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)
  if (!project) redirect('/')

  const projectContentObjectKeys = Object.keys(project.content!)
  const projectContent = project.content!

  return (
    <>
      <div className="flex flex-col">
        <BgHeader
          heading={project.title}
          subheading={project.pitch}
          imageSrc="/images/blog/temp-bg-concept.webp"
        />
        <div className="pt-20 narrow-container">
          <div className="flex flex-col gap-8 pb-10 lg:flex-row">
            <Card className="w-full pb-10 border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown />
              <div className="flex items-center justify-center gap-6 align-center">
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
                    ? `backdrop-x rounded-3xl bg-primary/70 pb-10`
                    : ''
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
                            className="grid gap-16 px-6 list-disc list-outside sm:grid-cols-2 md:grid-cols-3"
                          >
                            {content.slice(0, 6).map(item => {
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
                    }
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
          .map(project =>
            project.slug ? { lang, project: project.slug } : null
          )
          .filter((param): param is ProjectPageParams => param !== null)
      })
    )
  ).flat()

  return params
}

type ProjectPageParams = { project: string; lang: Lang }
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
