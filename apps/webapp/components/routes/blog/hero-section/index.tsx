import { HeroArticleCard } from '@/components/routes/blog/hero-section/hero-card'
import { HeroSubCard } from '@/components/routes/blog/hero-section/hero-subcard'
import { ArticlesSection } from '@/services/datocms'
import { LangProp } from '@/types/routing.type'

export function HeroSection({ recent, lang }: HeroSectionProps) {
  const main = recent[0]
  const secondary = recent.slice(1, recent.length)
  return (
    <section className="container flex w-full justify-between gap-10 lg:flex-row">
      <HeroArticleCard
        sectionSlug={main?.slug}
        post={main?.articles[0]}
        selectedTopic={null}
        lang={lang}
      />
      <ul className="w-1/2 flex-col space-y-10">
        {secondary?.map(
          (post, index) =>
            post.articles.length > 0 && (
              <HeroSubCard
                sectionSlug={post?.slug}
                post={post.articles[0]}
                key={index}
                selectedTopic={null}
              />
            )
        )}
      </ul>
    </section>
  )
}

interface HeroSectionProps extends LangProp {
  recent: ArticlesSection[]
}
