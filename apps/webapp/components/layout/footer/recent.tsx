import { BlogSections } from '@/components/routes/blog/sections'
import { ArticlesSection } from '@/services/datocms'
import { LangProp } from '@/types/routing.type'

export function RecentArticles({ lang }: LangProp) {
  return (
    <section>
      <h2 className="w-full h-32 pt-6 pb-10 leading-loose text-center heading2">
        Recent Articles and Media
      </h2>
      <BlogSections
        sections={recentArcticles as unknown as ArticlesSection[]}
        lang={lang}
      />
    </section>
  )
}
const recentArcticles = [
  {
    name: 'Recent',
    slug: 'ai',
    articles: [
      {
        id: 'SpdLuuYEQgW8rwSHNzhmxA',
        topics: ['Apps'],
        title: '',
        slug: 'masterbots-elevating-ai-beyond-chatgpt-with-social-sharing-and-user-friendly-inno',
        authorName: 'Jun Dam',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/1686758812-jdamx170-removebg-preview.png'
        },
        _publishedAt: '2024-04-04T23:48:35+01:00',
        description:
          'The blog introduces Masterbots, a platform revolutionizing AI interaction with user-friendly, domain-specific chatbots and a unique social sharing feature, inviting collaborators to join its open-source, community-driven development.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/1712270604-screenshot-2024-04-04-at-3-43-11-pm.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: '190259319',
        topics: ['Summary', 'LLM', 'Training'],
        title: '',
        slug: 'latent-space-podcast-8-16-23-summary-the-mathematics-of-training-llms-with-que',
        authorName: 'Prof. Otto Nomos',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
        },
        _publishedAt: '2023-10-05T09:19:45+01:00',
        description:
          'Explore the math behind training LLMs with Quentin Anthony from Eleuther AI. Dive into the Transformers Math 101 article & master distributed training techniques for peak GPU performance.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/1692324088-screenshot-2023-08-17-at-9-59-17-pm.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: '190259129',
        topics: ['LLM', 'Hardware', 'Summary', 'Edge'],
        title: '',
        slug: 'latent-space-podcast-8-10-23-summary-llms-everywhere-running-70b-models-in-browse',
        authorName: 'Prof. Otto Nomos',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
        },
        _publishedAt: '2023-10-05T09:18:37+01:00',
        description:
          "Explore the magic of MLC with Tianqi Chen: deploying 70B models on browsers & iPhones. Dive into XGBoost, TVM's creation, & the future of universal AI deployments. ",
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/1691894611-screenshot-2023-08-12-at-10-42-43-pm.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: '190259087',
        topics: ['Summary', 'LLM', 'Code', 'Open Source', 'Small Models'],
        title: '',
        slug: 'latent-space-podcast-8-4-23-summary-latent-space-x-ai-breakdown-crossover-pod',
        authorName: 'Prof. Otto Nomos',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
        },
        _publishedAt: '2023-10-05T09:16:33+01:00',
        description:
          'Join AI Breakdown & Latent Space for the summer AI tech roundup: Dive into GPT4.5, Llama 2, AI tools, the rising AI engineer, and more!',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/1691539617-screenshot-2023-08-08-at-8-02-52-pm.png'
        },
        contentBlock: [],
        seo: null
      }
    ]
  },
  {
    name: 'Media',
    slug: 'media',
    articles: [
      {
        id: 'Media1',
        topics: ['Video', 'Interview'],
        title: 'Interview with AI Pioneer',
        slug: 'interview-with-ai-pioneer',
        authorName: 'Jane Doe',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/author-janedoe.png'
        },
        _publishedAt: '2024-05-01T10:00:00+01:00',
        description:
          'An exclusive interview with a leading AI pioneer discussing the future of technology and its impact on society.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/interview-thumbnail.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: 'Media2',
        topics: ['Documentary', 'AI Ethics'],
        title: 'The Ethics of Artificial Intelligence',
        slug: 'the-ethics-of-artificial-intelligence',
        authorName: 'John Smith',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/author-johnsmith.png'
        },
        _publishedAt: '2024-06-15T15:30:00+01:00',
        description:
          'A deep dive into the ethical considerations and debates surrounding the development and use of artificial intelligence.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/ethics-documentary-thumbnail.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: 'Media3',
        topics: ['Podcast', 'AI Research'],
        title: 'AI Research Trends 2024',
        slug: 'ai-research-trends-2024',
        authorName: 'Alice Johnson',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/author-alicejohnson.png'
        },
        _publishedAt: '2024-07-20T12:00:00+01:00',
        description:
          'A comprehensive overview of the latest trends and breakthroughs in AI research for the year 2024.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/ai-research-trends-thumbnail.png'
        },
        contentBlock: [],
        seo: null
      },
      {
        id: 'Media4',
        topics: ['Webinar', 'AI Applications'],
        title: 'AI in Healthcare Webinar',
        slug: 'ai-in-healthcare-webinar',
        authorName: 'Dr. Emily White',
        authorPicture: {
          url: 'https://www.datocms-assets.com/101962/author-emilywhite.png'
        },
        _publishedAt: '2024-08-05T14:00:00+01:00',
        description:
          'Join us for a webinar on the applications of AI in healthcare, featuring insights from leading experts in the field.',
        thumbnail: {
          url: 'https://www.datocms-assets.com/101962/ai-healthcare-webinar-thumbnail.png'
        },
        contentBlock: [],
        seo: null
      }
    ]
  }
]
