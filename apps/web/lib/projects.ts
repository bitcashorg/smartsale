import type { Tables } from '@smartsale/supabase'
import { merge } from 'lodash'
import type { StaticImageData } from 'next/image'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function getProjects(dict: any) {
  return merge(projects, dict.projects) as Project[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bitlauncher | Bitcash',
    slug: 'bitcash-bitlauncher',
    pitch: 'Building Ai & Crypto Apps For The New Global Economy.',
    fundraiseGoal: '$400,000',
    maxAllocation: '$1,500',
    heroImage: '/images/projects/bitcash-cover.webp',
    thumbnailImage: '/images/bitcash.webp',
    badgeText: 'LIVE',
    linkPath: '/bitcash-bitlauncher',
    token: {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      name: 'test',
    },
    auctionId: 9,
    presaleOpen: false,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    // September 15, 2024
    presaleStart: '2024-09-15T00:00:00Z',
    presaleId: 1, // in database
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
    thumbnailImage: '/images/masterbots.webp',
    badgeText: 'COMING SOON',
    linkPath: '#',
    auctionId: 9,
    token: {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      name: 'test',
    },
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    presaleStart: '',
  },
  {
    id: 3,
    title: 'WizartWorld',
    slug: '',
    pitch: 'Unleash The Master Artist In You - Generate Ai Art & NFTs.',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/wizartworld.webp',
    thumbnailImage: '/images/wizartworld.webp',
    badgeText: 'FUTURE',
    linkPath: '#',
    token: {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      name: 'test',
    },
    auctionId: 9,
    twitterUsername: 'wizartworld',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    presaleStart: '2024-09-15T00:00:00Z',
  },
  {
    id: 4,
    title: 'Bitlauncher Test',
    slug: 'bitlauncher-test',
    pitch: 'Building Ai & Crypto Apps For The New Global Economy.',
    fundraiseGoal: '$400,000',
    maxAllocation: '$1,500',
    heroImage: '/images/projects/bitcash-cover.webp',
    thumbnailImage: '/images/bitcash.webp',
    badgeText: 'LIVE',
    linkPath: '/bitlauncher-test',
    token: {
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18,
      name: 'test',
    },
    auctionId: 9,
    presaleOpen: true,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    // September 15, 2024
    presaleStart: '2024-09-15T00:00:00Z',
    presaleId: 2, // in database
  },
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
    ContentSection
  >
  auctionId?: number
  token?: {
    address: string
    decimals: number
    name: string
  }
  presaleOpen?: boolean
  registrationOpen?: boolean
  auctionClosed?: boolean
  presaleId?: number
  presaleStart?: string
}

export interface ContentSection {
  title: string
  content: string | string[][]
  image: string
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
    ContentSection
  >
}
export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project &
  Tables<'presale'>

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function getProjectBySlug(slug: string, dict: any) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return null
  const content =
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    dict.projects.find((c: any) => c.id === project.id)?.content || {}
  return { ...project, content } as Project
}
