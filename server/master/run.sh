#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================
# tail -f /dev/null
set -e

# =========================
# BUILD
# =========================

cd /var/www/app

echo "📦 Installing dependencies..."
npm ci

echo "📦 Building project..."
npm run build
npm run seed

# =========================
# RUN
# =========================

echo "🚀 Starting NestJS..."
npm run start:prod
