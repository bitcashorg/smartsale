# smartsale Web UI

<p align="center">
  <a href="#tech"><strong>Tech</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#coding-style-best-practices"><strong>Coding Style Best Practices</strong></a> ·
  <a href="#styling"><strong>Styling</strong></a> ·
  <a href="#sanity"><strong>Sanity</strong></a>
</p>
<br/>

## Tech

- [Next.js](https://nextjs.org) App Router.
- React Server Components (RSCs), Suspense, and Server Actions.
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI.
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com).
  - [Radix UI](https://radix-ui.com) for headless component primitives.
  - Icons from [Phosphor Icons](https://phosphoricons.com).
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv).
- [Supabase](https://supabase.io) for user authentication and data storage.
- [Sanity](https://sanity.io) for content management.
- [Vercel](https://vercel.com) for hosting and serverless functions.
- [Vercel CLI](https://vercel.com/download) for local development.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [clsx](https://github.com/lukeed/clsx) utility for conditional class names.
- [CVA](https://cva.style/docs) Class Variance Authority is used for TailwindCSS variants on components (when applicable).

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

## Coding Style Best Practices

### General Guidelines

- **Semantic, Idiomatic, Functional, and Declarative Code:** Utilize modern JavaScript features and TypeScript.
- **React's Declarative Nature:** Declare your component structure, letting React and Next.js handle DOM changes. Avoid imperative code.
- **Readable and Meaningful Naming:** Use meaningful names and strive for self-explanatory code.
- **Single Responsibility Principle:** Create small, focused components.
- **Favor Composability:** Leverage pure functions, keep state simple and flat, avoid deeply nested objects.

### JavaScript Conventions

- **Naming Variables:**
  - Booleans: Use auxiliary verbs such as `does`, `has`, `is`, and `should`. For example, `isDisabled`, `isLoading`.
- **Composition:**
  - Break down components into smaller parts with minimal props and compose them together.
- **Filenames:**
  - Use lowercase with dash separators for directories and names, e.g., `components/auth-wizard`.
  - File extensions should be `.config.ts`, `.test.ts`, `.context.tsx`, `.type.ts`, `.hook.ts`. For components, we can skip to add a file extension.
- **Avoid Default Export:** Use named exports instead.

```ts
const helloMessage = 'hello';
export function saySomething() {
  const someValue = 'fren';
  console.log(`${helloMessage} ${someValue}`);
}
```

- **Receive an Object, Return an Object (RORO):**

```ts
// types/services.type.ts
export interface ServiceParams {
  limit?: number;
  offset?: number;
}

// services/account/account.type.ts
export interface GetAccountsParams extends ServiceParams {
  account?: string;
}

// services/account/account.service.ts
export async function getAccounts({ account, limit = 15, offset = 0 }: GetAccountsParams) {
  const where = account
    ? { account: { _eq: account } }
    : null;

  return getGraphQLSdk()
    .chain.query.accounts({ where, limit, offset })
    .get({ ...everything });
}
```

- **Use Regular Function Calls On Components:** Avoid using arrow functions on components to prevent unnecessary re-renders and build errors due to hoisting.
  
```tsx
  export function MyComponent() {
    const myMethod = () => console.log('Hello, World!');

    return (
      <div>
        <button onClick={myMethod}>Click Me</button>
      </div>
    );
  }
```

### TypeScript Conventions

- **Type Definitions:**
  - Use `interface` for objects and classes.
  - Use `type` for union types, tuples, aliases and complex types.
  - Use `const` for literal types. This must be used for constants.
  - Use `enum` for enumerations. This is useful when you have a fixed set of values.
- **Always Type Your TypeScript:** Avoid using `any` as much as possible. `any` is a code smell and should be avoided at all cost. Any PR with `any` will be push back.\
- **Type Inference:** Let TypeScript infer types when possible. Explicitly typing everything can be cumbersome and unnecessary.
- **Type Annotations:** Use type annotations for function arguments and return types. This makes the code more readable and helps with debugging.
- **Type Assertion:** Use `as` for type assertion. This is the preferred way to assert types in TypeScript.
- **Type Guards:** Use type guards to narrow down types. This is useful when you want to check the type of a variable at runtime. Use it when you want to check if a variable is of a certain type.

### ReactJS Conventions

- **Declare Component with Function Keyword:**

```tsx
export function MyReactComponent({ myParam }: MyReactComponentParams) {
  const myMethod = () => console.log(myParam);

  return (
    <div className="md:flex bg-slate-100">
      A new world awaits. <br /> be the first to discover it.
      <button onClick={myMethod}>let's go!</button>
    </div>
  );
}

export interface MyReactComponentParams {
  myParam: boolean;
}
```

- **Order of Code:**
  - Function component declaration
  - Styled components
  - TypeScript types

### NextJS 14 Conventions

1. **Organize your components**: Maintain a well-structured components folder, following the guidelines outlined in the [Ultimate Guide to Organizing Your Next.js Components Folder](https://www.dhiwise.com/post/ultimate-guide-to-organizing-your-nextjs-components-folder). This includes separating components into subfolders based on their purpose (e.g., layout, UI, forms) and keeping the folder structure flat to improve maintainability.

2. **Leverage Server Components**: Whenever possible, use Server Components to fetch and process data on the server. This can improve security, performance, and developer experience. Refer to the [Data Fetching: Data Fetching Patterns and Best Practices](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns) guide for more information.

3. **Utilize the `use client` directive**: Use the `use client` directive judiciously to mark components as Client Components when you need to use client-side-only features. This can help you strike a balance between server-side and client-side rendering, optimizing your application's performance.

4. **Implement Nested Layouts**: Take advantage of the Nested Layouts feature in the App Router to create a consistent and reusable structure for your application. This can improve the overall user experience and make it easier to manage your application's layout. [Resource: Nested Layouts in Next.js 14](https://www.youtube.com/watch?v=z2-Z5dNb_jg)

5. **Leverage Streaming and Suspense**: Utilize the Streaming and Suspense features in NextJS 14 to provide a more responsive and interactive user experience. This can be particularly beneficial when dealing with large data sets or complex UI components. [Resource: Streaming and Suspense in Next.js 14](https://www.youtube.com/watch?v=Oa9G4iBcgzs)

6. **Follow the File Conventions**: Adhere to the file conventions outlined in the [Next.js Documentation](https://nextjs.org/docs/app/api-reference/file-conventions) to ensure your application's structure is consistent and easy to navigate. This includes using the appropriate files for layouts, pages, error handling, and more.

7. **Optimize Data Fetching**: Implement the recommended data fetching patterns, such as fetching data on the server, fetching data where it's needed, and using the preload pattern to prevent waterfalls. Refer to the [Data Fetching: Data Fetching Patterns and Best Practices](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns) guide for more details.

8. **Leverage Metadata Files**: Utilize the Metadata File Conventions to manage your application's icons, Open Graph and Twitter images, and SEO-related files. This can help improve the overall presentation and discoverability of your application. [Resource: Metadata File Conventions in Next.js](https://nextjs.org/docs/app/api-reference/file-conventions#metadata-files)

9. **Maintain a Consistent Coding Style**: Enforce a consistent coding style across your development team by using tools like ESLint and Prettier. This can improve code readability, maintainability, and collaboration.

10. **Stay Up-to-Date with NextJS Releases**: Regularly review the NextJS documentation and release notes to stay informed about the latest features, improvements, and best practices. This will help you make the most of the NextJS ecosystem and ensure your application remains optimized and secure.

### Honorable Mention: Comparison between NextJS 13 and NextJS 14

The release of NextJS 14 brought about significant changes and improvements over its predecessor, NextJS 13. Some of the key differences include:

**App Router**: NextJS 14 introduced the new App Router, which provides a more intuitive and powerful routing system compared to the traditional Pages Router in NextJS 13. The App Router offers features like Nested Layouts, Streaming, and Server Components, which can greatly enhance the performance and developer experience of your application. [Resource: Next.js 13 App Router: Everything You Need to Know](https://www.youtube.com/watch?v=z2-Z5dNb_jg)

**Server Components**: NextJS 14 emphasizes the use of Server Components, which allow you to fetch and process data on the server, improving security and performance. Server Components can be used in conjunction with Client Components to create a more efficient and optimized application. [Resource: Server Components in Next.js 14](https://www.youtube.com/watch?v=Oa9G4iBcgzs)

**`use client` directive**: The `use client` directive is a new feature in NextJS 14 that allows you to mark certain components as Client Components, even within the App Router. This can be useful when you need to use client-side-only features, such as event handlers or state management. [Resource: Understanding the `use client` directive in Next.js 14](https://www.youtube.com/watch?v=Oa9G4iBcgzs)

Citations:
[1] <https://nextjs.org/docs/app/api-reference/file-conventions>
[2] <https://nextjs.org/docs/getting-started/project-structure>
[3] <https://www.youtube.com/watch?v=i6Fa5Oyr59k>
[4] <https://www.dhiwise.com/post/ultimate-guide-to-organizing-your-nextjs-components-folder>
[5] <https://nextjs.org/docs/app/building-your-application/data-fetching/patterns>

<!-- details sections (collapsible) -->
<details>
  <summary style="font-weight:bold;">OK, Server Components Are Cool, But What Happens For Slow Or Unstable Internet Connections With Server Components?</summary>
  
Great question. Server components in NextJS 14 can have some potential drawbacks when it comes to slow or unstable internet connections. Here are a few key points to consider:

1. **Initial Load Time**: Since server components are rendered on the server and the HTML is sent to the client, the initial load time can be slower on slow or unstable connections. The client has to wait for the server to generate and send the HTML before it can display the page.

2. **Interactivity Delay**: Server components are not interactive until the client-side JavaScript is loaded and hydrated. This means that on slow connections, users may experience a delay before they can interact with parts of the page that are server components.

3. **Streaming and Suspense**: NextJS 14 introduces Streaming and Suspense features to help mitigate the initial load time issues with server components. These features allow the server to stream the HTML to the client in chunks, and the client can display the page as it's being loaded. However, these features still rely on a stable connection to work effectively.

4. **Offline Functionality**: Server components, by their nature, require a connection to the server to render. This means that server components will not work at all when the user is offline, unlike client components which can potentially still function.

To address these challenges, it's important to:

5. **Optimize Server Component Usage**: Carefully consider which parts of your application truly benefit from server-side rendering and use server components judiciously. Overusing server components can negatively impact performance on slow connections.

6. **Implement Fallbacks and Offline Support**: Provide fallback content or alternative experiences for users with slow or unstable connections. This could include using client components for critical interactive features, or implementing offline support using service workers.

7. **Leverage Caching and Preloading**: Use techniques like caching and preloading to improve the initial load time of server components, especially for content that is unlikely to change frequently.

8. **Monitor and Test Performance**: Continuously monitor the performance of your application, especially on slow or unstable connections, and make adjustments to your use of server components as needed.

By being mindful of the potential drawbacks of server components on slow or unstable connections and implementing appropriate mitigation strategies, you can still leverage the benefits of server components while providing a good user experience for all your users.

Citations:
[1] <https://www.youtube.com/watch?v=3Q2q2gs0nAI>
[2] <https://dev.to/bilelsalemdev/nextjs-14-server-components-and-client-components-explained-1gp4>
[3] <https://www.youtube.com/watch?v=F_AplRX3dJU>
[4] <https://apryse.com/blog/improve-website-performance-with-next-js-14>
[5] <https://www.reddit.com/r/nextjs/comments/12m0kel/what_problem_does_server_components_exactly_solve/>
</details>

## Styling

We leverage TailwindCSS for our React components, following its Utility First approach to develop faster with high quality. TailwindCSS offers:

- **Maximized Creative Power:** Focus on functionality, not class names.
- **Reduced Cognitive Effort:** Easier to maintain and return to projects.
- **Localized Changes:** Modify elements without breaking other parts.
- **Intuitive Framework:** Easy to read and understand.
- **Better Performance:** Excellent with SSR (Next.js/Remix).
- **Less Complexity:** Simpler than styled-components.

## Sanity

<https://sanity.io>
<https://www.youtube.com/watch?v=mG73QRBtrC0&t=1198s>
