import { Button, buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ArrowRightIcon, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import { VideoDialog } from '@/components/dialogs/video-dialog'
import { IconDownRightArrow } from '@/components/ui/icons'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'
import { NestedLinkButton } from '@/components/nextjs/nested-link'
import Link from 'next/link'

export function NewHomeHero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden">
      <main className="flex flex-1 flex-col-reverse items-center justify-center p-6 md:flex-row-reverse">
        <div className="relative ml-16 mt-16 md:mt-0">
          <div className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full bg-pink-500"></div>
          <Image
            src="/images/home/horse.png"
            alt="AI Unicorn"
            width={400}
            height={400}
            className="relative h-[400px] w-[400px]"
          />
        </div>
        <div className="text-left">
          <h1 className="text-6xl font-bold">
            &nbsp; EARLY ACCESS TO <br />
            THE NEXT <span className="text-pink-500">GLOBAL</span> <br />
            <span className="text-pink-500">AI UNICORNS</span>
          </h1>
          <Link href="/bitcash-bitlauncher">
            <p className="mt-8 flex items-center gap-1">
              EXPLORE MORE
              <ArrowRightIcon className="mt-[-1px] h-5 w-5" />
            </p>
          </Link>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-between space-y-4 p-6 md:flex-row md:space-y-0">
        <VideoDialog
          lang={'en'}
          video={{
            snippet: {
              title: 'Bitlauncher: Register for Presale Now',
              description: '',
              resourceId: {
                videoId: 'U6vn3KOEwcQ'
              }
            }
          }}
          trigger={
            <Button variant="outline" className="flex items-center space-x-2">
              <PlayIcon className="h-5 w-5" />
              <span>watch features video</span>
            </Button>
          }
        />

        <Card className="flex items-center justify-center gap-3 bg-white p-3 text-center align-middle">
          <div className="flex items-center justify-center -space-x-3 overflow-hidden">
            <Avatar>
              <AvatarImage src="/images/home/hero/user-one.png" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/images/home/hero/user-two.png" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/images/home/hero/user-three.png" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>

          <p className="flex items-center px-2 text-center leading-none text-black">
            Join thousands
            <br /> of happy users
          </p>

          <Suspense
            fallback={
              <Button className="flex">
                <IconDownRightArrow />
              </Button>
            }
          >
            <NestedLinkButton
              link={'/en/bitcash-bitlauncher'}
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                  size: 'lg'
                }),
                'text-md group relative flex size-14 rounded-full bg-pink-500 p-0 font-bold hover:bg-pink-500'
              )}
              aria-label={`View`}
              // data-title={title}
            >
              <IconDownRightArrow
                strokeColor="white"
                className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45"
              />
            </NestedLinkButton>
          </Suspense>
        </Card>
      </footer>
    </section>
  )
}
