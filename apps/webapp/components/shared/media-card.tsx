import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { LangProp } from '@/types/routing.type'
import { YouTubePlaylistItem } from '@/services/youtube/index'
import { VideoDialog } from '@/components/dialogs/video-dialog'
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'  // Import the utility function

export function MediaCard({ video, lang, className }: MediaCardProps) {
  return (
    <VideoDialog
      lang={lang}
      video={video}
      trigger={
        <Card className={cn("p-0 overflow-hidden list-none bg-transparent cursor-pointer border-muted group md:max-h-space-465", className)}>
          <div className="m-3">
            <figure className="relative h-[215px] w-full overflow-hidden rounded-md">
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
                loading="lazy"
                className="object-cover transition-all ease-in-out rounded-md bg-zoom"
                fill
              />
            </figure>
          </div>
          <CardContent className="px-3 mt-2">
            <p className="pt-3 font-semibold leading-tight text-start mb-overflow-hidden truncate_text truncate_text--3-lines text-md">
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
  className?: string  // Add className prop to the interface
}