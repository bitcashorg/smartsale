# Start from the bun base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/supabase/package.json ./apps/supabase/package.json
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY apps/trigger/package.json ./apps/trigger/package.json
COPY apps/alchemy/package.json ./apps/alchemy/package.json
COPY packages/app-env/package.json ./packages/app-env/package.json
COPY packages/@repo/contracts/package.json ./packages/@repo/contracts/package.json
COPY packages/app-lib/package.json ./packages/app-lib/package.json
COPY packages/config-ts/package.json ./packages/config-ts/package.json
COPY packages/tokens/package.json ./packages/tokens/package.json
# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN npm install -g bun ts-node tsconfig-paths
RUN bun install

# Copy the specific workspaces
COPY apps/supabase ./apps/supabase
COPY apps/indexer ./apps/indexer
COPY apps/trigger ./apps/trigger
COPY apps/alchemy ./apps/alchemy
COPY packages/ ./packages/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

EXPOSE 8080
CMD ["bun", "prod"]