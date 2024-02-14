# Start from the bun base image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY packages/*/package.json ./packages/

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN bun install

# Copy the specific workspaces
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

# Set the command to run your application
CMD ["bun", "src/index.ts"]