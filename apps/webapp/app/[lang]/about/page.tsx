import { PageContent, PageContentData } from '@/components/shared/content'
import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'

export default async function AboutPage({ params: { lang } }:AboutPageProps) {
  const dict = await getDictionary(lang)
  const aboutPageContent: PageContentData = [
    { type: 'h1', text: dict.about.titleOne }, 
    { type: 'p', text: dict.about.textOne }, 
    { type: 'p', text: dict.about.textTwo },
    { type: 'h2', text: dict.about.titleTwo },
    {  type: 'p', text: dict.about.textThree},
    {
      type: 'Image',
      src: '/images/auction-comparison.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert'
    },
    { type: 'h2', text: dict.about.titleThree },
    { type: 'p', text: dict.about.textFour },
    {
      type: 'ul',
      items: [
        dict.about.itemOne,
        dict.about.itemTwo,
      ],
    },
    { type: 'p', text: dict.about.textFive}
  ]
  const content = aboutPageContent
  
  return (
    <div className="content-container !py-10 md:px-3 px-7 md:py-24">
      <PageContent data={content} />
    </div>
  )
}

interface AboutPageProps {
  params: { lang: string }
}


export const metadata: Metadata = {
  title: 'About | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}