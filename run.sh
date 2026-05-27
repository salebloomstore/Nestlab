#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================
tail -f /dev/null
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

# TypeScript toolchain
npm install -D typescript@5.9.3 ts-node@10.9.2 @types/node@24.12.4

# NestJS core (stable 11.x ecosystem)
npm install @nestjs/common@11.1.24 @nestjs/core@11.1.24 @nestjs/platform-express@11.1.24 reflect-metadata@0.2.2 rxjs@7.8.2

# Auth stack
npm install @nestjs/jwt@11.0.2 @nestjs/passport@11.0.5 passport@0.7.0 passport-jwt@4.0.1 bcrypt@6.0.0
npm install -D @types/bcrypt@6.0.0 @types/passport-jwt@4.0.1

# Swagger
npm install @nestjs/swagger@11.4.4 swagger-ui-express@5.0.1

# Validation
npm install class-validator@0.15.1 class-transformer@0.5.1

# MongoDB stack
npm install @nestjs/mongoose@11.0.4 mongoose@9.6.2

# Session / cookies
npm install express-session@1.19.0 cookie-parser@1.4.7
npm install -D @types/express-session@1.19.0 @types/cookie-parser@1.4.10

# Extra utilities
npm install bcryptjs@3.0.3 @nestjs/config@4.0.4
npm install -D @types/bcryptjs@2.4.6

npm install

echo "📦 Building project..."
npm run build

# =========================
# RUN
# =========================

echo "🚀 Starting NestJS..."
npm run start:prod
