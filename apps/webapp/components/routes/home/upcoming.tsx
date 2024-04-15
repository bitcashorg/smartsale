import { Project } from '@/lib/projects'
import { AuctionCard } from './auction-card'

export function Upcoming({ projects }: { projects: Project[] }) {
  return (
    <section className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10">
      <h1 className="flex flex-col mx-auto my-24 text-center whitespace-pre-line">
        <sub className="w-full h-8 text-xl font-semibold leading-none md:h-10 md:text-2xl">
          {textContent.eyebrow}
        </sub>
        <span
          className="w-full text-5xl font-bold min-h-44 sm:min-h-52 sm:text-6xl md:text-7xl lg:text-8xl"
          key="upcoming-auctions-title"
        >
          {textContent.title.split('AI/WEB3')[0]}{' '}
          <span className="!text-[#E94FB8]">AI/WEB3</span>
          {'\n'}
          {textContent.title.split('AI/WEB3')[1]}
        </span>
      </h1>
      <h2 className="w-full h-32 pt-6 pb-10 text-3xl font-bold leading-loose text-center">
        Upcoming Auctions
      </h2>
      <div
        className="grid self-center grid-cols-1 gap-6 scroll-m-3 auto-rows-fr md:grid-cols-2 md:self-stretch lg:grid-cols-3"
        key="upcoming-auctions-description-container"
      >
        {projects.map((item, index) => (
          <div
            key={`upcoming-auctions-item-${index}`}
            className="box-border justify-center size-full"
          >
            <AuctionCard {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}

const textContent = {
  title: 'JOIN THE AI/WEB3 REVOLUTION NOW',
  eyebrow: 'Invest In The Intelligent Future'
}
