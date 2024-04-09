import { projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'

import { redirect } from 'next/navigation'

const sectionWithBgClassNames = 'flex flex-col gap-11 px-3 md:px-6 lg:px-11 w-full bg-primary/70 backdrop-xl rounded-3xl py-10 md:py-16 lg:py-24'

export default function ProjectPage({
  params
}: {
  params: { project: string }
}) {
  const project = projects.find(p => p.slug == params.project)
  if (!project) redirect('/')

  const projectContent = project.content

  return (
    <main className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {project.title}
                </h1>

                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  {project.registrationOpen
                    ? 'Register to participate in the auction!'
                    : project.auctionClosed
                      ? 'Auction is closed. You can now claim your tokens.'
                      : 'Join the auction and be a part of our project. The countdown has begun!'}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="text-2xl font-bold">
                  <div />
                </div>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={`${project.slug}/auction`}
                >
                  {project.registrationOpen
                    ? 'Register Now!'
                    : project.auctionClosed
                      ? 'Claims your Tokens'
                      : 'Participate Now'}
                </Link>
              </div>
            </div>
            <Image
              alt="Project Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src={project.heroImage}
              width="550"
            />
          </div>
        </div>
      </section>

      {/* // ? ----------------------  HIGHLIGHTS ---------------------- */}
      <section className={sectionWithBgClassNames}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {projectContent.highlights.title}
        </h2>
        {(projectContent.highlights.content as string[][]).map((content, index) => {
          if (content.every((c, i) => c.includes(':'))) {
            return (
              <ul key={`${index}__${(projectContent.highlights.title as string).replace(/\s/g, '-')}`} className="flex flex-col gap-2 list-outside list-disc px-6">
                {content.map(item => (
                  <li>
                    {item.split(':').map((text, index) => (
                      <span key={index} className={!index ? 'font-bold' : ''}>
                        {text}{!index ? ': ' : ''}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            )
          }

          return content.map((item, index) => (
            <p key={`${index}__${(projectContent.highlights.title as string).replace(/\s/g, '-')}`} className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {item}
            </p>
          ))
        })}
      </section>

      {/* // ? ----------------------  PRODUCT ---------------------- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {projectContent.product.title}
        </h2>
        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Learn more about our product and its unique features.
        </p>
      </section>

      {/* // ? ----------------------  PROBLEM ---------------------- */}
      <section className={sectionWithBgClassNames}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {projectContent.problem.title}
        </h2>
        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Understand the problem we aim to solve with our project.
        </p>

        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our project aims to solve the problem of lack of transparency and
          efficiency in the traditional auction process.
        </p>
      </section>

      {/* // ? ----------------------  SOLUTION ---------------------- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Solution
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our project provides a unique solution to the
                problem.
              </p>
            </div>
            <div className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our project leverages blockchain technology to create a
              transparent and efficient auction process, ensuring fair
              opportunities for all participants.
            </div>
          </div>
        </div>
      </section>

      {/* // ? ----------------------  BUSINESS MODEL ---------------------- */}
      <section className={sectionWithBgClassNames}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {projectContent.businessModel.title}
        </h2>
        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Get to know our business model and how we plan to generate
          revenue.
        </p>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our business model revolves around charging a small fee for each
          transaction made on our platform, ensuring a sustainable revenue
          stream.
        </p>
      </section>

      {/* // ? ----------------------  INVESTORS ---------------------- */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Investors
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet our esteemed investors who believe in our vision and
                mission.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Investor Image 1"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 2"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 3"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 4"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* // ? ----------------------  TEAM ---------------------- */}
      {/* <section className={sectionWithBgClassNames}>
        <div className="container md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Team
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet our dedicated team members who are working tirelessly to
                make this project a success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Team Member Image 1"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 2"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 3"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 4"
                className="aspect-square overflow-hidden rounded-md object-cover mix-blend-multiply"
                height="200"
                src="/images/launchpad_img_placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* // ? ----------------------  TOKEN UTILITY ---------------------- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {projectContent.tokenomics.title}
        </h2>
        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Understand the utility of our token and how it contributes to
          the ecosystem.
        </p>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our token serves as the primary medium of exchange on our
          platform, enabling users to participate in auctions and access
          other features.
        </p>
      </section>

      <hr className="border-gray-600/80 mt-24" />
    </main>
  )
}
