import { TestnetMBOTSPL, TokenContractData } from 'smartsale-contracts'
import BitcashPic from '../assets/img/bitcash.webp'
import MasterbotsPic from '../assets/img/masterbots.webp'
import WizartPic from '../assets/img/wizartworld.webp'
import { StaticImageData } from 'next/image'
import { merge } from 'lodash'

export function getProjects(dict: any) {
  return merge(projects, dict.projects) as Project[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bitcash | Bitlauncher',
    slug: 'bitcash-bitlauncher',
    pitch: 'Building Ai & Crypto Apps For The New Global Economy.',
    fundraiseGoal: '$400,000',
    maxAllocation: '$1,500',
    heroImage: '/images/projects/bitcash-cover.webp',
    thumbnailImage: BitcashPic,
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/bitcash-bitlauncher',
    token: TestnetMBOTSPL,
    auctionId: 9,
    presaleOpen: false,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG'
  },
  {
    id: 2,
    title: 'Masterbots',
    slug: '',
    pitch:
      'Elevating AI Beyond ChatGPT: Specialized Chatbots, Social Sharing and User-Friendly Innovation',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/masterbots.webp',
    thumbnailImage: MasterbotsPic,
    badgeText: 'COMING SOON',
    linkPath: '#',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG'
  },
  {
    id: 3,
    title: 'WizartWorld',
    slug: '',
    pitch: 'Unleash The Master Artist In You - Generate Ai Art & NFTs.',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/wizartworld.webp',
    thumbnailImage: WizartPic,
    badgeText: 'FUTURE',
    linkPath: '#',
    token: TestnetMBOTSPL,
    auctionId: 9,
    twitterUsername: 'wizartworld',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG'
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
  thumbnailImage: string | StaticImageData
  badgeText: string
  linkPath: string
  twitterUsername: string
  telegramGroup: string
  discordServer: string
  content?: Record<
    | 'highlights'
    | 'product'
    | 'problem'
    | 'solution'
    | 'businessModel'
    | 'tokenomics',
    Record<'title' | 'content', string | string[][]>
  >
  auctionId?: number
  token?: TokenContractData
  presaleOpen?: boolean
  registrationOpen?: boolean
  auctionClosed?: boolean
}

export interface ProjectContent {
  id: number
  content: Record<
    | 'highlights'
    | 'product'
    | 'problem'
    | 'solution'
    | 'businessModel'
    | 'tokenomics',
    Record<'title' | 'content', string | string[][]>
  >
}

export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project

export async function getProjectBySlug(slug: string, dict: any) {
  const project = projects.find(p => p.slug == slug)
  if (!project) return null
  const content = dict.projects.find((c: any) => c.id == project.id)?.content
  return { ...project, content } as Project
}
