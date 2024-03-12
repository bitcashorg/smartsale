import { ProjectWithAuction } from '@/lib/projects'

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  return (
    <div className="my-2 flex flex-col items-center rounded-lg bg-gray-200 px-4 py-2 dark:bg-black">
      <div className="flex w-full text-center">
        <h2 className="mt-2 flex w-full justify-between text-xl">
          <b>Ticker: </b>
          {project.token.symbol}
        </h2>
      </div>
      <hr className="my-2 w-full" />
      <div className="flex w-full justify-between text-center">
        <p className="mt-2 flex w-full justify-between whitespace-break-spaces text-xl">
          <b>Current Price: </b>
          $3.75
        </p>
      </div>
    </div>
  )
}
