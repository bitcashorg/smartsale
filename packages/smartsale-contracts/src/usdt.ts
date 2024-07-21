import { TokenContractData } from "./types";
import { erc20Abi } from 'abitype/abis'

const usdcContracts: TokenContractData[] = [
  {
    address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 42161, // Arbitrum Mainnet
    chainType: "evm",
    chainName: "Arbitrum",
    abi: erc20Abi,
  },
  {
    address: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 421611, // Arbitrum Testnet
    chainType: "evm",
    chainName: "Arbitrum",
    abi: erc20Abi,
  },
  {
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 43114, // Avalanche Mainnet
    chainType: "evm",
    chainName: "Avalanche",
    abi: erc20Abi,
  },
  {
    address: "0x5425890298aed601595a70ab815c96711a31bc65",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 43113, // Avalanche Testnet
    chainType: "evm",
    chainName: "Avalanche",
    abi: erc20Abi,
  },
  {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 8453, // Base Mainnet
    chainType: "evm",
    chainName: "Base",
    abi: erc20Abi,
  },
  {
    address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 84531, // Base Testnet
    chainType: "evm",
    chainName: "Base",
    abi: erc20Abi,
  },
  {
    address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 42220, // Celo Mainnet
    chainType: "evm",
    chainName: "Celo",
    abi: erc20Abi,
  },
  {
    address: "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 44787, // Celo Testnet
    chainType: "evm",
    chainName: "Celo",
    abi: erc20Abi,
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1, // Ethereum Mainnet
    chainType: "evm",
    chainName: "Ethereum",
    abi: erc20Abi,
  },
  {
    address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 11155111, // Ethereum Testnet
    chainType: "evm",
    chainName: "Ethereum",
    abi: erc20Abi,
  },
  {
    address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 10, // OP Mainnet
    chainType: "evm",
    chainName: "Optimism",
    abi: erc20Abi,
  },
  {
    address: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 420, // OP Testnet
    chainType: "evm",
    chainName: "Optimism",
    abi: erc20Abi,
  },
  {
    address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 137, // Polygon PoS Mainnet
    chainType: "evm",
    chainName: "Polygon",
    abi: erc20Abi,
  },
  {
    address: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 80001, // Polygon PoS Testnet
    chainType: "evm",
    chainName: "Polygon",
    abi: erc20Abi,
  },
  {
    address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 324, // ZKsync Mainnet
    chainType: "evm",
    chainName: "ZKsync",
    abi: erc20Abi,
  },
  {
    address: "0xAe045DE5638162fa134807Cb558E15A3F5A7F853",
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 280, // ZKsync Testnet
    chainType: "evm",
    chainName: "ZKsync",
    abi: erc20Abi,
  },
]

const usdtContracts: TokenContractData[] = [
  {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1, // Ethereum Mainnet
    chainType: "evm",
    chainName: "Ethereum",
    abi: erc20Abi,
  },
  {
    address: "0xFD086BC7CD5C481DCC9C85E0C3AC0A4A5404C120",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 42161, // Arbitrum Mainnet
    chainType: "evm",
    chainName: "Arbitrum",
    abi: erc20Abi,
  },
  {
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 43114, // Avalanche Mainnet
    chainType: "evm",
    chainName: "Avalanche",
    abi: erc20Abi,
  },
  {
    address: "0x55d398326f99059fF775485246999027B3197955",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 56, // Binance Smart Chain Mainnet
    chainType: "evm",
    chainName: "Binance Smart Chain",
    abi: erc20Abi,
  },
  {
    address: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 250, // Fantom Mainnet
    chainType: "evm",
    chainName: "Fantom",
    abi: erc20Abi,
  },
  {
    address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 137, // Polygon Mainnet
    chainType: "evm",
    chainName: "Polygon",
    abi: erc20Abi,
  },
  {
    address: "TD9iWjeY9yLbzgpqv9E5uFZy9vNExS6EN5",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1, // Tron Mainnet (TRC-20)
    chainType: "evm",
    chainName: "Tron",
    abi: erc20Abi,
  },
  {
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 10, // Optimism Mainnet
    chainType: "evm",
    chainName: "Optimism",
    abi: erc20Abi,
  },
  {
    address: "0x224E64ec1BDce3870a6a6c777eDd450454068FEC",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1666600000, // Harmony Mainnet
    chainType: "evm",
    chainName: "Harmony",
    abi: erc20Abi,
  },
  {
    address: "0x8e76f63A2dC3F3bE6f00e3F4a1ddC133D52f4866",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1284, // Moonbeam Mainnet
    chainType: "evm",
    chainName: "Moonbeam",
    abi: erc20Abi,
  },
  {
    address: "0x6175F5a135dF205eD2E6FCab46dEc8df3feBf60a",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 25, // Cronos Mainnet
    chainType: "evm",
    chainName: "Cronos",
    abi: erc20Abi,
  },
  {
    address: "0x33bD5cD41aE43Fd478C14d0FF16B23E92cb9d015",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 2222, // Kava Mainnet
    chainType: "evm",
    chainName: "Kava",
    abi: erc20Abi,
  },
  {
    address: "0x29db9dAF5b1D73f5A3265B5Edb2Dd9d2b99D6A3A",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1088, // Metis Mainnet
    chainType: "evm",
    chainName: "Metis",
    abi: erc20Abi,
  },
  {
    address: "0x4ecb6e9aEa4C7D2b16B65F6375A7b88d14524eC9",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 100, // Gnosis Mainnet
    chainType: "evm",
    chainName: "Gnosis",
    abi: erc20Abi,
  },
  {
    address: "0x4988a896b1227218e4A686fdE5EabdcAbd91571f",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    indexFromBlock: 0,
    chainId: 1313161554, // Aurora Mainnet
    chainType: "evm",
    chainName: "Aurora",
    abi: erc20Abi,
  },
]