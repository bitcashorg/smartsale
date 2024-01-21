import { AuctionCard } from "./auction-card";

export function Upcoming() {

  return (
    <div className="p-10">
      <h2 className="mb-6 text-3xl font-bold">Upcoming on Auctions</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {auctionItems.map((item, index) => (
          <AuctionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}


const auctionItems = [
  {
    title: "Citizen Conflict",
    description: "REAL YOU IS NOT ENOUGH",
    fundraiseGoal: "$650,000",
    maxAllocation: "TBA",
    imagePath: "/placeholder-citizen-conflict.svg",
    badgeText: "ALLOWLIST CLOSED",
    linkPath: "/auction/citizen-conflict",
  },
  {
    title: "Overlay Protocol",
    description: "An Exotic Perp Dex Unlocking Endless New Markets",
    fundraiseGoal: "$1,000,000",
    maxAllocation: "TBA",
    imagePath: "/placeholder-overlay-protocol.svg",
    badgeText: "PRE-SALE ACTIVE",
    linkPath: "/auction/overlay-protocol",
  },
  {
    title: "Future Finance",
    description: "Innovating Financial Spaces",
    fundraiseGoal: "$500,000",
    maxAllocation: "$10,000",
    imagePath: "/placeholder-future-finance.svg",
    badgeText: "REGISTRATION OPEN",
    linkPath: "/auction/future-finance",
  }
];
