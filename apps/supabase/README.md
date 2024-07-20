# Supabase 

This module encapsulates all supabase source code for schema defintions, migrations, automatic typescript generation and related functionalities. [Supabase.io](https://supabase.io/)

## Working with the Supabase Client

The project utilizes two main Supabase clients: one for server-side operations and another for browser-based interactions. These clients are initialized with the project's Supabase URL and anonKey, which are securely stored in the project's configuration files. See [webapp/services/supabase](https://github.com/smartevm/smartevm/blob/main/apps/webapp/services/supabase) for more details.

## Scripts

- Generate typescript types `bun run types`
- Generate zod schemas `bun run schemas`
- Generate both with `bun run build`
- Use supabase cli as for schema, migration, deployment, etc.

## Database Squema Diagram

![Smartsale Database Squema](https://www.mermaidchart.com/raw/f968e54d-a92f-4dd1-b5e1-67f6d97ea0d4?theme=light&version=v0.1&format=svg)
