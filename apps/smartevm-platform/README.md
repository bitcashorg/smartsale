# Gnosis Auction Front-end

## Contents
  * [Development](#development)
  * [Links](#links)
  * [License and origin](#license-and-origin)

## Development

### Install Dependencies

```bash
yarn
```

### Configure Environment

Copy `.env.example` to `.env` and change the appropriate variables.

### Run

```bash
yarn start
```

To have the frontend default to a different network, make a copy of `.env` named `.env.local`,
change `REACT_APP_NETWORK_ID` to `{yourNetworkId}`, and change `REACT_APP_NETWORK_URL` to e.g.
`https://{yourNetwork}.infura.io/v3/{yourKey}`.

## Dev Process

* Developer starts a new feature or bug fix: The developer creates a new branch off the dev branch. The branch name could be something related to the feature or bug being fixed.
```bash
git checkout dev
git pull origin dev
git checkout -b feature_branch
```
* Developer works on the code: The developer makes changes to the code, commits them, and then pushes the changes to the remote feature_branch.
```bash
git add .
git commit -m "commit message"
git push origin feature_branch
```
* Merge changes to dev branch: The changes can be merged into the dev branch. This should be done through a Pull Request (PR). Once the PR is approved, it can be merged.
* Fleek CI/CD deploys dev to staging: Fleek is set up to automatically deploy the dev branch to a staging environment for QA testing whenever new changes are pushed to it.
* Merge changes to main branch: Once the QA testing is done and everything is approved, the changes can be merged into the main branch. Again, this should be done through a PR for the purposes of code review.
* Fleek CI/CD deploys main to production: Fleek is set up to automatically deploy the main branch to the production environment whenever new changes are pushed to it.


## Links
* [Auction Main Site](https://gnosis-auction.eth.limo/#/start)
* [Private Auction Signer](https://github.com/Gnosis-Auction/private-auction-signer)
* [Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts)
* [Auction Subgraph](https://github.com/Gnosis-Auction/auction-graph)
* [Initiate Auction Code](https://github.com/Gnosis-Auction/initiate-auction-ux)

### Subgraph Query URLs
* [Mainnet](https://api.thegraph.com/subgraphs/name/aireshbhat/gnosisauctionservices)
* [Goerli](https://api.thegraph.com/subgraphs/name/gnosis-auction/ga-goerli)
* [Gnosis](https://api.thegraph.com/subgraphs/name/aireshbhat/gnosisauction)
* [Polygon](https://api.thegraph.com/subgraphs/name/aireshbhat/gnosisauctionpolygon)
* [Mumbai](https://api.thegraph.com/subgraphs/name/aireshbhat/gnosisauctionmumbai)
* [Avax](https://api.thegraph.com/subgraphs/name/gnosis-auction/ga-avax)
* [Fuji](https://api.thegraph.com/subgraphs/name/gnosis-auction/ga-fuji)


## License and origin

This program is free software: you can redistribute it and / or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

The project is a fork of the uniswap front-end from the following [commit](https://github.com/Uniswap/uniswap-interface/commit/dc391d1bea58c129f34c3777a80e2d7eebd7b349).

Copyright © 2021, Gnosis limited.

Released under GNU General Public License v3.0
