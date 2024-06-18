import { YouTubePlaylistItem } from '@/services/youtube/index'
import { MediaCard } from './media-card'
import { LucideIcons } from '@/components/routes/blog/lucide-icons'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LangProp } from '@/types/routing.type'

export function MediaSections({ sections, lang }: MediaSectionsProps) {
  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      {sections.map(
        section =>
          section?.videos?.length > 0 && (
            <section className="container mb-10" key={section.name}>
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="font-semibold text-black sub-2-lg dark:text-white">
                  / {section.name}
                </span>
                <Link
                  href={`/`}
                  className={cn(
                    'flex items-center align-middle text-black focus-within:!text-primary-200 hover:!text-primary-200 dark:text-white'
                  )}
                >
                  {section.name} videos
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="grid-cols-auto-dense grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex-col gap-20 py-5 sm:flex-wrap md:gap-5">
                {section?.videos?.map(video => (
                  <MediaCard video={video} key={video.id} lang={lang} />
                ))}
              </ul>
            </section>
          )
      )}
    </div>
  )
}

export interface MediaSectionsProps extends LangProp {
  children?: React.ReactNode
  sections: MediaSection[]
}

export type MediaSection = {
  name: string
  slug: string
  videos: YouTubePlaylistItem[]
}
