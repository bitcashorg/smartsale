import React from 'react'
import { Metadata } from 'next'
import {
  PageContent,
  PageContentData,
  ContentTextType
} from '@/components/shared/content'
import { getDictionary } from '@/app/dictionaries'

export default async function PrivacyPolicy({ params: { lang } }:PrivacyPolicyProps) {
  const dict = await getDictionary(lang)
  const policiesAndTerms = [
    { title: dict.terms.title2,  content: dict.terms.text2 },
    { title: dict.terms.title3,  content: dict.terms.text3 },
    { title: dict.terms.title4,  content: dict.terms.text4 },
    { title: dict.terms.title5,  content: dict.terms.text5 },
    { title: dict.terms.title6,  content: dict.terms.text6 }
  ]
  const content: PageContentData = [
    { type: 'h1', text: dict.terms.title1 },
    { type: 'p', text: dict.terms.text1 },
    ...policiesAndTerms.flatMap((item, index) => [
      { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
      { type: 'p' as ContentTextType, text: item.content }
    ])
  ]
  return (
    <div className="content-container !py-10 md:px-3 px-7 md:py-24">
      <PageContent data={content} />
    </div>
  )
}

interface PrivacyPolicyProps {
  params: { lang: string }
}

export const metadata: Metadata = {
  title: 'Privacy Policy | Bitlauncher',
  description:
    'Read our Privacy Policy to understand how we protect and manage your data in our crypto launchpad application.'
}
