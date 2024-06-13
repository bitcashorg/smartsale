'use client'
import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { LangProp } from '@/types/routing.type'

export function Navigation({ lang }: LangProp) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {content.sections.map(section => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={section.ulClasses}>
                {section.items.map(item => (
                  <ListItem
                    key={item.title}
                    href={'/' + lang + item.href}
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link
            href={'/' + lang + content.whitepaper.link}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {content.whitepaper.text}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
]

const content = {
  sections: [
    {
      title: 'About',
      ulClasses:
        'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
      items: [
        {
          title: 'For Investors',
          href: '/about/investors',
          description:
            'Information and resources for potential and current investors.'
        },
        {
          title: 'For AI Startups',
          href: '/about/ai-startups',
          description:
            'Support and resources for AI startups looking to grow and innovate.'
        },
        {
          title: 'Bitcash App',
          href: '/about/bitcash-app',
          description: 'Learn more about the Bitcash app and its features.'
        },
        {
          title: 'DAOs & dBoard',
          href: '/about/daos-dboard',
          description: 'Discover our DAOs and the decentralized dashboard.'
        },
        {
          title: 'FAQ',
          href: '#faq',
          description: 'Frequently asked questions and their answers.'
        },
        {
          title: 'Communities',
          href: '/about/communities',
          description: 'Join and participate in our various communities.'
        }
      ]
    },
    {
      title: 'Learn',
      ulClasses:
        'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]',
      items: [
        {
          title: 'Batch Auctions',
          href: '/learn/batch-auctions',
          description: 'Understand the process and benefits of batch auctions.'
        },
        {
          title: 'Tokenization',
          href: '/learn/tokenization',
          description: 'Learn about tokenization and its applications.'
        },
        {
          title: 'Security Tips',
          href: '/learn/security',
          description: 'Best practices for ensuring security in your projects.'
        },
        {
          title: 'Blog & News',
          href: '/blog',
          description: 'Stay updated with our latest blog posts and news.'
        },
        {
          title: 'Media',
          href: '/learn/media',
          description: 'Explore our media resources and press releases.'
        },
        {
          title: 'Developers',
          href: '/learn/developers',
          description: 'Resources and guides for developers.'
        }
      ]
    }
  ],
  whitepaper: { text: 'Whitepaper', link: '/whitepaper' }
}
