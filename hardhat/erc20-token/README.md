
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

- USD Credit Token [0x115Acc340D40e7F755dc8BC8a5316Dd18f8Be686](https://explorer.testnet.evm.eosnetwork.com/address/0x115Acc340D40e7F755dc8BC8a5316Dd18f8Be686)
- MBOTS Credit Token [0x8e4fA14D6874Cb2189bCd768aC67A33A6d76875B](https://explorer.testnet.evm.eosnetwork.com/address/0x8e4fA14D6874Cb2189bCd768aC67A33A6d76875B)