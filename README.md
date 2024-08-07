# SmartSale

Welcome to the SmartSale repository! This document provides a comprehensive overview of our platform designed for executing batch auctions for fair initial offerings and token buyback programs. SmartSale offers a streamlined user experience in the blockchain ecosystem, making it a foundational tool for price-discovery.

## Introduction

SmartSale is crafted to enhance the decentralized finance (DeFi) ecosystem by providing a reliable and fair auction mechanism. By adopting batch auctions, our platform ensures fair price discovery and equitable participation, supporting the democratization of financial systems through blockchain technology.

## Features

- **Batch Auction Mechanism**: Allows for fair and transparent price setting through batch auctions, ensuring all participants receive equal treatment.
- **Token Buyback Programs**: Supports projects in managing their tokenomics by facilitating scheduled buyback auctions.
- **Enhanced User Experience**: Simplifies the user interface to accommodate both novice and experienced users in the DeFi space.
- **Open-Source Community**: Promotes an open development environment, encouraging contributions and collaborations within the community.

### What problem are we solving?

SmartSale addresses critical challenges in the execution of initial token offerings and token buybacks within the DeFi ecosystem.

**Problem #1: Traditional financial systems and early blockchain implementations of token sales often lack transparency and fairness in price setting.**

Solution: SmartSale employs a batch auction system, proven in market mechanisms, to establish a single clearing price for all participants. This approach ensures transparency and fairness, reflecting true market demand and reducing the likelihood of price manipulation.

**Problem #2: Existing platforms like Gnosis Protocol v1 have highlighted the need for enhanced scalability and user experience in managing decentralized auctions.**

Solution: Building on the foundational concepts of its predecessors, SmartSale optimizes the auction process to handle a large number of bids efficiently within a single auction. This optimization improves predictability and user experience for all participants.

SmartSale is committed to compliance and security, rigorously adhering to emerging regulations such as MiCA to minimize legal risks for new projects and ensure a stable operational framework.

## Project Overview

This document provides an overview of the applications and packages within the project, as well as a brief description of the Hardhat setup.

### Applications

#### Faucet (`/apps/faucet`)

The Faucet application serves as a utility for distributing test tokens or currencies in a blockchain network. It is typically used in test environments to provide developers and users with a means to obtain tokens for testing purposes.

#### Indexer (`/apps/indexer`)

The Indexer application is responsible for indexing blockchain data. It listens to the blockchain network, extracts relevant data from blocks, transactions, and events, and stores it in a structured format for easy querying and analysis.

#### Supabase (`/apps/supabase`)

This application integrates with Supabase, a scalable and open-source Firebase alternative, providing real-time database functionality, authentication, storage, and more. It's designed to leverage Supabase services for backend functionalities.

For more database schema details, refer to the [Database Schema](/apps/supabase/README.md) diagram.

#### Webapp (`/apps/webapp`)

The Webapp is a front-end application that provides a user interface for interacting with the project's services. It includes features such as displaying blockchain data, interacting with smart contracts, and utilizing the Faucet for test tokens.

Please refer to the [webapp README.md](/apps/webapp/README.md) for more details on the technologies used in the Webapp and code practices.

### Packages

#### Config ESLint (`/packages/config-eslint`)

This package provides a shared ESLint configuration to ensure consistent coding styles and practices across the project's JavaScript and TypeScript codebases.

#### Config TypeScript (`/packages/config-typescript`)

Similar to `config-eslint`, this package offers a shared TypeScript configuration to standardize TypeScript compilation options across the project.

#### Smartsale Contracts (`/packages/app-contracts`)

Contains smart contracts for the Smartsale platform, including auction contracts, ERC20 tokens, and other blockchain-based contracts. These are essential for the project's blockchain functionalities.

#### Smartsale Env (`/packages/app-env`)

Provides environment configurations and utilities for the Smartsale platform, ensuring that different environments (development, testing, production) can be managed and configured efficiently.

#### Smartsale Lib (`/packages/app-lib`)

A library of reusable code for the Smartsale platform, including utility functions, blockchain interaction helpers, and common components used across the project.

#### TSConfig (`/packages/tsconfig`)

Houses TypeScript configuration files used to compile TypeScript projects within the monorepo. It ensures consistency in TypeScript compilation settings.

### Hardhat (`/hardhat`)

Hardhat is a development environment for Ethereum software development. It facilitates the development, testing, and deployment of smart contracts. The `hardhat` folder contains configurations and scripts for compiling smart contracts, running tests, and deploying contracts to various Ethereum networks. It includes subfolders for different contract modules like `auction` and `erc20-token`, each containing specific smart contract implementations.

## Requirements

- **NodeJS**: Recommended for managing server-side scripting and backend interactions.
- **Bun**: Provides a faster runtime for JavaScript, enhancing development efficiency.
- **Supabase CLI**: Facilitates local development and effective database schema management.
- **Docker**: Essential for creating isolated environments, ensuring consistent operation across different setups.

## Tech Stack

### Backend & APIs

- **Supabase**
  - Manages authentication and real-time data interactions.
  - **Advanced Search**: Supports complex queries necessary for managing auction data.

### Frontend & Design

- **Next.js 14**
  - Utilizes efficient routing mechanisms and server-side data fetching to provide a smooth user experience.
  - [Learn more about Next.js](https://nextjs.org/docs/routing/introduction)

- **Shadcn & Radix**
  - Offers pre-designed UI components, making the development process faster and more accessible.
  - [Learn more about Shadcn](https://shadcn.com/)
  - [Learn more about Radix](https://www.radix-ui.com/)

### Smart Contracts

- **EVM Solidity**
  - Utilizes Ethereum's Solidity programming for creating reliable and secure smart contracts essential for auction operations.

### DevOps and Tools

- **Turbo Monorepo**
  - Enhances codebase management with efficient build processes and dependency caching.
  - [Learn more about Turbo Monorepo](https://turborepo.org/)

- **Lighthouse CI**
  - Ensures high performance and accessibility standards are met, integrating seamlessly with continuous integration pipelines.
  - [Learn more about Lighthouse CI](https://developers.google.com/web/tools/lighthouse#ci)

### Animation

- **Framer Motion for React**
  - Provides dynamic visual feedback through animations, enhancing user interface interactions.
  - [Learn more about Framer Motion](https://www.framer.com/motion/)

- **UseAnimations React Library**
  - Offers a collection of ready-to-use animations, enriching the user experience across the platform.
  - [Learn more about UseAnimations](https://useanimations.github.io/react-useanimations/)

## Installation

To get started with SmartSale, clone the repository and set up the environment:

```bash
git clone https://github.com/bitcashorg/smartsale.git
cd smartsale
bun install
```

## Usage

Kickstart the (overall) development server:

```bash
bun run dev
```

### webapp

To run the webapp:

```bash
task run app # cd apps/webapp && bun dev
```

## Contributing

We value contributions from the community and encourage participation through code contributions, feedback, and suggestions. Join our collaborative efforts to refine and expand the capabilities of SmartSale.

Join our community on Discord for real-time collaboration: [Join us on Discord!](https://discord.com/invite/a4gwhT9G)

Please ensure to update tests appropriately and adhere to our code of conduct.

## License

This project is licensed under the MIT License - see the `LICENSE` file for

## Acknowledgments

This project is a fork of [Gnosis Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts).
