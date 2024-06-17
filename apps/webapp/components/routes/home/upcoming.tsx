import { Project } from '@/lib/projects'
import { AuctionCard } from './auction-card'

export function Upcoming({
  projects,
  dict
}: {
  projects: Project[]
  dict: any
}) {
  return (
    <section className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10">
      <h1 className="mx-auto mb-10 flex flex-col whitespace-pre-line text-center md:mb-24">
        <sub className="h-8 w-full text-xl font-semibold leading-none drop-shadow-md md:h-10 md:text-2xl">
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
      <h2 className="heading2 relative flex w-full justify-center py-10 text-center text-3xl font-extrabold leading-loose tracking-tight">
        {dict.home.upcomingHeading}
        <div className="blur-effect-bg absolute top-0" />
      </h2>
      <div
        className="grid scroll-m-3 auto-rows-fr grid-cols-1 gap-6 self-center lg:grid-cols-3 lg:self-stretch"
        key="upcoming-auctions-description-container"
      >
        {projects.map((item, index) => (
          <div
            key={`upcoming-auctions-item-${index}`}
            className="box-border size-full justify-center rounded-xl border border-card/30 bg-card backdrop-blur-lg"
          >
            <AuctionCard project={item} dict={dict} />
          </div>
        ))}
      </div>
    </section>
  )
}
