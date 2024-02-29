import { ERC20ContractData, TestnetMBOTSPL } from 'smartsale-contracts'

export const projects: Project[] = [
  {
    title: 'Masterbots',
    slug: 'masterbots',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$650,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/masterbots.png',
    badgeText: 'PRE-SALE ACTIVE',
    linkPath: '/masterbots',
    auctionId: 8,
    token: TestnetMBOTSPL,
    presaleOpen: true
  },
  {
    title: 'WizartWorld',
    slug: 'wizartworld',
    pitch: 'Generate AI images and mint them as NFTs',
    fundraiseGoal: '$100,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/wizartworld.png',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/wizartworld',
    token: TestnetMBOTSPL,
    auctionId: 8,
    registrationOpen: true
  },
  {
    title: 'Bitcash Bank',
    slug: 'bitcash',
    pitch: 'P2P exchange for local currency stablecoins',
    fundraiseGoal: '$500,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/bitcash.png',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/bitcash'
  }
]

export interface Project {
  title: string
  slug: string
  pitch: string
  fundraiseGoal: string
  maxAllocation: string
  heroImage: string
  badgeText: string
  linkPath: string
  auctionId?: number
  token?: ERC20ContractData
  presaleOpen?: boolean
  registrationOpen?: boolean
}

export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project
