import { erc20Abi } from "viem";
import { EVMTokenContractData } from "../../types";
import {eosEvmTestnet} from '../../../../app-env/src/chains';

export const TestnetBLPL: EVMTokenContractData = {
  address: "0x2BF8feebD09B2520E69f27294768774544c98985",
  name: "Bitlauncher Prelaunch Token",
  symbol: "BLPL",
  decimals: 18,
  indexFromBlock: 30051449,
  chainId: 15557, // eos_evm
  chainType: "evm",
  chainName: "EOS EVM Tesnet",
  chain: eosEvmTestnet,
  abi: erc20Abi,
} as const;
