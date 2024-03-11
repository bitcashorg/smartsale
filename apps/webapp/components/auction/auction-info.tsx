import { ProjectWithAuction } from '@/lib/projects'

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  return (
    <div className="flex flex-col items-center my-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-black">
      <div className="flex w-full text-center">
        <h2 className="mt-2 text-xl flex justify-between w-full">
          <b>Ticker: </b>
          {project.token.symbol}
        </h2>
      </div>
      <hr className="w-full my-2" />
      <div className="flex w-full text-center justify-between">
        <p className="mt-2 text-xl flex justify-between w-full whitespace-break-spaces">
          <b>Current Price: </b>
          $3.75
        </p>
      </div>
    </div>
  )
}
