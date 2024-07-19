# Supabase Integration Guide

Welcome to the Supabase integration guide for the SmartEVM project. This document aims to provide developers with a clear and concise set of instructions for working with Supabase within our project environment. Supabase is a powerful, open-source Firebase alternative that offers database, authentication, and storage solutions, among other features. By adhering to these guidelines, we ensure a consistent and efficient development process.

## Getting Started

Before diving into the specifics of working with Supabase, ensure you have the following prerequisites met:

- A Supabase account and project created at [Supabase.io](https://supabase.io/)
- The latest version of [Node.js](https://nodejs.org/) and [bun](https://bun.sh) installed
- Access to the project's repository and the `apps/supabase` directory

## Setting Up Your Local Environment

1. Navigate to the `apps/supabase` directory in your terminal.
2. Install the project dependencies by running `bun install`.
3. Within the `apps/webapp` folder, make sure to do `vercel env pull .env` to pull the env vars or copy the `.env.example` file to `.env` and fill in your Supabase project credentials (URL and anonKey).

## Working with the Supabase Client

The project utilizes two main Supabase clients: one for server-side operations and another for browser-based interactions. These clients are initialized with the project's Supabase URL and anonKey, which are securely stored in the project's configuration files.

### Server-Side Client

The server-side client is used for backend operations, such as fetching data from Supabase or performing server-side authentication. To use the server-side client, import the `createSupabaseServerClient` function from `apps/webapp/services/supabase/server.ts`.

Example usage:

```ts
import { createSupabaseServerClient } from './services/supabase/server'

async function fetchData() {
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase
    .from('your_table')
    .select('*')

  if (error) throw error
  return data
}
```

## Browser Client

For client-side operations, such as fetching data in a React component, use the getSupabaseBrowserClient function from apps/webapp/services/supabase/client.ts.

Example usage:

```ts
import { getSupabaseBrowserClient } from './services/supabase/client'

function useData() {
  const supabase = getSupabaseBrowserClient()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
      if (error) console.error(error)
      else setData(data)
    }

    fetchData()
  }, [])

  return data
}
```

## Building The Typescript Code

To build the Supabase typescript code, run the following command:

```bash
bun run build
```

## Database Squema Diagram

![Smartsale Database Squema](https://www.mermaidchart.com/raw/f968e54d-a92f-4dd1-b5e1-67f6d97ea0d4?theme=light&version=v0.1&format=svg)
