export const navStruct: NavStruct = {
  sections: [
    {
      label: 'About',
      main: true,
      items: [
        {
          label: 'For Investors',
          href: '/about/investors',
          description:
            'Information and resources for potential and current investors.'
        },
        {
          label: 'For AI Startups',
          href: '/about/ai-startups',
          description:
            'Support and resources for AI startups looking to grow and innovate.'
        },
        {
          label: 'Bitcash App',
          href: '/about/bitcash-app',
          description: 'Learn more about the Bitcash app and its features.'
        },
        {
          label: 'DAOs & dBoard',
          href: '/about/daos-dboard',
          description: 'Discover our DAOs and the decentralized dashboard.'
        },

        {
          label: 'Referral System',
          href: '/about/referral-system',
          description:
            'Learn how our referral system can benefit you and your network.'
        },
        {
          label: 'FAQ',
          href: '#faq',
          description: 'Frequently asked questions and their answers.'
        }
      ]
    },
    {
      label: 'Learn',
      main: true,
      items: [
        {
          label: 'How it works',
          href: '/learn/how-it-works',
          description: 'Simple explanation on how our system operates.'
        },
        {
          label: 'Batch Auctions',
          href: '/learn/batch-auctions',
          description: 'Understand the process and benefits of batch auctions.'
        },
        {
          label: 'Tokenization',
          href: '/learn/tokenization',
          description: 'Learn about tokenization and its applications.'
        },
        {
          label: 'Security Tips',
          href: '/learn/security',
          description: 'Best practices for ensuring security in your projects.'
        },
        {
          label: 'Blog & News',
          href: '/blog',
          description: 'Stay updated with our latest blog posts and news.'
        },
        {
          label: 'Media',
          href: '/learn/media',
          description: 'Explore our media resources and press releases.'
        }
      ]
    },
    { label: 'Whitepaper', href: '/whitepaper', main: true },
    {
      label: 'Bitluancher',
      items: [
        { label: 'Whitepaper', href: '/whitepaper' },
        { label: 'BC Token', href: '/bc-token' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Product Calls', href: '/whitepaper' },
        {
          label: 'Privacy Policy',
          href: '/legal/privacy',
          description:
            'Read our privacy policy to understand how we handle your data.'
        },
        {
          label: 'Terms of Service',
          href: '/legal/terms',
          description:
            'Review the terms and conditions that govern the use of our services.'
        }
      ]
    },
    {
      label: 'Developers',
      items: [
        { label: 'Open Source', href: '#' },
        {
          label: 'Engineering Blog',
          href: '/learn/developers'
        },
        {
          label: 'Engineering Calls',
          href: '/learn/developers'
        },
        {
          label: 'Bounties',
          href: '/learn/developers'
        },
        { label: 'Documentation', href: '/docs' },
        { label: 'Screencasts', href: '#' }
      ]
    },
    {
      label: 'Communities',
      items: [
        { label: 'Discord', href: '/communities/discord' },
        { label: 'Telegram Chat', href: '/communities/telegram-chat' },
        { label: 'Telegram News', href: '/communities/telegram-news' },
        { label: 'Twitter', href: '/communities/twitter' },
        { label: 'YouTube', href: '/communities/youtube' },
        { label: 'Instagram', href: '/communities/instagram' }
      ]
    }
  ]
}

export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface NavSection {
  main?: boolean
  description?: string
  label: string
  href?: string
  items?: NavItem[]
}

export interface NavStruct {
  sections: NavSection[]
}
