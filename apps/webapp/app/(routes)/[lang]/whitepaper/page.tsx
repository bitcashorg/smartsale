import { WhitepaperPageLanding } from '@/components/routes/wallpaper'
import { getDictionary } from '@/dictionaries'
import { CommonPageProps } from '@/types/routing.type'
import { Metadata } from 'next'

export default async function WhitepaperPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 sm:px-6 md:px-3 md:py-24">
      <WhitepaperPageLanding
        params={{
          lang: 'en'
        }}
      />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Bitlauncher',
  description: 'Whitepaper'
}
