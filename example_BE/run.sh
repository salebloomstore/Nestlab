#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================

set -e
source /var/www/cache/.env

cd /var/www

npm i -g @nestjs/cli

echo "🚀 Checking NestJS project..."


# =========================
# CREATE PROJECT FIRST TIME
# =========================
if [ ! -f app/package.json ]; then
  echo "📦 Creating NestJS project..."

  nest new app --package-manager npm --skip-git

  cd app


  # =========================
  # ENV FILE
  # =========================
  echo "📄 Creating .env..."

  cat > .env << EOF
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SV}:${MONGO_PASSWORD_CONFIG_SV}@mongo-router:27017/nestdb?authSource=admin
MONGO_ADMIN_CONFIG_SV=${MONGO_ADMIN_CONFIG_SV}
MONGO_PASSWORD_CONFIG_SV=${MONGO_PASSWORD_CONFIG_SV}
EOF


  # =========================
  # APP MODULE (MONGO ONLY)
  # =========================
  echo "📄 Injecting MongoDB config..."

  cat > src/app.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot(
      process.env.MONGO_URI ||
      `mongodb://${process.env.MONGO_ADMIN_CONFIG_SV}:${process.env.MONGO_PASSWORD_CONFIG_SV}@mongo-router:27017/nestdb?authSource=admin`
    ),
  ],
})
export class AppModule {}
EOF


  # =========================
  # MAIN (SWAGGER + ROOT ROUTE)
  # =========================
  echo "📄 Setup main.ts (Swagger + Root route)..."

  cat > src/main.ts << EOF
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // =========================
  // ROOT ROUTE (/)
  // =========================
  app.getHttpAdapter().get('/', (req, res) => {
    res.json({
      status: 'ok',
      message: 'NestJS API is running',
      swagger: '/swagger'
    });
  });

  // =========================
  // SWAGGER
  // =========================
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
EOF

  echo "✅ Project created"
fi


# =========================
# ALWAYS ENSURE ENV
# =========================

cd /var/www/app

echo "🔧 Ensuring .env..."

cat > .env << EOF
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SV}:${MONGO_PASSWORD_CONFIG_SV}@mongo-router:27017/nestdb?authSource=admin
MONGO_ADMIN_CONFIG_SV=${MONGO_ADMIN_CONFIG_SV}
MONGO_PASSWORD_CONFIG_SV=${MONGO_PASSWORD_CONFIG_SV}
EOF


# =========================
# BUILD + RUN
# =========================

echo "📦 Installing dependencies..."

npm install @nestjs/mongoose mongoose
npm install @nestjs/config
npm install @nestjs/swagger swagger-ui-express
npm install

echo "📦 Building project..."

npm run build

echo "🚀 Starting NestJS..."

npm run start:prod
