
# Hardhat Project

This project contains two contracts:

1. `USDTTokenWithFaucet.sol` - An ERC20 token with a faucet, to be deployed on the eosevm_testnet.
2. `USDTToken.sol` - A standard ERC20 token, to be deployed on the eosevm_mainnet.

## Scripts

- `deployWithFaucet.js` - Script to deploy the USDTTokenWithFaucet contract.
- `deployWithoutFaucet.js` - Script to deploy the USDTToken contract.

## Network Configuration

Add your private key to a `.env` file in the root of the project for the deployments:

```
PK=<your-private-key>
```

## Usage

To deploy the contracts, run the corresponding package.json script


## Addresses

Bitcah USDT EOS EVM Testnet 0x1976c3C7b4Cb8912DB5eB737653443F90c534232