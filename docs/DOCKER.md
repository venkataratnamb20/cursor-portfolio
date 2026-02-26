# Docker Production Best Practices

This document describes the production best practices applied to the portfolio Docker setup.

## Lightweight

- **Multi-stage build**: Build stage (Node) is discarded; only built static assets are copied to the final image. No build tools (npm, TypeScript, Vite) in production.
- **Alpine base**: `nginxinc/nginx-unprivileged:alpine` uses minimal Alpine Linux (~50MB for nginx layer).
- **Minimal healthcheck**: `wget` (~1.5MB) added for HTTP healthcheck; no heavier tools.
- **Layer ordering**: Dependencies installed before source copy for better cache reuse.

## Secure

- **Non-root runtime**: Container runs as UID 101 (nginx user); no root at runtime.
- **server_tokens off**: Hides nginx version in response headers.
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy, Content-Security-Policy.
- **No secrets in image**: Environment variables and secrets managed at deploy time.
- **OCI labels**: Image metadata for traceability.

## High Performance

- **sendfile on**: Uses kernel sendfile for efficient file serving.
- **tcp_nopush / tcp_nodelay**: Optimized TCP behavior.
- **open_file_cache**: Caches file descriptors to reduce disk I/O.
- **Gzip**: Level 5, min_length 256 (avoids compressing tiny responses).
- **Long-lived asset cache**: `/assets/` has 1-year immutable cache.

## Usage

```bash
docker build -t portfolio2:latest .
docker run -p 8080:8080 portfolio2:latest
```
