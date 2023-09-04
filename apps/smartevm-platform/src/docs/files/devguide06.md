### How to start an auction via scripts

This guide will first list all the parameters in order to run a Public auction, and then go through an example of setting up an auction on the Goerli testnet.

### Required Parameters

All auctions need to include the following parameters:

**&quot;--auctioning-token&quot;** refers to the token you want to sell in the auction, add the address as a string

**&quot;--bidding-token&quot;** refers to the token the bidders will use to bid on the auctioned token, add the address as a string

**&quot;--sell-amount&quot;** refers to the amount of tokens that you will sell, add amount as integer

**&quot;--min-buy-amount&quot;** refers to the minimum amount of buy tokens you are willing to accept. The minimum sell price of the auction is calculated by dividing the --min-buy-amount/--sell-amount

**&quot;--auction-end-date&quot;** determines the end date and time of the auction in Unix Timestamp format. Use [this website](https://www.epochconverter.com/) in order to convert from human date and time format to Unix Timestamp.

**&quot;--network&quot;** determines the network in which the auction will happen.

### Additional Parameters

Additionally, Auctioneers can further customize the auction by using the following optional parameters:

**&quot;--min-funding-threshold&quot;** The minimal funding threshold for executing the settlement. If funding is not reached, everyone will get back their investment. Default is 0.

**&quot;--order-cancellation-end-date&quot;** The unix timestamp (in seconds) until which orders can be canceled. Default is 0.

**&quot;--min-buy-amount-per-order&quot;** Describes the minimal buyAmount per order placed in the auction. Auctioneers can define if there is minimum order size in their auction. Default is 0.01

**&quot;--is-atomic-closure-allowed&quot;** This parameter enables users to close the auction atomically and submit a final bid by calling the `settleAuctionAtomically` function in the smart contract once the `auction-end-date` has been reached. The auctioneer determines whether this parameter is on or off by specifying True or False.

### Example

In order to participate as an auctioneer, it is currently needed to copy the following [repository](https://github.com/Gnosis-Auction/auction-contracts).

First install all dependencies, and switch the right folder by using the following commands:

```
git clone https://github.com/Gnosis-Auction/auction-contracts.git

cd auction-contracts

yarn

yarn build
```

Do the following command in order to set the network you will use:

```
export NETWORK= goerli
```

Select the gas price:

```
export GAS_PRICE_GWEI=9
```

Add your Infura Key:

```
export INFURA_KEY=INFURA_KEY_HERE
```

Add the private key of the address with the funds to sell:

```
export PK=PRIVATE_KEY_HERE
```

Example of final command to initiate the auction:

```
yarn hardhat initiateAuction --auctioning-token "0xc778417e063141139fce010982780140aa0cd5a" --bidding-token "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa" --sell-amount 0.1 --min-buy-amount 50 --auction-end-date 1616497200 --network goerli
```

### Closing an auction

After the auction time has finished, ANY participant can settle the auction by running this command:

```
yarn hardhat clearAuction --auction-id INSERT_AUCTION_ID_HERE --network goerli
```
