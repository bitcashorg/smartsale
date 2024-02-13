FROM oven/bun
WORKDIR /app
COPY . .
RUN bun install
WORKDIR /apps/indexer
CMD ["bun", "start"]