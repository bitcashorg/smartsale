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
    auctionId: 5,
    token: TestnetMBOTSPL
  },
  {
    title: 'WizartWorld',
    slug: 'wizartworld',
    pitch: 'Generate AI images and mint them as NFTs',
    fundraiseGoal: '$100,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/wizartworld.png',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/wizard-world'
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
}

export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project
