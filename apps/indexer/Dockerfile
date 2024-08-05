# Start from the bun base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/supabase/package.json ./apps/supabase/package.json
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY packages/app-env/package.json ./packages/app-env/package.json
COPY packages/app-contracts/package.json ./packages/app-contracts/package.json
COPY packages/app-lib/package.json ./packages/app-lib/package.json
COPY packages/config-typescript/package.json ./packages/config-typescript/package.json
COPY packages/config-eslint/package.json ./packages/config-eslint/package.json

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN npm install -g bun ts-node tsconfig-paths
RUN bun install

# Copy the specific workspaces
COPY apps/supabase ./apps/supabase
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

EXPOSE 8080
CMD ["bun", "prod"]