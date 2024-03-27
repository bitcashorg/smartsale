# Start from the bun base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY packages/smartsale-env/package.json ./packages/smartsale-env/package.json
COPY packages/smartsale-contracts/package.json ./packages/smartsale-contracts/package.json
COPY packages/smartsale-lib/package.json ./packages/smartsale-lib/package.json
COPY packages/smartsale-db/package.json ./packages/smartsale-db/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN npm install -g bun ts-node tsconfig-paths
RUN bun install

# Copy the specific workspaces
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

EXPOSE 8080
CMD ["bun", "dev"]