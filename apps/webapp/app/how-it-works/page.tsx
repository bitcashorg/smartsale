import React from 'react'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">How Smart Sale works</h1>
      <p>
        Smart Sale is a platform enabling fair price discovery for token
        auctions. The aim of the platform is to make it easy for teams to
        discover a fair price for their token.
      </p>
      <p className="mt-2">
        Smart Sale uses batch auctions, which are a popular mechanism for
        ensuring fair price for both the decentralized and traditional finance
        worlds. Batch auctions enable matching of limit orders of buyers and
        sellers with the same clearing price for all participants. From crypto
        use cases like Initial DEX Offerings (like those on the Mesa interface
        for Gnosis Protocol v1) to traditional finance auctions (like Google’s
        IPO and the NYSE Open Auction), batch auctions play an important role in
        the democratization of the auctioned assets. This function is especially
        important for decentralized teams which need to ensure fair token
        distributions while operating trustlessly and efficiently. Batch
        auctions are set to become a fundamental “DeFi Lego” brick for any team
        or community interested in offering their users the most transparent and
        fairest auction-mechanism for their token.
      </p>

      <h2 className="mt-6 mb-4 text-xl font-semibold">
        Comparison of Different Auction Mechanisms
      </h2>
      <p>
        With Smart Sale’s open-source smart contract, projects can quickly and
        securely create their own decentralized fair auctions. Unlike some
        solutions dependent on a centralized curation process, Smart Sale is
        permissionless so that any Ethereum team can deploy & execute batch
        auctions for price finding. Smart Sale allows any Ethereum project or
        community to conduct auctions that:
      </p>
      <Image
        src="/images/auction-comparison.webp"
        alt="Comparison Chart"
        width={720}
        height={400} // Adjust the height as needed
        layout="responsive"
      />
      <h2 className="mt-6 mb-4 text-xl font-semibold">
        Fair Price Discovery with Smart Sale
      </h2>
      <p>
        By providing an easy interface for price discovery with batch auctions,
        Smart Sale enables:
      </p>
      <ul className="pl-6 mt-2 list-disc">
        <li>
          Auctioneers to determine a minimum price they are willing to sell
          their tokens for, and
        </li>
        <li>Bidders to set the maximum price they are willing to pay</li>
      </ul>
      <p className="mt-2">
        These characteristics allow the platform to create a fair pricing
        dynamic in which both participants get either what they were willing to
        receive or more. Additionally the batched time nature of the auctions
        greatly reduces frontrunning and gas bidding wars, decreasing the amount
        of extracted value from auctioneers and bidders.
      </p>
    </div>
  )
}
