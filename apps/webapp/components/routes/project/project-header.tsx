import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex size-full md:min-h-screen mb-2 md:mb-0">
      <div className="content-container md:max-w-[1146px] md:!py-[6rem] !py-0 md:static relative md:h-auto h-fit ">
        <Image
          alt={project.title}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-50"
          src={project.heroImage}
          layout="fill"
          quality={100}
        />
        <div className="relative z-10 flex justify-between">
          <ProjectDataCard project={project} />
        </div>
      </div>
    </header>
  )
}
