# Hardhat Project

This project contains one contract:

1. `MORTokenWithFaucet.sol` - MOR ERC20 token with a faucet, to be deployed on the Arbitrum Sepolia.

## Scripts

- `deployMORWithFaucet.js` - Script to deploy the MORCredTokenWithFaucet contract on Arbitrum Sepolia.


## Network Configuration

Add your private key to a `.env` file in the root of the project for the deployments:

```
PK=<your-private-key>
```

## Usage

To deploy the contracts, run the corresponding package.json script

## How to deploy the contract

1. Arbitrum Sepolia: run `npx hardhat run scripts/deployMORWithFaucet.js --network arbitrumSepolia`
2. Arbitrum One: run `npx hardhat run scripts/deployMORWithFaucet.js --network arbitrumOne`

## Addresses

