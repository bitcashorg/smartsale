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

export function AuctionBids({ project }: AuctionBidsProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-red-600">Max Price</TableHead>
              <TableHead className="bg-green-600">Tokens</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="bg-green-500">
                  <CurrencyInput
                    placeholder="0.00"
                    name={`maxPrice${index}`}
                    dollar={true}
                  />
                </TableCell>
                <TableCell className="bg-green-500">
                  <CurrencyInput placeholder="0.00" name={`tokens${index}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Submit Bids
        </button>
      </form>
      <div className="mt-4">
        <p>{textValues.currentBid}</p>
        <p>{textValues.currentCost}</p>
        <p className="mt-2 text-sm">{textValues.maxTokenLimit}</p>
      </div>
    </div>
  )
}

function CurrencyInput({ placeholder, name, dollar }: CurrencyInputProps) {
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
      {dollar && (
        <span className="absolute inset-y-0 flex items-center left-2">$</span>
      )}
      <input
        type="text" // Changed to text to handle manual formatting
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full pl-6 text-white bg-transparent placeholder:text-white focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}

// ... Rest of the AuctionBids component ...

interface AuctionBidsProps {
  project: ProjectWithAuction
}

interface CurrencyInputProps {
  dollar?: boolean
  placeholder: string
  name: string
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
