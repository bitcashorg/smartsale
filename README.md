
# SmartSale EVM

SmartSale is a comprehensive platform designed to streamline the auction process.

![](https://cdn.eosnation.io/pomelo/project_logos/fc190531-e0ed-4018-be9b-2a4323829bb8.png?webp=true&resize=1500&animated=true)

## Requirements

- NodeJS. We recommend [nvm](https://github.com/nvm-sh/nvm) for version switching.
- Hasura Cli https://hasura.io/docs/latest/hasura-cli/overview.
- pnpm package manager https://pnpm.io/
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
- Task manager https://taskfile.dev

## Running the Backend:

In root folder, create an .env file based of .env_sample and the use `task` to execute the following commands to operate Hasura locally.

- **boot**: Boots up the database and Hasura services, with a delay to ensure proper startup, followed by running migrations.
- **reboot**: Shuts down and then restarts the services.
- **seed**: Applies seed data to the Hasura project.
- **console**: Launches the Hasura console for the specified project.
- **migrate**: Applies database migrations and updates Hasura metadata. 
- **reload**: Restarts the Postgres service, then all services, and tails the Hasura logs.
- **up**: Starts all services defined in the Docker Compose file with a build.
- **down**: Shuts down all services and removes any orphaned containers.

## Running the Frontend

In apps/masterbots.ai folder (set up .env file - see .env_sample):

```
bun install
turbo run dev --scope="smartevm-webapp" 
# task app will execute the same command
```

## Acknowledgments

This project is a fork of [Gnosis Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts).
