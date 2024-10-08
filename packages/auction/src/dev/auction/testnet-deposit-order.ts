import { sepolia } from 'viem/chains'
import type { EVMContractData } from '../../types'

export const TestnetDepositOrder: EVMContractData = {
  address: '0x4faA684A1E0Cdd7cb271b5424a12A2D039624D78',
  indexFromBlock: 12240840,
  chainId: 15557,
  chainType: 'evm',
  chainName: 'EOS EVM Tesnet',
  chain: sepolia,
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'easyAuctionAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nativeTokenWrapper',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'auctionId',
          type: 'uint256',
        },
        {
          internalType: 'uint96[]',
          name: '_minBuyAmounts',
          type: 'uint96[]',
        },
        {
          internalType: 'bytes32[]',
          name: '_prevSellOrders',
          type: 'bytes32[]',
        },
        {
          internalType: 'bytes',
          name: 'allowListCallData',
          type: 'bytes',
        },
      ],
      name: 'depositAndPlaceOrder',
      outputs: [
        {
          internalType: 'uint64',
          name: 'userId',
          type: 'uint64',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'easyAuction',
      outputs: [
        {
          internalType: 'contract EasyAuction',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'nativeTokenWrapper',
      outputs: [
        {
          internalType: 'contract IWETH',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
}
