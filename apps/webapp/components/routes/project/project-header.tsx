import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'
import { ProjectShare } from './project-share'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex min-h-screen size-full ">
      <div className="container flex items-center justify-between md:px-20">
        <Image
          alt={project.title}
          className="absolute inset-0 object-cover opacity-50 pointer-events-none size-full"
          src={project.heroImage}
          layout="fill"
          quality={100}
        />
        <div className="relative z-10 flex justify-between">
          <ProjectDataCard project={project} />
          <ProjectShare project={project} />
        </div>
      </div>
    </header>
  )
}
