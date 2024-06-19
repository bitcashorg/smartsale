import { Project } from '@/lib/projects'
import { AuctionCard } from './auction-card'

export function HomeHero({
  projects,
  dict
}: {
  projects: Project[]
  dict: any
}) {
  return (
    <section className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10">
      <h1 className="flex flex-col mx-auto mb-10 text-center whitespace-pre-line md:mb-24">
        <sub className="w-full h-8 text-xl font-semibold leading-none drop-shadow-md md:h-10 md:text-2xl">
          {dict.home.eyebrow}
        </sub>
        <span
          className="w-full text-5xl font-normal drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
          key="upcoming-auctions-title"
        >
          {dict.home.title.split('AI/WEB3')[0]}{' '}
          <span className="!text-[#E94FB8]">
            AI <span className="font-light !text-[#845BBF]">/</span> WEB3
          </span>
          {'\n'}
          {dict.home.title.split('AI/WEB3')[1]}
        </span>
      </h1>
      <h2 className="relative flex justify-center w-full py-10 text-3xl font-bold leading-none text-center">
        {dict.home.upcomingHeading}
        <div className="absolute top-0 blur-effect-bg" />
      </h2>
      <div
        className="grid self-center grid-cols-1 gap-6 scroll-m-3 auto-rows-fr lg:grid-cols-3 lg:self-stretch"
        key="upcoming-auctions-description-container"
      >
        {projects.map((item, index) => (
          <AuctionCard
            key={`upcoming-auctions-item-${index}`}
            project={item}
            dict={dict}
          />
        ))}
      </div>
    </section>
  )
}
