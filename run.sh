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

cp .env.example .env

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
