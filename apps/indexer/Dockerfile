FROM oven/bun 

WORKDIR /app
RUN bun install -g prisma
COPY . .
WORKDIR apps/indexer 
RUN ls -a
RUN bun install
# RUN bunx prisma generate
RUN bun run build

CMD ["bun", "start"]

