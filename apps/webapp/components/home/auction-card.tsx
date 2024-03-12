import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function AuctionCard(props: Project) {
  const {
    title,
    pitch,
    fundraiseGoal,
    maxAllocation,
    heroImage,
    badgeText,
    linkPath
  } = props

  const isAuctionClosed = badgeText === 'AUCTION CLOSED'

  return (
    <CardContainer className="w-full">
      <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:max-w-[30rem]  ">
        <CardItem
          translateZ="75"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {pitch}
        </CardItem>
        <CardItem
          translateZ="100"
          className="relative mt-4 w-full"
          badge={badgeText}
        >
          <Image
            src={heroImage}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="60"
          className="mt-4 flex w-full flex-col space-y-1"
        >
          <div className="flex justify-between">
            <b>Fundraising Goal</b>
            <span>{fundraiseGoal}</span>
          </div>
          <div className="flex justify-between">
            <b>Max allocation</b>
            <span>{maxAllocation}</span>
          </div>
        </CardItem>
        <div className="mt-10 flex items-center justify-between">
          <CardItem
            translateZ={20}
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            <Link
              href={linkPath}
              className="hover:text-link focus-within:text-link w-full"
              shallow={true}
            >
              See more →
            </Link>
          </CardItem>
          <CardItem translateZ={20} as="span">
            <Link
              href={isAuctionClosed ? '#' : `${linkPath}/auction`}
              className={cn(
                'hover:text-link focus-within:text-link w-full rounded-md bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black',
                { 'cursor-not-allowed opacity-60': isAuctionClosed }
              )}
              shallow
            >
              Register Now!
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

// ? Keeping old code for reference
// <Link href={linkPath} className="w-full" shallow={true}>
//   <Card className="bg-[#1e293b]">
//     <CardHeader>
//       <div className="relative">
//         <Image
//           alt={title}
//           className="w-full h-auto rounded-t-md"
//           height="200"
//           src={heroImage}
//           style={{
//             aspectRatio: '350/200',
//             objectFit: 'cover'
//           }}
//           width="350"
//         />
//         <Badge className="absolute top-4 right-4" variant="secondary">
//           {badgeText}
//         </Badge>
//       </div>
//     </CardHeader>
//     <CardContent>
//       <h3 className="mt-4 text-xl font-semibold">{title}</h3>
//       <p className="mt-1 text-sm opacity-70">{pitch}</p>
//       <div className="flex flex-col mt-4 space-y-1">
//         <div className="flex justify-between">
//           <span>Fundraise Goal</span>
//           <span>{fundraiseGoal}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Max allocation</span>
//           <span>{maxAllocation}</span>
//         </div>
//       </div>
//     </CardContent>
//     {/* <CardFooter className="mt-4">

//             <Button className="w-full" variant="default">
//               TOKEN SALE
//             </Button>

//         </CardFooter> */}
//   </Card >
// </Link >
