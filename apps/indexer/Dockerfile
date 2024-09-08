# Start from the bun base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY packages/jobs/package.json ./packages/jobs/package.json
COPY packages/supabase/package.json ./packages/supabase/package.json
COPY packages/alchemy/package.json ./packages/alchemy/package.json
COPY packages/app-env/package.json ./packages/app-env/package.json
COPY packages/contracts/package.json ./packages/contracts/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY tooling/tsconfig/package.json ./tooling/tsconfig/package.json
COPY packages/tokens/package.json ./packages/tokens/package.json
# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN npm install -g bun 
RUN bun install -g ts-node tsconfig-paths ts-node-dev
RUN bun install

# Copy the specific workspaces
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

EXPOSE 8080
CMD ["bun", "prod"]