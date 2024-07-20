import { Project, ProjectWithAuction } from '@/lib/projects'
import { ProjectInfo } from './project-info'
import { ProjectGridCard } from '@/components/routes/project/project-grid-card'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <ProjectGridCard>
      <ProjectInfo project={project as ProjectWithAuction} />
    </ProjectGridCard>
  )
}
