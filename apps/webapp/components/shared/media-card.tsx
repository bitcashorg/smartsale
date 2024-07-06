import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { LangProp } from '@/types/routing.type'
import { YouTubePlaylistItem } from '@/services/youtube/index'
import { VideoDialog } from '@/components/dialogs/video-dialog'
import Balancer from 'react-wrap-balancer'

export function MediaCard({ video, lang }: MediaCardProps) {
  return (
    <VideoDialog
      lang={lang}
      video={video}
      trigger={
        <Card className="group cursor-pointer list-none overflow-hidden border-muted bg-transparent p-0 md:max-h-space-465">
          <div className="m-3">
            <figure className="relative h-[215px] w-full overflow-hidden rounded-md">
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
                loading="lazy"
                className="bg-zoom rounded-md object-cover transition-all ease-in-out"
                fill
              />
            </figure>
          </div>
          <CardContent className="mt-2">
            <p className="truncate_text truncate_text--3-lines text-sub-2-sm mb-0 overflow-hidden pt-3 text-center text-white">
              <Balancer>{video.snippet.title}</Balancer>
            </p>
          </CardContent>
        </Card>
      }
    />
  )
}

export interface MediaCardProps extends LangProp {
  video: YouTubePlaylistItem
}
