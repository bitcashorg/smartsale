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

## Addresses

1. MOR Token - Arbitrum One: [0x092baadb7def4c3981454dd9c0a0d7ff07bcfc86](https://arbiscan.io/address/#readContract)

2. MOR Token - Arbitrum Sepolia: [0xE8dBf935581B4e8C7d37d95704C29537Fb29aDDa](https://sepolia.arbiscan.io/address/0xe8dbf935581b4e8c7d37d95704c29537fb29adda)