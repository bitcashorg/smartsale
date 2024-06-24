import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArticlesSection } from '@/services/datocms'
import { ArticleCard } from '../../shared/article-card'
import { LucideIcons } from './lucide-icons'
import { LangProp } from '@/types/routing.type'

export function BlogSections({
  sections,
  lang,
  category,
  className
}: BlogSectionsProps) {
  console.log('sections', lang)
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-start py-10',
        className
      )}
    >
      {sections.map(
        section =>
          section?.articles?.length > 0 && (
            <section
              // this is hack be careful when passing className
              className={cn('container mb-10', className)}
              key={section.name}
            >
              <div className="mb-space-32 flex items-center justify-between text-xl">
                <span className="sub-2-lg font-semibold text-black dark:text-white">
                  / {section.name}
                </span>
                <Link
                  // TODO: fix add lang prefix on links
                  //       there seems to a bug where it gets ovewritten
                  href={`/blog/${category || section.slug}`}
                  className={cn(
                    'flex items-center align-middle text-black focus-within:!text-primary-200 hover:!text-primary-200 dark:text-white'
                  )}
                >
                  {section.name}
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
                {section?.articles?.map(post => (
                  <ArticleCard
                    post={post}
                    sectionSlug={category || section.slug}
                    key={post.id}
                    lang={lang}
                    meta={true}
                  />
                ))}
              </ul>
            </section>
          )
      )}
    </div>
  )
}
export interface BlogSectionsProps extends LangProp {
  children?: React.ReactNode
  sections: ArticlesSection[]
  category?: string
  className?: string
}
