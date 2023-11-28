import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import dotenv from "dotenv";
import { utils } from "ethers";
import type { HttpNetworkUserConfig } from "hardhat/types";
import yargs from "yargs";

import { clearAuction } from "./src/tasks/clear_auction";
import { clearAuctionSimplified } from "./src/tasks/clear_auction_simplifed";
import { generateSignatures } from "./src/tasks/generateSignatures";
import { initiateAuction } from "./src/tasks/initiate_new_auction";
import { placeManyOrders } from "./src/tasks/placeManyOrders";

const argv = yargs
  .option("network", {
    type: "string",
    default: "hardhat",
  })
  .help(false)
  .version(false).argv;

// Load environment variables.
dotenv.config();
const { GAS_PRICE_GWEI, INFURA_KEY, MNEMONIC, MY_ETHERSCAN_API_KEY, PK } =
  process.env;

const DEFAULT_MNEMONIC =
  "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

const sharedNetworkConfig: HttpNetworkUserConfig = {};
if (PK) {
  sharedNetworkConfig.accounts = [PK];
} else {
  sharedNetworkConfig.accounts = {
    mnemonic: MNEMONIC || DEFAULT_MNEMONIC,
  };
}

if (
  ["rinkeby", "goerli", "mainnet"].includes(argv.network) &&
  INFURA_KEY === undefined
) {
  throw new Error(
    `Could not find Infura key in env, unable to connect to network ${argv.network}`,
  );
}

initiateAuction();
clearAuction();
clearAuctionSimplified();
generateSignatures();
placeManyOrders();

export default {
  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    deploy: "src/deploy",
    sources: "contracts",
  },
  solidity: {
    compilers: [
      {
        // used to compile WETH9.sol
        version: "0.5.5",
      },
      {
        version: "0.6.12",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: "1000000000000000000000000000000",
      },
    },
    eosevm_testnet: {
      ...sharedNetworkConfig,
      url: "https://api.testnet.evm.eosnetwork.com",
      chainId: 15557,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString(),
          )
        : "auto",
      timeout: 60000,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  mocha: {
    timeout: 2000000,
  },
  etherscan: {
    apiKey: {
      eosevm_testnet: MY_ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "eosevm_testnet",
        chainId: 15557,
        urls: {
          apiURL: "https://explorer.testnet.evm.eosnetwork.com/api",
          browserURL: "https://explorer.testnet.evm.eosnetwork.com/",
        },
      },
    ],
  },
};
