'use client'

import { VideoDialog } from '@/components/dialogs/video-dialog'
import { NestedLinkButton } from '@/components/nextjs/nested-link'
import ReferralHomeBanner from '@/components/shared/referral-hero-banner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import React from 'react'
import Balancer from 'react-wrap-balancer'

// ? Hero must be always minimum of 90vh and reducing it by coyunting the height of the header.
// ? This way user would be able to see a hint of the next section.
export function NewHomeHero() {
  const searchParams = useSearchParams()
  const referrer = searchParams.get('referrer')
  const [showBanner, setShowBanner] = React.useState(!!referrer)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!referrer) return
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition > (documentHeight - windowHeight) * 0.2) {
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setShowBanner(false) //? Hide the banner after scrolling
    }
  }

  return (
    <section className="narrow-container mb-0 flex min-h-[calc(90vh-70px)] flex-col justify-between relative">
      {showBanner && referrer && (
        <ReferralHomeBanner
          onClose={() => setShowBanner(false)}
          onJoinNow={() => scrollToSection('steps')}
          onHowItWorks={() => scrollToSection('features')}
        />
      )}

      <div className="flex flex-col items-center justify-center flex-1 p-6 lg:flex-row">
        <div className="text-left">
          <h1 className="heroHeading">
            <Balancer>
              EARLY ACCESS
              <br />
              TO THE NEXT <span className="text-accent-400">GLOBAL AI</span> <br />
              <span className="text-accent-400">UNICORNS</span>
            </Balancer>
          </h1>
        </div>
        <div className="relative mt-16 lg:ml-16 lg:mt-0">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full bg-accent-400 sm:h-[400px] sm:w-[400px]"></div>
          <Image
            src="/images/home/horse.png"
            alt="AI Unicorn"
            width={400}
            height={400}
            className="relative object-contain h-[400px] w-[400px]"
          />
        </div>
      </div>

      <footer className="flex flex-col items-center justify-between p-6 pb-10 space-y-4 md:flex-row md:space-y-0">
        <VideoDialog
          lang={'en'}
          video={{
            snippet: {
              title: 'Bitlauncher: Register for Presale Now',
              description: '',
              resourceId: {
                videoId: 'U6vn3KOEwcQ',
              },
            },
          }}
          trigger={
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex justify-center p-2 text-center text-black align-middle bg-white rounded-full">
                <PlayIcon className="w-4 h-4" />
              </div>
              <span>Watch trailer</span>
            </div>
          }
        />
        <Card
          // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
          onClick={() => (window.location.href = '/en/bitcash-bitlauncher')}
          className="flex items-center justify-center gap-3 p-3 text-center align-middle bg-white cursor-pointer"
        >
          <div className="flex items-center justify-center -space-x-3">
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

          <p className="flex items-center px-2 leading-none text-center text-black">
            Join Our Community
            <br /> of Contributors
          </p>

          <Suspense
            fallback={
              <Button className="flex h-14 w-14">
                <IconDownRightArrow />
              </Button>
            }
          >
            <NestedLinkButton
              link={'/en/bitcash-bitlauncher'}
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                }),
                'text-md group relative flex size-14 min-h-14 min-w-14 rounded-full bg-pink-500 !p-0 font-bold hover:bg-pink-500',
              )}
              // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
              aria-label={`View`}
              // data-title={title}
            >
              <IconDownRightArrow
                strokeColor="white"
                className="!size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45"
              />
            </NestedLinkButton>
          </Suspense>
        </Card>
      </footer>
    </section>
  )
}
