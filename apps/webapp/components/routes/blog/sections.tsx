import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArticlesSection } from '@/services/datocms'
import { PostCard } from './post-card'
import { LucideIcons } from './lucide-icons'

export function BlogSections({ sections }: BlogSectionsProps) {
  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      {sections.map(
        section =>
          section?.articles?.length > 0 && (
            <section className="container mt-space-80" key={section.name}>
              <div className="flex items-center justify-between mb-space-32">
                <span className="font-semibold text-black sub-2-lg dark:text-white">
                  /{section.name}
                </span>
                <Link
                  href={`/blog/${section.slug}`}
                  className={cn(
                    'focus-within:!text-primary-200 hover:!text-primary-200 text-black dark:text-white '
                  )}
                >
                  <b>Go to category</b>
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {section?.articles?.map((post, index) => (
                  <PostCard
                    post={post}
                    sectionSlug={section.slug}
                    key={index}
                  />
                ))}
              </ul>
            </section>
          )
      )}
    </div>
  )
}

export interface BlogSectionsProps {
  children?: React.ReactNode
  sections: ArticlesSection[]
}
