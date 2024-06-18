import { BlogSections } from '@/components/routes/blog/sections'
import { ArticlesSection } from '@/services/datocms'
import { fetchPublicYouTubePlaylist } from '@/services/youtube'
import { LangProp } from '@/types/routing.type'
// import { ShortVideoStrip } from '@/components/layout/footer/short-video'
import {
  MediaSection,
  MediaSections
} from '@/components/layout/footer/media-section'
import { Section } from '@/components/shared/section'

export async function RecentArticles({ lang }: LangProp) {
  const latestProductCalls = await fetchPublicYouTubePlaylist(
    'PL6BKGVqekhB_R8wjPFN-p6dGkcIy_bM1D',
    4
  )
  const latestShorts = await fetchPublicYouTubePlaylist(
    'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
    8
  )

  const recentMedia: MediaSection[] = [
    {
      name: 'Shorts',
      slug: 'shorts',
      videos: latestShorts
    },
    {
      name: 'Product Calls',
      slug: 'product',
      videos: latestProductCalls
    }
  ]

  const recentArcticles = [
    {
      name: 'Recent',
      slug: 'ai',
      articles: [
        {
          id: 'SpdLuuYEQgW8rwSHNzhmxA',
          topics: ['Apps'],
          title:
            'Masterbots: Elevating AI Beyond ChatGPT with Social Sharing and User-Friendly Innovation',
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
          title:
            'Latent Space Podcast 8-16-23 Summary: The Mathematics of Training LLMs with Quentin Anthony',
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
          title:
            'Latent Space Podcast 8-10-23 Summary: LLMs Everywhere - Running 70B Models in Browsers',
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
          title:
            'Latent Space Podcast 8-4-23 Summary: Latent Space x AI Breakdown - Crossover Podcast',
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
    }
  ]

  return (
    <Section heading="Recent Media and Articles">
      <MediaSections sections={recentMedia} lang={lang} />
      <BlogSections
        sections={recentArcticles as unknown as ArticlesSection[]}
        lang={lang}
      />
    </Section>
  )
  {
    /* <ShortVideoStrip videos={latestShorts} /> */
  }
}
