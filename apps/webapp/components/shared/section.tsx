import React from 'react'
import Balancer from 'react-wrap-balancer'

export function Section({ heading, children, subheading }: SectionProps) {
  return (
    <section className="align-center flex flex-col justify-center pb-0 pt-40 text-center">
      <h2 className="relative z-10 flex w-full justify-center py-0 text-center text-3xl font-bold leading-none shadow-sm">
        <Balancer>{heading}</Balancer>
      </h2>
      {/* {subheading ? (
        <p className="mx-auto max-w-[700px] pb-0 pt-3 text-center text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {subheading}
        </p>
      ) : null} */}
      <div className="pt-10">{children}</div>
    </section>
  )
}

interface SectionProps {
  heading: string
  subheading?: string
  children: React.ReactNode
}
