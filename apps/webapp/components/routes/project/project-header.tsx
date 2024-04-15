import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex min-h-screen size-full ">
      <div className="container flex items-center justify-between px-20">
        <Image
          alt={project.title}
          className="absolute inset-0 object-cover opacity-50 pointer-events-none size-full"
          src={project.heroImage}
          layout="fill"
          quality={100}
        />
        <div className="relative z-10">
          <ProjectDataCard project={project} />
        </div>
      </div>
    </header>
  )
}
