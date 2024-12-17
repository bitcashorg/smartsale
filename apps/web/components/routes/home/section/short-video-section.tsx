// import type { YouTubePlaylistItem } from '@smartsale/content'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@smartsale/ui'
// import { Card } from '@smartsale/ui'
// import Image from 'next/image'

// export function ShortVideo({ video }: { video: YouTubePlaylistItem }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Card className="relative flex min-h-[300px] min-w-[170] cursor-pointer">
//           <Image
//             src={video.snippet.thumbnails.high.url}
//             alt={video.snippet.title}
//             layout="fill"
//             objectFit="cover"
//           />
//         </Card>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[1000px]">
//         <DialogHeader>
//           <DialogTitle>{video.snippet.title}</DialogTitle>
//           <DialogDescription>{video.snippet.description}</DialogDescription>
//         </DialogHeader>

//         <div className="flex w-full">
//           <iframe
//             src={`https://www.youtube.com/embed/${video.id}`}
//             frameBorder="0"
//             allowFullScreen
//             // width={}
//           />
//           {/* <YouTubeEmbed
//             videoid={video.id}
//             height={600}
//             width={600}
//             params="controls=0"
//           /> */}
//         </div>

//         {/* <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter> */}
//       </DialogContent>
//     </Dialog>
//   )
// }

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function ShortVideoStrip({ videos }: { videos: any[] }) {
  return (
    <section className="flex items-center justify-start gap-10">
      {videos.map((video) => (
        <ShortVideo key={video.id} video={video} />
      ))}
    </section>
  )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function ShortVideo({ video }: { video: any }) {
  return <div>ShortVideo</div>
}
