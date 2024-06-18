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
        <Card className="overflow-hidden list-none cursor-pointer group md:max-h-space-465">
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
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>

        <div className="flex min-h-[70vh] w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
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
