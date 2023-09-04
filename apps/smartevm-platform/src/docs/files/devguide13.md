### How to settle an auction 

After the auction time has finished, the auction enters the **'Awaiting Settlement'** state. 
ANY participant can settle the auction by running the following commands:

First, one needs to clone and prepare the repo:

```
git clone https://github.com/Gnosis-Auction/auction-contracts.git
cd auction-contracts
yarn
yarn build
```

Now, one can run the script settling the auction:

```
export NETWORK=<Your Network>
export GAS_PRICE_GWEI=<Your gas price>
export INFURA_KEY=<Your infura key>
export PK=<Your private key>
yarn hardhat clearAuction --auction-id INSERT_AUCTION_ID_HERE --network $NETWORK
```

The command will run the on-chain price calculation and settle the auction with the calculated price. Usually, the auctioneer themselves will run the scripts and hence pay the gas for settling their auction(s).
