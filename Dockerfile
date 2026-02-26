# Portfolio Website - Multi-stage Docker build
# Layered, non-root, lightweight (per user rules)

# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Install deps in separate layer for better cache
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve (lightweight, non-root)
# nginxinc/nginx-unprivileged listens on 8080 by default
FROM nginxinc/nginx-unprivileged:alpine

# Remove default config, add wget for healthcheck
USER root
RUN rm -rf /etc/nginx/conf.d/default.conf && apk add --no-cache wget

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix ownership for nginx user (101)
RUN chown -R 101:101 /usr/share/nginx/html

USER 101

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --spider -q http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
