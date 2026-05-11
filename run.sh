#!/bin/bash

set -e

cd /var/www

echo "🚀 Checking NestJS project..."

if [ ! -f app/package.json ]; then
  echo "📦 Creating NestJS project..."

  npm i -g @nestjs/cli

  nest new app --package-manager npm --skip-git

  cd app

  echo "📦 Installing dependencies..."

  npm install @nestjs/mongoose mongoose
  npm install @nestjs/jwt passport-jwt bcrypt
  npm install @nestjs/swagger swagger-ui-express
  npm install bcrypt
  npm install @types/bcrypt --save-dev

  echo "📦 Setup swagger..."

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

  echo "✅ Project created"
fi

cd /var/www/app

echo "📦 Building project..."
npm run build

echo "🚀 Starting NestJS..."
npm run start:prod
