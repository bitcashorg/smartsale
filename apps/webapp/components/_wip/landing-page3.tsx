import Link from 'next/link'
import Image from 'next/image'

export function LandingPage3({ content }: LandingPage3Props) {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="tracking-tighter heading sm:text-5xl">
                {content.title}
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {content.description}
              </p>
            </div>
          </div>
          <Image
            alt={content.image.alt}
            className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
            height={content.image.height}
            src={content.image.src}
            width={content.image.width}
            layout="responsive"
          />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4">
          <div className="inline-flex h-[270.37px] flex-col items-center justify-start gap-[37px]">
            <div className="font-['Futura PT'] text-center font-medium leading-[42.35px] text-neutral-50 text-3xl heading">
              Driving Global AI And Crypto Advancement
              <br />
              Through Strategic Tokenomics
            </div>
            <div className="h-[2.37px] w-[118.61px] bg-[#ff51ed]"></div>
            <div className="self-stretch text-center text-xl/relaxed font-normal text-[#7e8097] font-['Futura PT']">
              <span className="leading-snug">
                Through our{' '}
              </span>
              <span className="font-bold leading-snug text-white">
                unique tokenomics
              </span>
              <span className="leading-snug">
                , including a dynamic burn and mint model, we ensure that our
                tokens reflect true economic value, promoting stability and
                growth within our ecosystem. Our global-first approach ensures
                that we cater to a worldwide audience, providing tools and
                resources that are accessible to innovators around the globe.
              </span>
              <span className="font-bold leading-snug text-white">
                {' '}
                Join us at Bitlauncher
              </span>
              <span className="leading-snug">
                {' '}
                as we pave the way for a new era of technological advancement
                and community empowerment in the AI and crypto space.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface Image {
  alt: string
  src: string
  width: number
  height: number
}

export interface LandingPageContent3 {
  title: string
  description: string
  image: Image
}

interface LandingPage3Props {
  content: LandingPageContent3
}
