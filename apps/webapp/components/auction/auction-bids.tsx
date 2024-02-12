'use client'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { ProjectWithAuction } from '@/lib/projects'
import { useState } from 'react'
import { TestnetEasyAuction, TestnetUSDCred } from 'smartsale-contracts'
import { Address, stringify } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'
import { readContract, writeContract } from '@wagmi/core'
import { wagmiConfig } from '../providers'
import { toSmallestUnit } from '@/lib/utils'
import { erc20Abi } from 'abitype/abis'

export function AuctionBids({ project }: AuctionBidsProps) {
  const { address } = useAccount()
  const { writeContract: placeBids, ...tanstack } = useWriteContract()
  const [bidInputs, setBidInputs] = useState(
    Array<BidInput>(5).fill({ maxPrice: BigInt(0), bidAmount: BigInt(0) })
  )

  const handleSubmit = async () => {
    if (!address) return

    const minBuyAmounts = bidInputs.map(
      i => i.bidAmount / BigInt(i.maxPrice || 1)
    )
    const sellAmounts = bidInputs.map(i => i.bidAmount)

    const test = {
      minBuyAmounts: [minBuyAmounts[0]],
      sellAmounts: [sellAmounts[0]]
    }

    console.log('test', stringify(test))

    const { isBalanceSufficient, isAllowanceSufficient } =
      await checkBalanceAndAllowance({
        account: address,
        spender: TestnetEasyAuction.address,
        amount: test.sellAmounts[0],
        tokenAddress: TestnetUSDCred.address
      })

    if (!isBalanceSufficient) return alert('Insuficient USDCred Balance')
    if (!isAllowanceSufficient) {
      await writeContract(wagmiConfig, {
        address: TestnetUSDCred.address,
        abi: erc20Abi,
        functionName: 'approve',
        args: [TestnetEasyAuction.address, test.sellAmounts[0]]
      })
    }

    const order = {
      auctionId: project.auctionId, // uint256 auctionId,
      minBuyAmounts: test.minBuyAmounts, // uint96[] memory _minBuyAmounts 210,000000 MBOTSPL
      prevSellOrders: [], // bytes32[] memory _prevSellOrders,
      allowListCallData: '0x', // bytes calldata allowListCallData
      sellAmounts: test.sellAmounts // uint96[] memory _sellAmounts bidding USDCred 200,000000 BidAmount
    }
    console.log('place order', order)
    const queueStartElement =
      '0x0000000000000000000000000000000000000000000000000000000000000001'
    placeBids({
      ...TestnetEasyAuction, // Ensure this contains the correct ABI and contract address
      functionName: 'placeSellOrders',
      args: [
        order.auctionId,
        order.minBuyAmounts,
        order.sellAmounts,
        [queueStartElement],
        '0x'
      ]
    })
  }

  console.log('error', stringify(tanstack.error), 'data', tanstack.data)
  // console.log('bidInputs', JSON.stringify(bidInputs))

  const handleInputChange = (
    index: number,
    name: keyof BidInput,
    value: bigint
  ) => {
    console.log('handleInputChange', index, name, value)
    const newBidInputs = [...bidInputs]
    newBidInputs[index] = { ...newBidInputs[index], [name]: value }
    setBidInputs(newBidInputs)
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-red-600">Max Price</TableHead>
            <TableHead className="bg-green-600">Bid Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bidInputs.map((_, index) => (
            <TableRow key={index}>
              <TableCell className="bg-green-500">
                <CurrencyInput
                  placeholder="0.00"
                  name={`maxPrice${index}`}
                  handlechange={val =>
                    handleInputChange(index, 'maxPrice', val)
                  }
                />
              </TableCell>
              <TableCell className="bg-green-500">
                <CurrencyInput
                  placeholder="0.00"
                  name={`bidAmount${index}`}
                  handlechange={val =>
                    handleInputChange(index, 'bidAmount', val)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button
        onClick={() => handleSubmit()}
        type="submit"
        className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Submit Bids
      </button>

      <div className="mt-4">
        <p>{textValues.currentBid}</p>
        <p>{textValues.currentCost}</p>
        <p className="mt-2 text-sm">{textValues.maxTokenLimit}</p>
      </div>
    </div>
  )
}

function CurrencyInput({ handlechange, ...props }: CurrencyInputProps) {
  const [value, setValue] = useState<string>('')

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '') // Remove commas for parsing
    if (!isNaN(Number(val))) {
      // This ensures the value is a number (including decimals)
      setValue(val) // Set the raw number value for controlled input
    }
    handlechange(toSmallestUnit(val, 6))
  }

  const handleBlur = () => {
    if (value) {
      const numberValue = parseFloat(value)
      setValue(formatNumber(numberValue)) // Format with commas and two decimal places
    } else {
      setValue('0.00') // Default to .00 when empty
    }
  }

  return (
    <div className="relative text-white">
      <span className="absolute inset-y-0 flex items-center left-2">$</span>

      <input
        type="text" // Changed to text to handle manual formatting
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full pl-6 text-white bg-transparent placeholder:text-white focus:outline-none"
        {...props}
      />
    </div>
  )
}

type BidInput = {
  maxPrice: bigint
  bidAmount: bigint
}

interface AuctionBidsProps {
  project: ProjectWithAuction
}

interface CurrencyInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  handlechange: (val: bigint) => void
}

const textValues = {
  countdownTitle: 'COUNTDOWN',
  days: '12',
  hours: '08',
  minutes: '37',
  seconds: '24',
  ticker: 'Ticker: BANK',
  currentAuctionPrice: 'Current Auction Price: $3.75',
  currentBid: 'Current Bid: 200 @ $3.75',
  currentCost: 'Current Cost: $750',
  maxTokenLimit: '*Max Token Limit: 285 ($1,000)'
}

// Function to check balance and allowance
export async function checkBalanceAndAllowance({
  account,
  spender,
  amount,
  tokenAddress
}: {
  account: Address
  spender: Address
  amount: bigint
  tokenAddress: Address
}) {
  // Check the token balance
  const balance = await readContract(wagmiConfig, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [account]
  })
  console.log(
    'USDCred balance',
    balance,
    amount,
    balance && BigInt(balance.toString()) >= amount
  )

  // Check the allowance
  const allowance = await readContract(wagmiConfig, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [account, spender]
  })

  const isBalanceSufficient = balance && BigInt(balance.toString()) >= amount
  const isAllowanceSufficient =
    allowance && BigInt(allowance.toString()) >= amount

  return { isBalanceSufficient, isAllowanceSufficient }
}
