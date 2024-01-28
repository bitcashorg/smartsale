FROM --platform=linux/amd64 node:lts AS base

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder

# Set working directory
WORKDIR /app
RUN bun global add turbo bun
# ! Sentry is being installed, but cannot be read by VM. Using another strat to use it
# RUN curl -sL https://sentry.io/get-cli/ | SENTRY_CLI_VERSION="2.19.4" sh
COPY . .
RUN turbo prune --scope=bitcash-indexer --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb
RUN bun install


# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# generate prisma client
RUN rm -f apps/bitcash-indexer/.env
# RUN ls -la apps/bitcash-indexer/

RUN bun turbo run build --filter=bitcash-indexer

FROM base AS runner
WORKDIR /app

# Don't run production as root
# RUN addgroup --system --gid 1001 expressjs
# RUN adduser --system --uid 1001 expressjs
# USER expressjs
COPY --from=installer /app .

CMD ["node", "apps/bitcash-indexer/dist/"]
