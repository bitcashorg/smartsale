
# SmartSale EVM

SmartSale is a comprehensive platform designed to streamline the auction process.

![](https://cdn.eosnation.io/pomelo/project_logos/fc190531-e0ed-4018-be9b-2a4323829bb8.png?webp=true&resize=1500&animated=true)

## Requirements

- NodeJS. We recommend [nvm](https://github.com/nvm-sh/nvm) for version switching.
- bun package manager https://bun.sh/
- Task manager https://taskfile.dev

## Running the Frontend

In apps/masterbots.ai folder (set up .env file - see .env_sample):

```
bun install
turbo run dev --scope="smartevm-webapp" 
# task app will execute the same command
```

## Contracts

See readme files under hardhat/ folder

## Acknowledgments

This project is a fork of [Gnosis Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts).
