import Image from 'next/image'

const howItWorksClassNames = {
  container: 'flex flex-col gap-3 lg:px-20 max-w-screen-xl',
  h1: 'mb-4 text-2xl font-bold',
  h2: 'mt-6 mb-4 text-xl font-semibold',
  paragraph: 'my-2',
  article:
    'flex flex-col gap-3 p-3 sm:p-10 rounded-md border bg-gray-50 dark:bg-black',
  list: 'pl-6 mt-2 list-disc [&_li]:mt-2',
  code: 'dark:invert'
}

export default function HowItWorks() {
  return (
    <div className={howItWorksClassNames.container}>
      <h1 className={howItWorksClassNames.h1}>How Smart Sale works</h1>
      <p className={howItWorksClassNames.paragraph}>
        Smart Sale is a platform enabling fair price discovery for token
        auctions. The aim of the platform is to make it easy for teams to
        discover a fair price for their token.
      </p>
      <p className={howItWorksClassNames.paragraph}>
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

      <h2 className={howItWorksClassNames.h2}>
        Comparison of Different Auction Mechanisms
      </h2>
      <p className={howItWorksClassNames.paragraph}>
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
        className={howItWorksClassNames.code}
      />
      <h2 className={howItWorksClassNames.h2}>
        Fair Price Discovery with Smart Sale
      </h2>
      <p className={howItWorksClassNames.paragraph}>
        By providing an easy interface for price discovery with batch auctions,
        Smart Sale enables:
      </p>
      <ul className="mt-2 list-disc pl-6">
        <li>
          Auctioneers to determine a minimum price they are willing to sell
          their tokens for, and
        </li>
        <li>Bidders to set the maximum price they are willing to pay</li>
      </ul>
      <p className={howItWorksClassNames.paragraph}>
        These characteristics allow the platform to create a fair pricing
        dynamic in which both participants get either what they were willing to
        receive or more. Additionally the batched time nature of the auctions
        greatly reduces frontrunning and gas bidding wars, decreasing the amount
        of extracted value from auctioneers and bidders.
      </p>
      <p className={howItWorksClassNames.paragraph}>
        The depositAndPlaceOrder function, typically found in auction or trading
        platforms like Gnosis or its forks, including bitLauncher, serves a dual
        purpose within the context of smart contracts, especially when
        interacting with blockchain-based auction systems. Heres a breakdown of
        its functionality
      </p>

      <article className={howItWorksClassNames.article}>
        <h2 className={howItWorksClassNames.h2}>Purpose</h2>
        <ul className={howItWorksClassNames.list}>
          <li>
            <strong>Deposit:</strong> Allows users to deposit funds into the
            smart contract, acting as a bid in an auction or payment for placing
            an order.
          </li>
          <li>
            <strong>Place Order:</strong> Enables users to place an order within
            the auction, specifying details such as the amount of tokens desired
            and the price.
          </li>
        </ul>

        <h2 className={howItWorksClassNames.h2}>Parameters</h2>
        <p className={howItWorksClassNames.paragraph}>
          Common parameters include:
        </p>
        <ul className={howItWorksClassNames.list}>
          <li>
            <code>auctionId</code>: Identifies the auction.
          </li>
          <li>
            <code>amount</code> or <code>_minBuyAmounts</code>: The amount of
            tokens to buy or the minimum bid amount.
          </li>
          <li>
            <code>token</code> or <code>currency</code>: The token or currency
            used for the order.
          </li>
          <li>
            <code>userData</code>: Additional data related to the order.
          </li>
        </ul>

        <h2 className={howItWorksClassNames.h2}>Behavior</h2>
        <ol className={howItWorksClassNames.list}>
          <li>
            <strong>Validation:</strong> Validates the input parameters against
            the auctions rules.
          </li>
          <li>
            <strong>Funds Handling:</strong> Manages the deposited funds,
            aligning them with the users order.
          </li>
          <li>
            <strong>Order Placement:</strong> Records the users order within the
            auctions structure.
          </li>
          <li>
            <strong>Events:</strong> Emits events to record the deposit and
            order placement actions.
          </li>
        </ol>

        <h2 className={howItWorksClassNames.h2}>Security Considerations</h2>
        <ul className={howItWorksClassNames.list}>
          <li>
            <strong>Reentrancy Guard:</strong> Ensures protection against
            reentrancy attacks.
          </li>
          <li>
            <strong>Input Validation:</strong> Validates all inputs to prevent
            manipulations.
          </li>
          <li>
            <strong>Access Controls:</strong> May restrict who can call the
            function based on certain criteria.
          </li>
        </ul>
      </article>
    </div>
  )
}
