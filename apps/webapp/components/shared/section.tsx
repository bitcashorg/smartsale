import React from 'react'

export function Section({ heading, children, blur = false }: SectionProps) {
  return (
    <section className="z-10 flex flex-col justify-center pt-10 align-center blur-effect-bg">
      <h2 className="relative flex justify-center w-full py-10 text-3xl font-bold leading-none text-center">
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  )
}

interface SectionProps {
  heading: string
  children: React.ReactNode
}
