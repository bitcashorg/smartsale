import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ProjectDataCard } from './project-data-card'

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="relative flex flex-col items-center justify-center size-full gap-11">
      <Image
        alt={project.title}
        className="block object-cover overflow-hidden scale-100 pointer-events-none aspect-video size-full"
        src={project.heroImage}
        width={2000}
        height={2000}
      />
      <ProjectDataCard project={project} />
    </header>
  )
}
