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
  return (
    <div className={cn('flex-colt flex w-full pt-10', className)}>
      {sections.map(
        section =>
          section?.articles?.length > 0 && (
            <section
              // this is hack be careful when passing className to this component
              className={cn(
                'w-full',
                section !== sections[sections.length - 1] && 'mb-10',
                className
              )}
              key={section.name}
            >
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="font-semibold sub-2-lg">/ {section.name}</span>
                <Link
                  // TODO: fix add lang prefix on links
                  //       there seems to a bug where it gets ovewritten
                  href={`/blog/${category || section.slug}`}
                  className={cn('flex items-center align-middle')}
                >
                  {section.name}
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] flex-col gap-5 py-5 sm:flex-wrap">
                {section?.articles
                  // ?.slice(0, 4)
                  ?.map(post => (
                    <ArticleCard
                      post={post}
                      sectionSlug={category || section.slug}
                      key={post.id}
                      lang={lang}
                      meta={true}
                    />
                  ))}
              </div>
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
