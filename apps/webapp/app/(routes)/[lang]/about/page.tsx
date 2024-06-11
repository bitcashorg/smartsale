import { getDictionary } from '@/dictionaries'
import { CommonPageProps } from '@/types/routing.type'
import { PageContent } from '@/components/shared/content'
import { Metadata } from 'next'

export default async function AboutPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <PageContent data={dict.about.content} />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
