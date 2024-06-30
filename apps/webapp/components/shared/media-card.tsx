import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { LangProp } from '@/types/routing.type'
import { YouTubePlaylistItem } from '@/services/youtube/index'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function MediaCard({ video }: MediaCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer list-none overflow-hidden border-muted bg-transparent p-0 md:max-h-space-465">
          <div className="m-3">
            <figure className="relative h-[215px] w-full overflow-hidden rounded-md">
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
                loading="lazy"
                className="bg-zoom rounded-md object-contain transition-all ease-in-out"
                fill
              />
            </figure>
          </div>
          <CardContent className="mt-2">
            <p className="truncate_text truncate_text--3-lines text-sub-2-sm mb-0 overflow-hidden pt-3 text-center text-white">
              {video.snippet.title}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>

        <div className="flex min-h-[70vh] w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=1&rel=0`}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export interface MediaCardProps extends LangProp {
  video: YouTubePlaylistItem
}
