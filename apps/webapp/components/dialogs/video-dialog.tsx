import { LangProp } from '@/types/routing.type'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function VideoDialog({ video, trigger }: VideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

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
