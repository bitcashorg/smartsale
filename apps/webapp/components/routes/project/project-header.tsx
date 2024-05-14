import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex mb-2 size-full md:mb-0 md:min-h-screen">
      <div className="content-container relative h-fit !py-0 md:static md:h-auto md:max-w-[1146px] md:!py-[6rem] ">
        <Image
          alt={project.title}
          className="absolute inset-0 object-cover opacity-50 pointer-events-none size-full"
          src={project.heroImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          sizes=""
          priority
        />

        {/* <ProjectDataCard project={project} /> */}
        <section className="relative z-10 flex flex-col items-center pt-10 align-center">
          <h1 className="flex flex-col mx-auto mb-10 text-center whitespace-pre-line md:mb-24">
            <sub className="w-full h-8 text-xl font-semibold leading-none drop-shadow-md md:h-10 md:text-2xl">
              {project.pitch}
            </sub>
            <span
              className="w-full text-5xl font-normal drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
              key="upcoming-auctions-title"
            >
              {project.title}
            </span>
          </h1>
          <ProjectDataCard project={project} />
        </section>
      </div>
    </header>
  )
}
