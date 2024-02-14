# Start from the bun base image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/indexer/package.json ./apps/indexer/package.json
COPY packages/smartsale-chains/package.json ./packages/smartsale-chains/package.json
COPY packages/smartsale-contracts/package.json ./packages/smartsale-contracts/package.json
COPY packages/smartsale-lib/package.json ./packages/smartsale-lib/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
RUN ls -la ./packages/

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN bun install

# Copy the specific workspaces
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/
COPY node_modules/.prisma/ ./node_modules/.prisma/ 

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer
RUN bunx prisma generate
EXPOSE 8080
CMD ["bun", "src/index.ts"]