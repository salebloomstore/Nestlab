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
  npm install @nestjs/jwt passport-jwt bcrypt
  npm install @nestjs/swagger swagger-ui-express
  npm install @nestjs/config
  npm install
  npm install @types/bcrypt --save-dev

  echo "📄 Creating AppModule Mongo config..."

  cat > src/app.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
      'mongodb://admin:123456@mongo:27017/nestdb?authSource=admin'
    ),
  ],
})
export class AppModule {}
EOF

  echo "📄 Creating main.ts with AUTO ROOT FIX"

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

  // ✅ AUTO FIX: root route
  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/swagger');
  });

  await app.listen(3000);
}
bootstrap();
EOF

  echo "📄 Creating .env"

  cat > .env << 'EOF'
MONGO_URI=mongodb://admin:123456@mongo:27017/nestdb?authSource=admin
EOF

  echo "✅ Project created"
fi

# =========================
# SAFE RUN EVERY TIME
# =========================
cd /var/www/app

echo "🔧 Ensuring .env exists..."

if [ ! -f .env ]; then
  cat > .env << 'EOF'
MONGO_URI=mongodb://admin:123456@mongo:27017/nestdb?authSource=admin
EOF
fi

echo "📦 Installing dependencies..."
npm install

echo "📦 Building project..."
npm run build

echo "🚀 Starting NestJS..."
npm run start:prod
