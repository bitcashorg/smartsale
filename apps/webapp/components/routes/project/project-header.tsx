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
        <div className="relative z-10 flex justify-between">
          <ProjectDataCard project={project} />
        </div>
      </div>
    </header>
  )
}
