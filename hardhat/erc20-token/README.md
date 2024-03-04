
# Hardhat Project

This project contains two contracts:

1. `USDCredTokenWithFaucet.sol` - USD Credit ERC20 token with a faucet, to be deployed on the eosevm_testnet.
2. `USDCredToken.sol` - USD Credit standard ERC20 token, to be deployed on the eosevm_mainnet.
3. `MBOTSPLToken.sol` - MBOTS Credit ERC20 token, to be deployed on the eosevm_testnet and eosevm_mainnet.

## Scripts

- `deployUSDCredWithFaucet.js` - Script to deploy the USDCredTokenWithFaucet contract on eosevm_testnet.
- `deployUSDCredWithoutFaucet.js` - Script to deploy the USDCredToken contract on eosevm_mainnet.
- `deployMBOTSPLTestnet.js` - Script to deploy the USDCredToken contract on eosevm_testnet.

## Network Configuration

Add your private key to a `.env` file in the root of the project for the deployments:

```
PK=<your-private-key>
```

## Usage

To deploy the contracts, run the corresponding package.json script


## Addresses

### EOS EVM Testnet

- USD Credit Token [0x8d27DFbC8B7395660115C88AF7b05716b146e2B0](https://explorer.testnet.evm.eosnetwork.com/address/0x8d27DFbC8B7395660115C88AF7b05716b146e2B0)
- MBOTS Prelaunch Token [0x5EdB28FBa146371A5f4A1C5812111C887EC9Ae73](https://explorer.testnet.evm.eosnetwork.com/address/0x5EdB28FBa146371A5f4A1C5812111C887EC9Ae73)