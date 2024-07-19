# Smartsale Webapp

## Tech

- [Next.js](https://nextjs.org) 14.
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com).
  - [Radix UI](https://radix-ui.com) for headless component primitives.
- [Supabase](https://supabase.io) for user authentication and data storage.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [clsx](https://github.com/lukeed/clsx) utility for conditional class names.
- [CVA](https://cva.style/docs) Class Variance Authority is used for TailwindCSS variants on components (when applicable).
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI.

## Running locally

Make sure to have your `.env` file set up with the following:

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
bun install
bun dev
```

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to our APIs and tools.

## Conventions

We adhere to canonical NextJS conventions and leverage the Cursor.so AI editor to help us iterate faster.
Our code style guidelines can be found in the [.cursorrules](./.cursorrules) file.

1. **Always rely on the NextJS app router for state changes**: Use the App Router for state changes through SSR and hydration first, and server actions as a second option. For example, pagination, filtering, sorting, etc., should use URL parameters and SSR.

2. **Pay special attention to Web Vitals**: LCP, CLS, and FID are the most critical metrics. Learn more about [Web Vitals](https://web.dev/articles/vitals) and [NextJS: Core Web Vitals](https://nextjs.org/learn-pages-router/seo/web-performance). This website uses Static Site Generation for all pages to improve the initial load time.

3. **Avoid 'use client' as much as possible**: Use it as a last resort when there's no other option. Server components are the default in NextJS 14. Always use Next.js app router parameters to fetch data using Next.js SSR features and let Next.js hydrate the React view. Do not use 'use client' to fetch data and set state, as this can cause issues with refreshing your application's view state, and that component won't be hydrated by the Next.js app router. Instead, use 'use client' when you need to use Web APIs like the camera. NEVER use 'use client' to do things the way you typically would in a React app with Vite, as it defeats the purpose of using Next.js. When you 'use client', make sure it is within small components like a button or icons. Refer to the [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns), [Rendering](https://nextjs.org/docs/app/building-your-application/rendering), and [Routing](https://nextjs.org/docs/app/building-your-application/routing) guides for more information. See https://chatgpt.com/share/7c0e8a2a-049f-4acc-947e-2d99ef3d64f5
