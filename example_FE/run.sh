#!/bin/sh

echo "🚀 Starting Nginx frontend..."

# đảm bảo quyền
chown -R nginx:nginx /usr/share/nginx/html

# chạy nginx
nginx -g "daemon off;"
