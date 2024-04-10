import { ProjectWithAuction } from '@/lib/projects'

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  return (
    <div className="my-2 flex flex-col items-center rounded-lg px-4 py-2 bg-muted">
      <div className="flex w-full text-center">
        <h3 className="mt-2 flex w-full justify-between">
          <span className="opacity-70">Ticker: </span>
          <b>{project.token.symbol}</b>
        </h3>
      </div>
      <hr className="my-2 w-full border-accent/50" />
      <div className="flex w-full justify-between text-center">
        <h3 className="mt-2 flex w-full justify-between whitespace-break-spaces">
          <span className="opacity-70">Current Price: </span>
          <b>$3.75</b>
        </h3>
      </div>
    </div>
  )
}
