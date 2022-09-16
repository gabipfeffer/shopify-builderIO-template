# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
#COPY package.json yarn.lock ./
#RUN yarn install --frozen-lockfile

# If using npm with a `package-lock.json` comment out above and use below instead
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

ARG BUILDER_PUBLIC_KEY
ENV BUILDER_PUBLIC_KEY=$BUILDER_PUBLIC_KEY
ARG AWS_ACCESS_KEY_ID
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ARG AWS_REGION
ENV AWS_REGION=$AWS_REGION
ARG COGNITO_USER_POOL_ID
ENV COGNITO_USER_POOL_ID=$COGNITO_USER_POOL_ID
ARG COGNITO_CLIENT_ID
ENV COGNITO_CLIENT_ID=$COGNITO_CLIENT_ID
ARG SHOPIFY_ADMIN_API_ACCESS_TOKEN
ENV SHOPIFY_ADMIN_API_ACCESS_TOKEN=$SHOPIFY_ADMIN_API_ACCESS_TOKEN
ARG SHOPIFY_STOREFRONT_API_ACCESS_TOKEN
ENV SHOPIFY_STOREFRONT_API_ACCESS_TOKEN=$SHOPIFY_STOREFRONT_API_ACCESS_TOKEN
ARG SHOPIFY_STOREFRONT_API_KEY
ENV SHOPIFY_STOREFRONT_API_KEY=$SHOPIFY_STOREFRONT_API_KEY
ARG SHOPIFY_STOREFRONT_API_SECRET_KEY
ENV SHOPIFY_STOREFRONT_API_SECRET_KEY=$SHOPIFY_STOREFRONT_API_SECRET_KEY
ARG SHOPIFY_STORE_DOMAIN
ENV SHOPIFY_STORE_DOMAIN=$SHOPIFY_STORE_DOMAIN
ARG SHOPIFY_WEBHOOK_SECRET
ENV SHOPIFY_WEBHOOK_SECRET=$SHOPIFY_WEBHOOK_SECRET
ARG BOLD_ACCESS_TOKEN
ENV BOLD_ACCESS_TOKEN=$BOLD_ACCESS_TOKEN
ARG BOLD_SHARED_SECRET
ENV BOLD_SHARED_SECRET=$BOLD_SHARED_SECRET
ARG BOLD_SHOP_IDENTIFIER
ENV BOLD_SHOP_IDENTIFIER=$BOLD_SHOP_IDENTIFIER
ARG KLAVIYO_PUBLIC_KEY
ENV KLAVIYO_PUBLIC_KEY=$KLAVIYO_PUBLIC_KEY
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app


ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
