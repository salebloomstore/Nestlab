#!/bin/sh

set -e

echo "======================================="
echo "🚀 STARTING NUXT SYSTEM"
echo "======================================="

cd /app

# =========================
# CREATE NUXT FIRST TIME
# =========================
if [ ! -f "package.json" ]; then

    echo "📦 First run detected"

    echo "🚀 Creating NuxtJS project..."

    npx nuxi@latest init . \
        --template minimal \
        --force

    echo "📦 Installing dependencies..."

    npm install

    echo "✅ NuxtJS project created"

else

    echo "✅ Existing NuxtJS project detected"

fi

# =========================
# INSTALL DEPENDENCIES
# =========================
echo "📦 Installing dependencies..."

npm install

# =========================
# BUILD PROJECT
# =========================
echo "🏗️ Building NuxtJS..."

npm run build

# =========================
# START NUXT SSR
# =========================
echo "🚀 Starting NuxtJS..."

node .output/server/index.mjs
