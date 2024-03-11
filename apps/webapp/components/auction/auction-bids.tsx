'use client'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useGlobalData } from '@/hooks/use-global-data'
import { ProjectWithAuction } from '@/lib/projects'
import { cn, toSmallestUnit } from '@/lib/utils'
import { readContract, writeContract } from '@wagmi/core'
import { erc20Abi } from 'abitype/abis'
import { useEffect, useState } from 'react'
import { TestnetEasyAuction, TestnetUSDCred } from 'smartsale-contracts'
import { Address, stringify } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'
import { wagmiConfig } from '../providers'

const queueStartElement =
  '0x0000000000000000000000000000000000000000000000000000000000000001'

export function AuctionBids({ project }: AuctionBidsProps) {
  const { address } = useAccount()
  const { writeContract: placeBids, ...tanstack } = useWriteContract()
  const [bidInputs, setBidInputs] = useState(
    Array<BidInput>(5).fill({
      maxPrice: BigInt(0),
      bidAmount: BigInt(0),
      minBuyAmount: BigInt(0),
      errorMessage: ''
    })
  )
  const { errorMessage, setGlobalError } = useGlobalData()

  const handleSubmit = async () => {
    if (!address) return

    // return if there's any error
    const hasErrorMessage = bidInputs.some(item => item.errorMessage !== '')
    if (hasErrorMessage) return

    // remove empty rows
    const bids = bidInputs.filter(v => !(v.minBuyAmount <= 0 && v.bidAmount <= 0))

    const test = {
      minBuyAmounts: [bids[0]?.minBuyAmount],
      sellAmounts: [bids[0]?.bidAmount]
    }

    console.log('test', stringify(test))


    const { isBalanceSufficient, isAllowanceSufficient } =
      await checkBalanceAndAllowance({
        account: address,
        spender: TestnetEasyAuction.address,
        amount: bids[0]?.bidAmount,
        tokenAddress: TestnetUSDCred.address
      })

    if (!isBalanceSufficient) return setGlobalError('Insuficient USDCred Balance')


    if (!isAllowanceSufficient) {
      await writeContract(wagmiConfig, {
        address: TestnetUSDCred.address,
        abi: erc20Abi,
        functionName: 'approve',
        args: [TestnetEasyAuction.address, bids[0]?.bidAmount]
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

    // TODO: we may need to wait a couple seconds after calling approve
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

  // validates and formats inputs
  const handleInputChange = (
    index: number,
    name: keyof BidInput,
    value: bigint
  ) => {
    const newBidInputs = [...bidInputs]
    newBidInputs[index] = { ...newBidInputs[index], [name]: value }
    // calculate minBuyAmount and set error messages
    const { maxPrice, bidAmount: sellAmount } = newBidInputs[index]

    let errorMessage =
      maxPrice <= 0
        ? 'Max price cannot be zero'
        : sellAmount <= 0
          ? 'Sell amount cannot be zero'
          : ''

    const minBuyAmount = !errorMessage
      ? sellAmount / BigInt(maxPrice || 1)
      : BigInt(0)

    // TODO: check minBuyAmount is valid for project

    newBidInputs[index] = { ...newBidInputs[index], minBuyAmount, errorMessage }

    setBidInputs(newBidInputs)
  }

  console.log('error', stringify(tanstack.error), 'data', tanstack.data)
  // console.log('bidInputs', JSON.stringify(bidInputs))

  // show error on modal
  useEffect(() => {
    const err = tanstack.error
    if (!err || !('shortMessage' in err) || err.shortMessage === errorMessage) return
    setGlobalError(err.shortMessage)
    tanstack.reset()
  }, [tanstack, errorMessage, setGlobalError])

  return (
    <>
      <h2 className="text-3xl font-bold px-2 py-4 mb-3">Bids</h2>
      <div className="grid md:grid-cols-2 gap-5 md:gap-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-100 dark:bg-slate-950 text-black dark:text-white font-semibold">Max Price</TableHead>
              <TableHead className="bg-gray-100 dark:bg-slate-950 text-black dark:text-white font-semibold">Bid Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bidInputs.map((_, index) => (
              <TableRow key={index}>
                <TableCell className={cn({ 'bg-gray-100 dark:bg-gray-900/50': index % 2 })}>
                  <CurrencyInput
                    placeholder="0.00"
                    name={`maxPrice${index}`}
                    handlechange={val =>
                      handleInputChange(index, 'maxPrice', val)
                    }
                  />
                </TableCell>
                <TableCell className={cn({ 'bg-gray-100 dark:bg-gray-900/50': index % 2 })}>
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

        <div className="flex flex-col justify-between px-5">
          <Button
            disabled={!address || bidInputs.some(item => item.errorMessage !== '')}
            onClick={() => handleSubmit()}
            type="submit"
            size="lg"
          >
            Submit Bids
          </Button>

          <div className="flex flex-col gap-2">
            <p className="flex justify-between w-full">
              {textValues.currentBid.split(':').map((txt, index) => !index ? (
                <b key={txt} className="block">{txt}</b>
              ) : txt)}
            </p>
            <p className="flex justify-between w-full">
              {textValues.currentCost.split(':').map((txt, index) => !index ? (
                <b key={txt} className="block">{txt}</b>
              ) : txt)}
            </p>
            <p className="mt-2 text-sm text-right">
              {textValues.maxTokenLimit}
            </p>
          </div>
        </div>
      </div>
    </>
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
    <div className="relative">
      <span className="absolute inset-y-0 flex items-center left-2">$</span>

      <input
        type="text" // Changed to text to handle manual formatting
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full pl-6 bg-transparent focus:outline-none"
        {...props}
      />
    </div>
  )
}

type BidInput = {
  maxPrice: bigint
  bidAmount: bigint
  minBuyAmount: bigint
  errorMessage: string
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
    balance && balance >= amount
  )

  // Check the allowance
  const allowance = await readContract(wagmiConfig, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [account, spender]
  })

  const isBalanceSufficient = balance && balance >= amount
  const isAllowanceSufficient =
    allowance && allowance >= amount

  return { isBalanceSufficient, isAllowanceSufficient }
}
