import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export function LearnSection() {
  return (
    <div className="p-8 text-white">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-center heading2">Learn about Bitlauncher</h2>
        {/* <a href="#" className="text-blue-400">
          Explore our Blog &gt;
        </a> */}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="relative p-8">
          <div className="relative w-full h-64 mb-4">
            <Image
              src="/images/placeholder.svg"
              alt="Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <CardHeader className="text-center">
            <CardTitle>How to Participate in a Bitlauncher IDO?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-400">
              A good place to start is: what is Bitlauncher? (We'll give you the
              brief version). Bitlauncher is a platform that connects young
              projects with early community members through initial
              decentralized offerings (IDOs). It provides a unique opportunity
              for investors to engage with up-and-coming tech innovations.
            </p>
            <p className="text-gray-400">
              By participating in an IDO on Bitlauncher, users can gain early
              access to tokens from new blockchain projects. This early access
              can potentially lead to significant benefits if the projects grow
              in value and popularity. Bitlauncher aims to democratize the
              investment process, making it accessible to a broader audience.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8">
          <Card className="relative p-8">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/placeholder.svg"
                alt="Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle>How to buy the Bitlauncher $BC token?</CardTitle>
            </CardHeader>
          </Card>

          <Card className="relative p-8">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/placeholder.svg"
                alt="Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle>
                What is an IDO (Initial Decentralized Offering)?
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
