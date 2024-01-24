
# Hardhat Project

This project contains two contracts:

1. `USDCredTokenWithFaucet.sol` - USD Credit ERC20 token with a faucet, to be deployed on the eosevm_testnet.
2. `USDCredToken.sol` - USD Credit standard ERC20 token, to be deployed on the eosevm_mainnet.
3. `MBOTSCredToken.sol` - MBOTS Credit ERC20 token, to be deployed on the eosevm_testnet and eosevm_mainnet.

## Scripts

- `deployUSDCredWithFaucet.js` - Script to deploy the USDCredTokenWithFaucet contract on eosevm_testnet.
- `deployUSDCredWithoutFaucet.js` - Script to deploy the USDCredToken contract on eosevm_mainnet.
- `deployMBOTSCredTestnet.js` - Script to deploy the USDCredToken contract on eosevm_testnet.

## Network Configuration

Add your private key to a `.env` file in the root of the project for the deployments:

```
PK=<your-private-key>
```

## Usage

To deploy the contracts, run the corresponding package.json script


## Addresses

### EOS EVM Testnet

- USD Credit Token [0x476e1Cac03298C1d38ac978Ff20C9E8175BaE39f](https://explorer.testnet.evm.eosnetwork.com/address/0x476e1Cac03298C1d38ac978Ff20C9E8175BaE39f)
- MBOTS Credit Token [0x09a37fC30Ad62d613d2c9BFDb228915A1D30084e](https://explorer.testnet.evm.eosnetwork.com/address/0x09a37fC30Ad62d613d2c9BFDb228915A1D30084e)