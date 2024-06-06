import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function BlogHeroCard({
  title,
  description,
  tag,
  link
}: BlogHeroCardProps) {
  return (
    <Card className="bg-gray-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tag && <Badge variant="secondary">{tag}</Badge>}
      </CardContent>
      <CardFooter>
        <Link className="text-blue-500" href={link}>
          Learn More
        </Link>
      </CardFooter>
    </Card>
  )
}

export function BlogHero() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-center p-4 bg-gray-200 rounded-lg">
            <img
              alt="Illustration"
              className="w-full h-48 md:w-auto"
              src="/placeholder.svg"
              style={{
                aspectRatio: '1',
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{headerContent.title}</h2>
            <p className="mt-2 text-gray-600">{headerContent.description}</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <div className="font-bold">/Recents:</div>
            <div className="mt-2">
              <div className="font-bold">{headerContent.author}</div>
              <div>
                {headerContent.date} · {headerContent.readTime}
              </div>
              <div className="mt-1 text-blue-500">{headerContent.tag}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            {cards.map(card => (
              <BlogHeroCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Define text content and card data in objects
const headerContent = {
  title:
    'Streamlining Online Purchases with Bitcoin: A Guide to Using Bitcoin for Transactions',
  description:
    'Unlock the convenience of online purchases with Bitcoin. Learn how to effortlessly use Bitcoin for secure and seamless transactions in our comprehensive guide.',
  author: 'Maxi Millie',
  date: 'Oct 04, 2023',
  readTime: '3 min read',
  tag: 'bitcoin'
}

const cards = [
  {
    title: 'Crypto Clarity',
    description: 'Oct 05, 2023 · 1 min read',
    tag: 'crypto',
    link: '#'
  },
  {
    title:
      'A Framework for Blockchain Governance Design: The Prysm Group Wheel [Commentary]',
    description:
      'Navigate the complexities of blockchain governance with the Prysm Group Wheel. Your roadmap to effective blockchain governance design.',
    link: '#'
  },
  {
    title: 'Bootstrap Briggs',
    description: 'Oct 04, 2023 · 11 min read',
    tag: 'startup',
    link: '#'
  },
  {
    title: 'Mastering Cash Flow: The Ultimate Guide for Startup Founders',
    description:
      'Master cash flow with our ultimate guide for startup founders. Learn strategies to maintain liquidity, manage finances, and ensure business stability.',
    link: '#'
  },
  {
    title: 'Master Moneybags',
    description: 'Oct 04, 2023 · 9 min read',
    tag: 'investing',
    link: '#'
  },
  {
    title:
      'Mastering Portfolio Management: The Art of Diversification, Asset Allocation...',
    description:
      'Optimize Your Portfolio: Learn the Art of Diversification, Asset Allocation, and Rebalancing for Successful Portfolio Management.',
    link: '#'
  }
]

// Types moved to the bottom
interface HeaderContent {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  tag: string
}

interface CardData {
  title: string
  description: string
  tag?: string
  link: string
}

interface BlogHeroCardProps {
  title: string
  description: string
  tag?: string
  link: string
}
