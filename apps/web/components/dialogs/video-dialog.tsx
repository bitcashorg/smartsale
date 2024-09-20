import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { LangProp } from '@/types/routing.type'

const BASE_YT_EMBED_URL = 'https://www.youtube.com/embed/'

export function VideoDialog({ video, trigger }: VideoDialogProps) {
  const videoSource = BASE_YT_EMBED_URL + video.snippet.resourceId.videoId
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>

        <div className="flex min-h-[70vh] w-full">
          <iframe
            src={videoSource}
            rel='0'
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

export interface VideoDialogProps extends LangProp {
  video: CustomVideoType
  trigger: React.ReactNode
}

export interface CustomVideoType {
  snippet: {
    title: string
    description: string
    resourceId: {
      videoId: string
    }
  }
}
