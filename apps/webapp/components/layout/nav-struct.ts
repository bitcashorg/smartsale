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
          label: 'FAQ',
          href: '#faq',
          description: 'Frequently asked questions and their answers.'
        },
        {
          label: 'Communities',
          href: '/about/communities',
          description: 'Join and participate in our various communities.'
        }
      ]
    },
    {
      label: 'Learn',
      main: true,
      items: [
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
        },
        {
          label: 'Developers',
          href: '/learn/developers',
          description: 'Resources and guides for developers.'
        }
      ]
    },
    { label: 'Whitepaper', href: '/whitepaper', main: true },
    {
      label: 'Information',
      items: [
        { label: 'Apply for IDO', href: '#' },
        { label: 'Forum', href: '#' }
      ]
    },
    {
      label: 'Legal',
      items: [
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
      label: 'Resources',
      items: [
        { label: 'Whitepaper', href: '/whitepaper' },
        { label: 'Projects', href: '#' }
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
