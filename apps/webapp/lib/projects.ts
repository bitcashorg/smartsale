export const projects: Project[] = [
  {
    title: 'Masterbots',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$650,000',
    maxAllocation: 'TBA',
    heroImage: '/placeholder-citizen-conflict.svg',
    badgeText: 'PRE-SALE ACTIVE',
    linkPath: '/masterbots'
  },
  {
    title: 'WizardWorld',
    pitch: 'Generate AI images and mint them as NFTs',
    fundraiseGoal: '$100,000',
    maxAllocation: 'TBA',
    heroImage: '/placeholder-overlay-protocol.svg',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/wizard-world'
  },
  {
    title: 'Bitcash Bank',
    pitch: 'P2P exchange for local currency stablecoins',
    fundraiseGoal: '$500,000',
    maxAllocation: '$10,000',
    heroImage: '/placeholder-future-finance.svg',
    badgeText: 'REGISTRATION OPEN',
    linkPath: '/bitcash'
  }
]

export interface Project {
  title: string
  pitch: string
  fundraiseGoal: string
  maxAllocation: string
  heroImage: string
  badgeText: string
  linkPath: string
}
