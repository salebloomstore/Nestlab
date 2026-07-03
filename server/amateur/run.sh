#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================
# tail -f /dev/null
set -e

# =========================
# ALWAYS ENSURE ENV
# =========================

cd /var/www/app

echo "🔧 Ensuring .env..."

cat > .env << EOF
MONGO_ADMINIST_SHARDE_MATTER=${MONGO_ADMINIST_SHARDE_MATTER}
MONGO_PASSWORD_SHARDE_MATTER=${MONGO_PASSWORD_SHARDE_MATTER}
MONGO_DATABASE_SHARDE_MATTER=${MONGO_DATABASE_SHARDE_MATTER}
MONGOS_ROUTER_DN_PORT_OF=${MONGOS_ROUTER_DN_PORT_OF}
MONGOS_ROUTER_HN_PORT_OF=${MONGOS_ROUTER_HN_PORT_OF}
MONGOS_ROUTER_SG_PORT_OF=${MONGOS_ROUTER_SG_PORT_OF}
PORT_OF_NESTJS=${PORT_OF_NESTJS}
PORT_OF_NGINXE=${PORT_OF_NGINXE}
MONGOS_ROUTER_DN_ADRS=${MONGOS_ROUTER_DN_ADRS}
MONGOS_ROUTER_HN_ADRS=${MONGOS_ROUTER_HN_ADRS}
MONGOS_ROUTER_SG_ADRS=${MONGOS_ROUTER_SG_ADRS}
EOF

# =========================
# BUILD
# =========================

echo "📦 Installing dependencies..."
npm ci

echo "📦 Building project..."
npm run seed
npm run start:dev
