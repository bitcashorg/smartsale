import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { LangProp } from '@/types/routing.type'
import { YouTubePlaylistItem } from '@/services/youtube/index'

export function MediaCard({ video }: MediaCardProps) {
  return (
    <Card className="overflow-hidden list-none group md:max-h-space-465">
      <figure className="relative h-[216px] w-full">
        <Image
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
          loading="lazy"
          className="transition-all ease-in-out bg-zoom"
          fill
        />
      </figure>

      <CardContent className="mt-5">
        <h4
          title={video.snippet.title}
          className="mb-0 text-center text-white truncate_text truncate_text--4-lines text-sub-2-md lg:block"
        >
          {video.snippet.title}
        </h4>
      </CardContent>
    </Card>
  )
}

export interface MediaCardProps extends LangProp {
  video: YouTubePlaylistItem
}
