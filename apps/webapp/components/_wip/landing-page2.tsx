import Link from 'next/link'
import Image from 'next/image'

export function LandingPage2({ content }: LandingPage2Props) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {content.title}
            </div>
            <h2 className="heading tracking-tighter sm:text-5xl">
              {content.heading}
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.description}
            </p>
          </div>
          <ul className="grid gap-2 py-4">
            {content.features.map((feature, index) => (
              <li key={index}>
                <feature.icon className="mr-2 inline-block h-4 w-4" />
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            {content.links.map((link, index) => (
              <Link key={index} className={link.className} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <Image
          alt={content.image.alt}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height={content.image.height}
          src={content.image.src}
          width={content.image.width}
          layout="responsive"
        />
      </div>
    </section>
  )
}
interface Feature {
  icon: any
  text: string
}

interface Links {
  href: string
  text: string
  className: string
}

interface Images {
  alt: string
  src: string
  width: number
  height: number
}

export interface LandingPageContent2 {
  title: string
  heading: string
  description: string
  features: Feature[]
  links: Links[]
  image: Images
}

interface LandingPage2Props {
  content: LandingPageContent2
}
