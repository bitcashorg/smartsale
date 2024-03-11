import { TokenContractData, TestnetMBOTSPL } from 'smartsale-contracts'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Masterbots',
    slug: 'masterbots',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$650,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/masterbots.png',
    badgeText: 'PRE-SALE ACTIVE',
    linkPath: '/masterbots',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true
  },
  {
    id: 2,
    title: 'WizartWorld',
    slug: 'wizartworld',
    pitch: 'Generate AI images and mint them as NFTs',
    fundraiseGoal: '$100,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/wizartworld.png',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/wizartworld',
    token: TestnetMBOTSPL,
    auctionId: 9,
    registrationOpen: true
  },
  {
    id: 3,
    title: 'Bitcash Bank',
    slug: 'bitcash',
    pitch: 'P2P exchange for local currency stablecoins',
    fundraiseGoal: '$500,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/bitcash.png',
    badgeText: 'AUCTION CLOSED',
    linkPath: '/bitcash',
    token: TestnetMBOTSPL,
    auctionId: 9,
    auctionClosed: true
  }
]

export interface Project {
  id: number
  title: string
  slug: string
  pitch: string
  fundraiseGoal: string
  maxAllocation: string
  heroImage: string
  badgeText: string
  linkPath: string
  auctionId?: number
  token?: TokenContractData
  presaleOpen?: boolean
  registrationOpen?: boolean
  auctionClosed?: boolean
}

export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project
