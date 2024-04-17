import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex size-full min-h-screen ">
      <div className="container flex items-center justify-between md:px-20">
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
