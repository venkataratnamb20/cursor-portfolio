# Docker Production Best Practices

This document describes the production best practices applied to the portfolio Docker setup.

## Architecture

| Component | Role |
|-----------|------|
| **App** | Serves static React build on port 8080 (internal) |
| **Nginx** | Load balancer, reverse proxy, proxy cache; exposes port 8080 |

## Multi-Container Setup

- **App container**: Built from `Dockerfile`; serves static files via nginx.
- **Nginx container**: Built from `nginx/Dockerfile`; load balances across app instances and caches responses.
- **Load balancing**: `least_conn` across app replicas (use `--scale app=2` for multiple backends).
- **Proxy cache**: 100MB cache, 1d TTL for 200 responses; `index.html` bypassed for SPA updates.
- **Cache header**: `X-Cache-Status` shows HIT/MISS/BYPASS.

## Lightweight

- **Multi-stage build**: Build stage (Node) is discarded; only static assets in final app image.
- **Alpine base**: Both app and nginx use `nginxinc/nginx-unprivileged:alpine`.
- **Separate concerns**: Nginx image has no app content; app image has no LB logic.

## Secure

- **Non-root runtime**: Both containers run as UID 101.
- **server_tokens off**: Hides nginx version.
- **Security headers**: Applied at nginx (edge); app focuses on serving only.

## High Performance

- **App**: sendfile, open_file_cache, gzip.
- **Nginx**: proxy_cache, least_conn load balancing, 10s DNS re-resolution.
- **Cache**: Static assets cached 1d; HTML bypassed for freshness.

## Usage

```bash
# Single container (all-in-one)
docker build -t portfolio2-app:latest .
docker run -p 8080:8080 portfolio2-app:latest

# Multi-container (LB + cache)
docker compose up --build -d
docker compose up --build -d --scale app=2  # 2 app replicas
```
