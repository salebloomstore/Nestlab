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
npm run seed
npm run start:dev
