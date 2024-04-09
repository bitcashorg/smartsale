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
    <>
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
    </>
  )
}
