FROM oven/bun 

WORKDIR /app
RUN bun install -g prisma
COPY . .
RUN ls -a
RUN bun install
WORKDIR apps/indexer 
RUN bun install
RUN bunx prisma generate
RUN bun run build

CMD ["bun", "start"]

