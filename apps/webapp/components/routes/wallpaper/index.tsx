import { CommunityCard } from '@/components/shared/community-card'
import { HeroContent } from '@/components/shared/hero-content'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import { WhitepaperSidebar } from './content'
import { whitepaperParagraphs } from './static'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'

export async function WhitepaperPageLanding({
  params: { lang }
}: WhitepaperPageProps) {
  const dict = await getDictionary(lang)
  function renderContent(content: any) {
    switch (content.type) {
      case 'p':
        return <p>{content.text}</p>
      case 'h2':
        return <h2>{content.text}</h2>
      default:
        return null
    }
  }
  return (
    <>
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="container px-0 md:px-6">
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-['Futura PT'] text-7xl tracking-tighter">
                Whitepaper
              </h2>
              <HeroContent paragraphs={whitepaperParagraphs} />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="infopages-background infopages-background--whitepaper">
                <div className="absolute bottom-0 m-4">
                  <CommunityCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-0 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <WhitepaperSidebar />
        </div>
        <div className="lg:col-span-3">
          {WITHE_PAPER.sections.map((section, index) => (
            <div key={index}>
              <h1>{section.title}</h1>
              {section.content.map((content, idx) => (
                <div key={idx}>
                  {renderContent(content)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

interface WhitepaperPageProps {
  params: { lang: Lang }
}