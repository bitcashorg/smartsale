'use client'

import { SessionDialog } from '@/components/dialogs/session/session-dialog'
import { OnboardingCarousel } from '@/components/shared/onbording-carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { IconDownRightArrow, IconReferal } from '@/components/ui/icons'
import { useSession } from '@/hooks/use-session'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'

import React from 'react'

export function ReferralSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const { session, toggleShowSessionDialog, loginRedirect } = useSession()
  const router = useRouter()

  const bitcashAccount = session?.account

  const handleCallToAction = () => {
    if (bitcashAccount) {
      router.push('/dashboard/referral')
    } else {
      isMobile ? loginRedirect() : toggleShowSessionDialog()
    }
  }

  return (
    <div className="flex items-center justify-center px-4 pt-20">
      <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-8 bg-[#0F113E] rounded-xl md:flex-row">
        <div className="flex-shrink-0 w-[245px] h-[245px]">
          <IconReferal />
        </div>
        <div className="flex flex-col items-center flex-grow text-center ">
          <h2 className="mb-4 text-cente text-[2.188rem] font-bold leading-normal text-white">
            {content.title}
          </h2>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="w-12 h-1 bg-[#ff00aa] mb-4"></div>
          <p className="mb-4 text-xl font-normal text-white opacity-40">
            {content.paragraph}
          </p>
          <p className="mb-6 font-bold text-white">{content.paragraph2}</p>
          <div className="flex flex-col items-center gap-4 text-xl">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="bg-[#ff00aa] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#ff00dd] transition-colors"
              onClick={handleCallToAction}
            >
              {content.callToAction}
              <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
            </button>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-whitetext-base hover:text-[#ff00aa] focus-within:text-[#ff00aa] transition-colors group inline-block"
                  onClick={() => setIsModalOpen(true)}
                >
                  {content.callToAction2}
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-[#ff00aa]"></span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-auto p-0 bg-transparent border-none shadow-none max-w-none">
                <OnboardingCarousel onClose={() => setIsModalOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <SessionDialog defaultContent="login" />
    </div>
  )
}

const content = {
  title: <>Earn For Sharing With Friends!</>,
  paragraph: (
    <>
      Join our referral program and earn exclusive rewards for every friend you refer. The
      more you share, the more you earn!
    </>
  ),
  paragraph2: <>SHARE • REGISTER • CONTRIBUTE • EARN</>,
  callToAction: <>Start Earning Now</>,
  callToAction2: <>How does it work?</>,
}
