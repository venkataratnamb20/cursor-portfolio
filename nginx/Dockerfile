# Nginx load balancer + reverse proxy
# Sits in front of app containers; no app content baked in

FROM nginxinc/nginx-unprivileged:alpine

USER root

# Remove default, add wget for healthcheck
RUN rm -rf /etc/nginx/conf.d/default.conf \
    && apk add --no-cache wget

# Create cache directory (writable by nginx user 101)
RUN mkdir -p /var/cache/nginx/proxy \
    && chown -R 101:101 /var/cache/nginx

COPY nginx-lb.conf /etc/nginx/conf.d/default.conf

USER 101

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --spider -q http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
