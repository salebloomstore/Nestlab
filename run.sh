#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================
# tail -f /dev/null
set -e
source /var/www/cache/.env

# =========================
# ALWAYS ENSURE ENV
# =========================

cd /var/www/app

echo "🔧 Ensuring .env..."

cat > .env << EOF
MONGO_ADMIN_CONFIG_SERVER=${MONGO_ADMIN_CONFIG_SERVER}
MONGO_PASSWORD_CONFIG_SERVER=${MONGO_PASSWORD_CONFIG_SERVER}
EOF

# =========================
# BUILD
# =========================

echo "📦 Installing dependencies..."
npm install

echo "📦 Building project..."
npm run build

# =========================
# RUN
# =========================

echo "🚀 Starting NestJS..."
npm run start:prod
