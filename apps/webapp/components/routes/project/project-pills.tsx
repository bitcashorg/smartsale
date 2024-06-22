'use client'

import { Button } from '@/components/ui/button'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ProjectPills({ project }: { project: Project }) {
  const pathname = usePathname()
  const links = [
    {
      label: 'Project Info',
      href: `/${project.slug}`
    },
    {
      label: 'Token Presale',
      href: `/${project.slug}/presale`
    },
    {
      label: 'Token Sale',
      href: `/${project.slug}/auction`
    }
  ]

  return (
    <div className="z-10 mb-6 flex gap-2 md:gap-6">
      {links.map(l => (
        <Link href={l.href} shallow>
          <Button
            variant={'outline'}
            className={cn(
              'hover:bg-white/50 md:min-w-[150px]',
              pathname === l.href ? 'bg-white/50 text-black/90' : null
            )}
          >
            {l.label}
          </Button>
        </Link>
      ))}
    </div>
  )
}
