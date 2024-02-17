import { DepositCard } from '@/components/deposit-card'
import React from 'react'

export default function Funding() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">
        Fund your wallet / Get USDCred
      </h1>
      $100 Cred.
      <DepositCard/>
      <h2>Deposits</h2>
      <ul>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
        <li>one deposit</li>
      </ul>
    </div>
  )
}

