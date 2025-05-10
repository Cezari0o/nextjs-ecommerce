FROM node:22-alpine

WORKDIR /app

RUN apk add pnpm

COPY package.json pnpm-lock.yaml ./
COPY . .

EXPOSE 3000

# CMD [ "pnpm", "install", "&&", "pnpm", "run", "dev" ]
CMD [ "sleep", "infinity" ]
