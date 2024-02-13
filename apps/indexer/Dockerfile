FROM oven/bun
WORKDIR /app
COPY . .
RUN ls
RUN bun install
WORKDIR /apps/indexer
CMD ["bun", "start"]