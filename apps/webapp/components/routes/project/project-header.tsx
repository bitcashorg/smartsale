import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ReactNode } from 'react'
import { ProjectPills } from './project-pills'
import { appConfig } from '@/lib/config'
import Balancer from 'react-wrap-balancer'

export function ProjectHeader({
  project,
  children
}: {
  project: Project
  children: ReactNode
}) {
  return (
    <header className="flex size-full justify-center md:mb-0 md:min-h-[95vh]">
      <div className="h-fit !py-0 md:static md:h-auto md:!pt-[6rem]">
        <Image
          alt={project.title}
          className="pointer-events-none absolute inset-0 size-[95vh] object-cover opacity-50"
          src={project.heroImage}
          fill
          priority
        />
      </div>
      {/* <ProjectDataCard project={project} /> */}
      <section className="align-center container z-10 flex flex-col items-center pt-10">
        <h1 className="align-center mx-auto flex flex-col whitespace-pre-line p-10 text-center md:mb-10">
          <sub className="mb-16 h-8 w-full text-xl font-semibold drop-shadow-md md:mb-0 md:h-10 md:text-2xl">
            {project.pitch}
          </sub>
          <span
            className="leading-16 w-full text-5xl font-normal drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
            key="upcoming-auctions-title"
          >
            <Balancer>{project.title.toUpperCase()}</Balancer>
          </span>
        </h1>

        {appConfig.features.presale ? <ProjectPills project={project} /> : null}

        <div className="container">{children}</div>
      </section>
    </header>
  )
}
