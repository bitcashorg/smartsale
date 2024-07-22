import { TokenContractData } from "../types";
import { erc20Abi } from 'abitype/abis'

export const usdcContracts: TokenContractData[] = [
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
