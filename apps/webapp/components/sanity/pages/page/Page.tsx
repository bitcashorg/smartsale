import { CustomPortableText } from '@/components/sanity/shared/CustomPortableText'
import { Header } from '@/components/sanity/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div>
      <Header title={title} description={overview} />
      {body && <CustomPortableText paragraphClasses="paragraph" value={body} />}
    </div>
  )
}

export default Page
