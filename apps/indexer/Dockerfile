FROM node:20

WORKDIR /app
RUN npm install -g prisma bun
COPY . .
RUN pwd
RUN ls -a
RUN bun install
WORKDIR apps/indexer 
RUN pwd
RUN ls -a
RUN bun install
# RUN bunx prisma generate
RUN bun run build

CMD ["bun", "start"]

