import { TestnetMBOTSPL, TokenContractData } from 'smartsale-contracts'

export const projects: Project[] = [
  {
    id: 3,
    title: 'Bitcash',
    slug: 'bitcash',
    pitch: 'P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins',
    fundraiseGoal: '$350,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/bitcash.png',
    badgeText: 'PRE-SALE ACTIVE',
    linkPath: '/bitcash',
    token: TestnetMBOTSPL,
    auctionId: 9,
    auctionClosed: true,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitcashorg',
    discordServer: 'a4gwhT9G',
  },
  {
    id: 1,
    title: 'Masterbots',
    slug: 'masterbots',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$650,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/masterbots.png',
    badgeText: 'COMING SOON',
    linkPath: '/masterbots',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'masterbotsai',
    discordServer: 'a4gwhT9G',
  },
  {
    id: 2,
    title: 'WizartWorld',
    slug: 'wizartworld',
    pitch: 'Generate AI images and mint them as NFTs',
    fundraiseGoal: '$100,000',
    maxAllocation: 'TBA',
    heroImage: '/images/projects/wizartworld.png',
    badgeText: 'IN PREPARATION',
    linkPath: '/wizartworld',
    token: TestnetMBOTSPL,
    auctionId: 9,
    registrationOpen: true,
    twitterUsername: 'wwai',
    telegramGroup: 'wwai',
    discordServer: 'a4gwhT9G',
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
  twitterUsername: string
  telegramGroup: string
  discordServer: string
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
