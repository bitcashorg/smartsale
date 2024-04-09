import { projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'

import { redirect } from 'next/navigation'

const sectionWithBgClassNames = 'flex flex-col gap-11 px-3 w-full mx-auto max-w-screen-xl md:px-6 lg:px-11 w-full bg-primary/70 backdrop-xl rounded-3xl py-10 md:py-16 lg:py-24'
const sectionWithoutBgClassNames = sectionWithBgClassNames.replace('bg-primary/70 backdrop-xl rounded-3xl ', '')

export default function ProjectPage({
  params
}: {
  params: { project: string }
}) {
  const project = projects.find(p => p.slug == params.project)
  if (!project) redirect('/')

  const projectContentObjectKeys = Object.keys(project.content)
  const projectContent = project.content

  return (
    <main className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {project.title}
                </h1>

                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  {project.registrationOpen
                    ? 'Register to participate in the auction!'
                    : project.auctionClosed
                      ? 'Auction is closed. You can now claim your tokens.'
                      : 'Join the auction and be a part of our project. The countdown has begun!'}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="text-2xl font-bold">
                  <div />
                </div>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={`${project.slug}/auction`}
                >
                  {project.registrationOpen
                    ? 'Register Now!'
                    : project.auctionClosed
                      ? 'Claims your Tokens'
                      : 'Participate Now'}
                </Link>
              </div>
            </div>
            <Image
              alt="Project Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src={project.heroImage}
              width="550"
            />
          </div>
        </div>
      </section>

      {/* // ! ========= CONTENT ORDER MUST BE AS: 1. highlights, 2. product, 3. problem, 4. solution, 5. bussinessModel and 6. tokenomics ========= */}
      {projectContentObjectKeys.map((key, index) => {
        const pcKey = key as keyof typeof projectContent

        return (
          // ? Odds gets background, evens gets no background
          <section key={key} className={index % 2 === 0 ? sectionWithBgClassNames : sectionWithoutBgClassNames}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {projectContent[pcKey].title}
            </h2>
            <div className="flex flex-col w-full gap-6">
              {(projectContent[pcKey].content as string[][]).map((content, index) => {
                if (content.every((c, i) => c.includes(':'))) {
                  return (
                    <ul key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`} className="flex flex-col gap-2 list-outside list-disc px-6">
                      {content.map(item => (
                        <li key={`${item}__list-item`}>
                          {item.split(':').map((text, index) => (
                            <span key={index} className={!index ? 'font-bold' : ''}>
                              {text}{!index ? ': ' : ''}
                            </span>
                          ))}
                        </li>
                      ))}
                    </ul>
                  )
                }

                return content.map((item, index) => (
                  <p key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`} className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {item}
                  </p>
                ))
              })}
            </div>
          </section>
        )
      })}

      <hr className="border-gray-600/80 mt-24" />
    </main>
  )
}
