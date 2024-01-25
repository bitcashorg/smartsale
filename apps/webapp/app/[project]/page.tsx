import { projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'

import { redirect } from 'next/navigation'

export default function ProjectPage({
  params
}: {
  params: { project: string }
}) {
  const project = projects.find(p => p.slug == params.project)
  if (!project) redirect('/')

  return (
    <main className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {project.title}
                </h1>
                {project.auctionId ? (
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join the auction and be a part of our project. The countdown
                    has begun!
                  </p>
                ) : null}
              </div>
              {project.auctionId ? (
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="text-2xl font-bold">
                    <div />
                  </div>
                  <Link
                    className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/masterbots/auction"
                  >
                    Participate Now
                  </Link>
                </div>
              ) : null}
            </div>
            <Image
              alt="Project Image"
              className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src={project.heroImage}
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Highlights
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {project.pitch}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Highlight Image 1"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src={project.heroImage}
                width="200"
              />
              <Image
                alt="Highlight Image 2"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Highlight Image 3"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Highlight Image 4"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Product
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn more about our product and its unique features.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Product Image 1"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Product Image 2"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Product Image 3"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Product Image 4"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Problem
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Understand the problem we aim to solve with our project.
              </p>
            </div>
            <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our project aims to solve the problem of lack of transparency and
              efficiency in the traditional auction process.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Solution
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover how our project provides a unique solution to the
                problem.
              </p>
            </div>
            <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our project leverages blockchain technology to create a
              transparent and efficient auction process, ensuring fair
              opportunities for all participants.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Business Model
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get to know our business model and how we plan to generate
                revenue.
              </p>
            </div>
            <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our business model revolves around charging a small fee for each
              transaction made on our platform, ensuring a sustainable revenue
              stream.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Investors
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet our esteemed investors who believe in our vision and
                mission.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Investor Image 1"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 2"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 3"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Investor Image 4"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Team
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet our dedicated team members who are working tirelessly to
                make this project a success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt="Team Member Image 1"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 2"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 3"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <Image
                alt="Team Member Image 4"
                className="object-cover overflow-hidden rounded-md aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Token Utility
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Understand the utility of our token and how it contributes to
                the ecosystem.
              </p>
            </div>
            <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our token serves as the primary medium of exchange on our
              platform, enabling users to participate in auctions and access
              other features.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
