import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ReactNode } from 'react'

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
          layout="fill"
          objectFit="cover"
          quality={100}
          sizes=""
          priority
        />
      </div>
      {children}
    </header>
  )
}
