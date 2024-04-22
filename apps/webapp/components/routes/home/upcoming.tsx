import { Project } from '@/lib/projects'
import { AuctionCard } from './auction-card'

export function Upcoming({ projects }: { projects: Project[] }) {
  return (
    <section className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10">
      <h1 className="mx-auto md:my-24 my-10 flex flex-col whitespace-pre-line text-center">
        <sub className="h-8 w-full text-xl font-semibold leading-none md:h-10 md:text-2xl">
          {textContent.eyebrow}
        </sub>
        <span
          className="w-full text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          key="upcoming-auctions-title"
        >
          {textContent.title.split('AI/WEB3')[0]}{' '}
          <span className="!text-[#E94FB8]">AI <span className='!text-[#7865ab] font-light'>/</span> WEB3</span>
          {'\n'}
          {textContent.title.split('AI/WEB3')[1]}
        </span>
      </h1>
      <h2 className="w-full py-10 text-center text-3xl font-bold leading-none">
        Upcoming Auctions
      </h2>
      <div
        className="grid scroll-m-3 auto-rows-fr grid-cols-1 gap-6 self-center lg:self-stretch lg:grid-cols-3"
        key="upcoming-auctions-description-container"
      >
        {projects.map((item, index) => (
          <div
            key={`upcoming-auctions-item-${index}`}
            className="box-border size-full justify-center rounded-xl border border-card/30 bg-card/60 backdrop-blur-lg"
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
