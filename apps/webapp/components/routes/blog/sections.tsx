import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArticlesSection } from '@/services/datocms'
import { ArticleCard } from './article-card'
import { LucideIcons } from './lucide-icons'
import { LangProp } from '@/types/routing.type'

export function BlogSections({ sections, lang }: BlogSectionsProps) {
  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      {sections.map(
        section =>
          section?.articles?.length > 0 && (
            <section className="container mb-10" key={section.name}>
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="font-semibold text-black sub-2-lg dark:text-white">
                  / {section.name}
                </span>
                <Link
                  href={`/${lang}/blog/${section.slug}`}
                  className={cn(
                    'flex items-center align-middle text-black focus-within:!text-primary-200 hover:!text-primary-200 dark:text-white'
                  )}
                >
                  {section.name} articles
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
                {section?.articles?.map(post => (
                  <ArticleCard
                    post={post}
                    sectionSlug={section.slug}
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
}
