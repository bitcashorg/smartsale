FROM --platform=linux/amd64 node:lts AS base

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder

# Set working directory
WORKDIR /app
RUN yarn global add turbo
RUN curl -fsSL https://bun.sh/install | bash
COPY . .
RUN turbo prune --scope=launchpad-indexer --docker

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

FROM base AS runner
WORKDIR /app

# Don't run production as root
# RUN addgroup --system --gid 1001 prod
# RUN adduser --system --uid 1001 prod
# USER prod
COPY --from=installer /app .

RUN ls -la apps/indexer/dist
RUN ls -la apps/indexer/dist/public

CMD ["node", "apps/indexer/dist/"]
