import { IconDownRightArrow } from '@/components/ui/icons'
import { X } from 'lucide-react'
import React, { useEffect } from 'react'

interface ReferalHomeBannerProps {
  onClose: () => void
  onJoinNow: () => void
  onHowItWorks: () => void
}

export default function ReferralHomeBanner({
  onClose,
  onJoinNow,
  onHowItWorks,
}: ReferalHomeBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      //? Hides banner when user has scrolled past 80% of the page
      if (scrollPosition > (documentHeight - windowHeight) * 0.8) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a29] bg-opacity-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1a1a4ab4] to-[#0d0d35a0] backdrop-blur-[30px] rounded-3xl p-8 max-w-6xl w-full relative">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="absolute top-4 right-4 text-[#e728a9] hover:text-[#ff51ed] transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="space-y-4 text-center">
          <p className="text-2xl font-semibold">{content.subtitle}</p>
          <h1 className="text-4xl font-bold lg:text-7xl sm:text-3xl">{content.title}</h1>
          <p className="text-4xl font-semibold sm:text-2xl lg:text-6xl">
            {content.paragraph}
          </p>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="mx-auto w-[120px] h-[2.37px] bg-[#ff51ed]"></div>
          <p className="max-w-md mx-auto text-[#7a7ca8] text-lg md:text-xl font-semibold leading-[29px]">
            {content.paragraph2}
          </p>
          <div className="bg-[#0F113E] md:w-1/2 px-16 py-[2.625rem] mx-auto shadow-md bg-gradient-to-br to-cornflowerblue-20 rounded-lg justify-between items-center">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="bg-[#e728a9] px-2 md:px-6 py-3 rounded-full font-semibold flex items-center gap-6 mx-auto hover:bg-[#ff00dd] transition-colors"
              onClick={onJoinNow}
            >
              {content.callToAction}
              <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-white text-base font-semibold hover:text-[#e728a9] focus-within:text-[#ff00aa] transition-colors group inline-block pt-3"
              onClick={onHowItWorks}
            >
              {content.callToAction2}
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-[#ff00aa]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const content = {
  title: <>Congrats!</>,
  subtitle: <>Contribute In The Future</>,
  paragraph: (
    <>
      <span className="text-[#ec4899] font-bold">merivercap</span> Invited You To
      Contribute In The Next{' '}
      <span className="text-[#ec4899] font-bold">GLOBAL AI UNICORNS</span>
    </>
  ),
  paragraph2: (
    <>
      Seamlessly buy and pay with cryptocurrencies using our secure and user-friendly
      platform.
    </>
  ),
  callToAction: <>JOIN NOW</>,
  callToAction2: <>How does it work?</>,
}
