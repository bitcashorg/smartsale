import type { Abi } from 'viem'

export const AllowListAbi: Abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'domainSeparator',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'callData',
        type: 'bytes',
      },
    ],
    name: 'isAllowed',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'auctionId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'allower',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'callData',
        type: 'bytes',
      },
    ],
    name: 'isAllowedBy',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
