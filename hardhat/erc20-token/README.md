
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

Bitcah USDT EOS EVM Testnet 0x1976c3C7b4Cb8912DB5eB737653443F90c534232