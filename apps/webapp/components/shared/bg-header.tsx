import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export function BgHeader({
  heading,
  subheading,
  imageSrc
}: {
  heading: string
  subheading?: string
  imageSrc: string
}) {
  return (
    <header className="relative top-0 z-0 flex flex-col items-center justify-center py-10 bg-center bg-cover min-h-96 md:py-24">
      <Image
        className="absolute inset-0 object-cover bg-black bg-center bg-cover opacity-50 pointer-events-none"
        src={imageSrc}
        fill
        alt={heading}
        priority
      />

      <h1 className="heading mb-6 flex max-w-[70%] justify-center text-center leading-loose drop-shadow-md md:text-6xl">
        <Balancer>{heading}</Balancer>
      </h1>

      {subheading && (
        <h2 className="mx-auto flex w-[70%] justify-center text-center text-xl font-semibold drop-shadow-md">
          {subheading}
        </h2>
      )}
    </header>
  )
}
