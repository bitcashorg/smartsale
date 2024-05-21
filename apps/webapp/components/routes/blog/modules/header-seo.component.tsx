import Head from "next/head"

interface HeadSEO {
  title: string
  description: string
  ogType: string
  ogImageUrl?: string
  ogUrl: string
  twitterCard: string
}

export const HeaderSEO: React.FC<HeadSEO> = ({
  title,
  description,
  ogType,
  ogImageUrl,
  ogUrl,
  twitterCard,
}) => {
  // ;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta key="description" name="description" content={description} />
      <meta key="twitter:card" name="twitter:card" content={twitterCard} />
      <meta key="twitter:site" name="twitter:site" content={ogUrl} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={ogImageUrl} />
      <link key="canonical" rel="canonical" href={ogUrl} />
      <meta property="og:locale" content="en_US" />
      <meta key="og:site_name" property="og:site_name" content={title} />
      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={ogImageUrl} />
      <meta key="og:url" property="og:url" content={ogUrl} />
    </Head>
  )
}
