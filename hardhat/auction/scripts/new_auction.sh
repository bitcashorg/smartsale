#!/bin/sh

export NETWORK=<Your Network>
export GAS_PRICE_GWEI=<Your gas price>
export INFURA_KEY=<Your infura key>
export PK=<Your private key>
bun run hardhat initiateAuction --auctioning-token "0xc778417e063141139fce010982780140aa0cd5ab" --bidding-token "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa" --sell-amount 0.1 --min-buy-amount 50 --network eosevm_testnet