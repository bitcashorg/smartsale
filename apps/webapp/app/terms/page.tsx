import { PageContent, PageContentData } from '@/components/shared/content'
import { Metadata } from 'next'

export default function TermsPage() {
  return (
    <div className="content-container">
      <PageContent data={content} />
    </div>
  )
}

const content: PageContentData = [
  { type: 'h1', text: '   Terms & Privacy Policy' }
]

export const metadata: Metadata = {
  title: 'terms and conditions | bitlauncher',
  description:
    'Invest in the intelligent future and join the Ai/Web3 revolution now!'
}
