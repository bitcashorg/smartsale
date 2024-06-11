import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArticlesSection } from '@/services/datocms'
import { ArticleCard } from './article-card'
import { LucideIcons } from './lucide-icons'
import { LangProp } from '@/types/routing.type'
const fs = require('fs')

export function BlogSections({ sections, lang }: BlogSectionsProps) {
  fs.writeFileSync('sectionData.json', JSON.stringify(sections[0]))
  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      {sections.map(
        section =>
          section?.articles?.length > 0 && (
            <section className="container mb-10" key={section.name}>
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="pl-3 font-bold text-black dark:text-white">
                  / {section.name}
                </span>
                <Link
                  href={`/${lang}/blog/${section.slug}`}
                  className={cn(
                    'focus-within:!text-primary-200 hover:!text-primary-200 flex items-center align-middle text-black dark:text-white'
                  )}
                >
                  {section.name} articles
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
                {section?.articles?.map((post, index) => (
                  <ArticleCard
                    post={post}
                    sectionSlug={section.slug}
                    key={index}
                    lang={lang}
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
