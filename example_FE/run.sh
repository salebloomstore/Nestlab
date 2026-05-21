#!/bin/bash

set -e

echo "======================================="
echo "🚀 STARTING NUXT + NGINX SYSTEM"
echo "======================================="

# =========================
# CHECK DOCKER
# =========================
if ! command -v docker >/dev/null 2>&1; then
    echo "❌ Docker is not installed"
    exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
    echo "❌ Docker Compose is not installed"
    exit 1
fi

# =========================
# CREATE NETWORK IF NEEDED
# =========================
echo "🌐 Checking Docker network..."

if ! docker network inspect nest-cluster >/dev/null 2>&1; then
    echo "📦 Creating network: nest-cluster"
    docker network create nest-cluster
else
    echo "✅ Network already exists"
fi

# =========================
# CREATE NUXT PROJECT FIRST TIME
# =========================
if [ ! -f "app/package.json" ]; then

    echo "📦 First run detected"
    echo "🚀 Creating NuxtJS project..."

    mkdir -p app

    docker run --rm \
        -v $(pwd)/app:/app \
        -w /app \
        node:20-alpine \
        sh -c "npx nuxi@latest init . && npm install"

    echo "✅ NuxtJS project created"

else

    echo "✅ Existing NuxtJS project detected"

fi

# =========================
# CHECK REQUIRED FILES
# =========================
if [ ! -f "Dockerfile" ]; then
    echo "❌ Missing Dockerfile"
    exit 1
fi

if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Missing docker-compose.yml"
    exit 1
fi

if [ ! -f "nginx/default.conf" ]; then
    echo "❌ Missing nginx/default.conf"
    exit 1
fi

# =========================
# STOP OLD CONTAINERS
# =========================
echo "🛑 Stopping old containers..."

docker compose down --remove-orphans || true

# =========================
# BUILD CONTAINERS
# =========================
echo "🏗️ Building containers..."

docker compose build --no-cache

# =========================
# START CONTAINERS
# =========================
echo "🚀 Starting containers..."

docker compose up -d

# =========================
# SHOW STATUS
# =========================
echo ""
echo "======================================="
echo "✅ SYSTEM STARTED"
echo "======================================="

docker compose ps

echo ""
echo "🌐 Nuxt URL:"
echo "http://localhost:90"
echo ""
