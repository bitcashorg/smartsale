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
        <Card className="p-0 overflow-hidden list-none bg-transparent cursor-pointer group border-muted md:max-h-space-465">
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
          <CardContent className="mt-2">
            <p className="pt-3 mb-0 overflow-hidden text-center text-white truncate_text truncate_text--3-lines text-sub-2-sm">
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
