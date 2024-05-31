import React from 'react'
import { Metadata } from 'next'
import {
  PageContent,
  PageContentData,
  ContentTextType
} from '@/components/shared/content'
import { getDictionary } from '@/app/dictionaries'

export default async function SecurityTips({ params: { lang } }:SecurityTipsProps) {
  const dict = await getDictionary(lang)
  const securityTips = [
    { title: dict.security.title2,  content: dict.security.text2 },
    { title: dict.security.title3,  content: dict.security.text3 },
    { title: dict.security.title4,  content: dict.security.text4 },
    { title: dict.security.title5,  content: dict.security.text5 },
    { title: dict.security.title6,  content: dict.security.text6 },
    { title: dict.security.title7,  content: dict.security.text7 },
    { title: dict.security.title8,  content: dict.security.text8 }
  ]
  const content: PageContentData = [
    { type: 'h1', text: dict.security.title1 },
    { type: 'p', text: dict.security.text1 },
    ...securityTips.flatMap((tip, index) => [
      { type: 'h2' as ContentTextType, text: `${tip.title}` },
      { type: 'p' as ContentTextType, text: tip.content }
    ])
  ]
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <PageContent data={content} />
    </div>
  )
}

interface SecurityTipsProps {
  params: { lang: string }
}

export const metadata: Metadata = {
  title: 'Security Tips | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}