#!/bin/bash

set -e

cd /var/www

echo "🚀 Checking NestJS project..."

# =========================
# CREATE PROJECT FIRST TIME
# =========================
if [ ! -f app/package.json ]; then
  echo "📦 Creating NestJS project..."

  npm i -g @nestjs/cli

  nest new app --package-manager npm --skip-git

  cd app

  echo "📦 Installing dependencies..."

  npm install @nestjs/mongoose mongoose
  npm install @nestjs/config
  npm install @nestjs/jwt passport-jwt bcrypt
  npm install @nestjs/swagger swagger-ui-express
  npm install
  npm install @types/bcrypt --save-dev

  # =========================
  # FIX APP MODULE (MONGO STABLE CONNECT)
  # =========================
  echo "📄 Injecting stable MongoDB config..."

  cat > src/app.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot(
      process.env.MONGO_URI ||
      'mongodb://admin:password@mongo:27017/nestdb?authSource=admin'
    ),
  ],
})
export class AppModule {}
EOF

  # =========================
  # FIX MAIN (NO SIDE EFFECT)
  # =========================
  echo "📄 Setup main.ts..."

  cat > src/main.ts << 'EOF'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Auth API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
EOF

  # =========================
  # ENV FILE (ALWAYS SAFE)
  # =========================
  echo "📄 Creating .env..."

  cat > .env << 'EOF'
MONGO_URI=mongodb://admin:password@mongo:27017/nestdb?authSource=admin
EOF

  echo "✅ Project created"
fi

# =========================
# ALWAYS ENSURE CORRECT ENV
# =========================
cd /var/www/app

echo "🔧 Ensuring correct .env..."

cat > .env << 'EOF'
MONGO_URI=mongodb://admin:password@mongo:27017/nestdb?authSource=admin
EOF

# =========================
# FIX: CLEAN INSTALL SAFE
# =========================
echo "📦 Installing dependencies..."
npm install

echo "📦 Building project..."
npm run build

echo "🚀 Starting NestJS..."
npm run start:prod
