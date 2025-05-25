FROM node:22-alpine AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# RUN apk add --no-cache curl bash
# RUN curl -fsSL https://get.pnpm.io/install.sh | bash -
# ENV PATH="/root/.local/share/pnpm:${PATH}"

COPY . .
RUN pnpm install

CMD ["sh", "-c", "pnpm run dev"]

