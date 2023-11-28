### Gnosis Auction user flow

In Gnosis Auction, there are two types of participants: a seller and a bidder(s).

#### 1. Seller: Starting an auction

Starting an auction is a permissionless process. Each auction can be configured individually.
There are two options to start an auction on most networks:
- [UI guide](/#/docs/starting-an-auction-with-safe) (Strongly Recommended)
- [Script guide](/#/docs/participate-as-auctioneer)

#### 2. Bidders: Placing orders

Once the auctions starts, the bidders get to start placing bids. They need to:

- Approve the token (if first time)
- Select the amount of bid tokens they are willing to commit to the auction
- Select the maximum price willing to pay
- Initiate the order

After submitting the transaction, the bidder’s bid will be validated, and the amount of bid tokens that they selected would be subtracted from their balance.

Check out this [detailed guide](/#/docs/participate-as-a-bidder) for more info.

_Note: It is important to note that many participants might submit new bids right before the auction closes, making it difficult to predict the clearing price of the auction ahead of time. Thus, it is important for bidders to submit their bids with the highest price they are comfortable to pay for the asset_

#### 3. Seller: On-chain price calculation

It's the seller's duty to finish the auction by submitting the transaction that calculates the price of the auction on-chain. As it's also a permissionless process, anyone can do it.

Check out this [guide](https://github.com/gnosis/ido-contracts#settle-auctions) for more info regarding price calculation.

#### 4. Bidders: Claiming

After the price has settled, the seller will receive the proceeds of the auction. A bidder will need to submit an additional transaction to claim their auction proceeds.
