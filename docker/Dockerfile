FROM node:22-alpine AS base

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

CMD ["sh", "-c", "pnpm install && \
      pnpm run dev"]

