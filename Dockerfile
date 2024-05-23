# Use the official Node.js image which includes npm
FROM node:latest

# Set the working directory
WORKDIR /app

# Install Bun
RUN npm install -g bun

# Install Python, zlib, and build-essential
RUN apt-get update && apt-get install -y python3 zlib1g-dev build-essential

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/webapp/package.json ./apps/webapp/package.json
COPY packages/smartsale-contracts/package.json ./packages/smartsale-contracts/package.json
COPY packages/smartsale-env/package.json ./packages/smartsale-env/package.json
COPY packages/smartsale-lib/package.json ./packages/smartsale-lib/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY apps/supabase/package.json ./apps/supabase/package.json
COPY packages/config-typescript/package.json ./packages/config-typescript/package.json

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN bun install --no-optional

# Copy the specific workspaces
COPY apps/webapp ./apps/webapp/
COPY packages/smartsale-contracts ./packages/smartsale-contracts/
COPY packages/smartsale-env ./packages/smartsale-env/
COPY packages/smartsale-lib ./packages/smartsale-lib/
COPY packages/tsconfig ./packages/tsconfig/
COPY apps/supabase ./apps/supabase/
COPY packages/config-typescript ./packages/config-typescript/

# Copy the public directory
COPY apps/webapp/public ./apps/webapp/public

# Set the working directory to your specific workspace
WORKDIR /app/apps/webapp/

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Set the command to run your application
CMD ["bun", "run", "dev"]