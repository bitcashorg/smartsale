# Auction Subgraphs

This repository holds the subgraph code used to index the EasyAuction events using the Graph.

## Getting Started
Basic commands to get started with the subgraph.
```bash
# Install dependencies
yarn install

# Generate types
yarn codegen

# Build
yarn build

# Test
yarn test
```

### Deploy to individual networks
```bash
# Deploy to test urls
yarn deploy:{network_name}-test

# Deploy to production urls(prod is used for hosted services)
yarn deploy:{network_name}-prod

# Deploy to studio urls(studio is used for subgraph studio services)
yarn deploy:{network_name}-studio
```
Note: Replace`yarn` with `npm run` in the above commands to use npm.


## Add a new network
* Add a new json file inside the `config` folder. For eg. `{network_name}.json`.
* Add the `network`, `address` and `startBlock` details in the json file.
* Update the `getChainId` function in `src/utils.ts` to return the chainId of the network.