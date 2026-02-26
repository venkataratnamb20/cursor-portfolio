# Portfolio Website - Production-ready multi-stage build
# Best practices: lightweight, secure, high performance

# Stage 1: Build (excluded from final image)
FROM node:22-alpine AS builder

WORKDIR /app

# Layer cache: install deps before copying source
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build (no dev deps in final layer)
COPY . .
RUN npm run build

# Stage 2: Serve - minimal runtime (no build tools)
FROM nginxinc/nginx-unprivileged:alpine

# Setup as root, then drop to non-root
RUN rm -rf /etc/nginx/conf.d/default.conf \
    && apk add --no-cache wget

# Copy config and assets
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix ownership
RUN chown -R 101:101 /usr/share/nginx/html

USER 101

# OCI labels for image metadata
LABEL org.opencontainers.image.title="Portfolio"
LABEL org.opencontainers.image.description="Professional portfolio website"
LABEL org.opencontainers.image.source=""

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --spider -q http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
