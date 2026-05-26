#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================

set -e
source /var/www/cache/.env

cd /var/www

npm install -g npm@11.15.0
npm install -g @nestjs/cli@11.0.10

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
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SERVER}:${MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin
MONGO_ADMIN_CONFIG_SERVER=${MONGO_ADMIN_CONFIG_SERVER}
MONGO_PASSWORD_CONFIG_SERVER=${MONGO_PASSWORD_CONFIG_SERVER}
EOF

  cat > tsconfig.json << EOF
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "noFallthroughCasesInSwitch": false
  }
}
EOF


  # =========================
  # APP MODULE (MONGO ONLY)
  # =========================
  echo "📄 Injecting MongoDB config..."

  cat > src/app.module.ts << 'EOF'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri =
  process.env.MONGO_URI ??
  `mongodb://${process.env.MONGO_ADMIN_CONFIG_SERVER}:${process.env.MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin`;

@Module({
  imports: [
    // CONNECT MONGODB
    MongooseModule.forRoot(mongoUri),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
EOF


  # =========================
  # MAIN (SWAGGER + ROOT ROUTE)
  # =========================
  echo "📄 Setup main.ts (Swagger + Root route)..."

  cat > src/main.ts << 'EOF'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD API')
    .setDescription('User CRUD API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  console.log(`Server running: http://localhost`);
  console.log(`Swagger: http://localhost/swagger`);
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
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SERVER}:${MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin
MONGO_ADMIN_CONFIG_SERVER=${MONGO_ADMIN_CONFIG_SERVER}
MONGO_PASSWORD_CONFIG_SERVER=${MONGO_PASSWORD_CONFIG_SERVER}
EOF


# =========================
# BUILD + RUN
# =========================

echo "📦 Installing dependencies..."

# TypeScript toolchain
npm install -D typescript@5.8.3 ts-node@10.9.2 @types/node@22.15.31

# NestJS core (stable 11.x ecosystem)
npm install @nestjs/common@11.1.8 @nestjs/core@11.1.8 @nestjs/platform-express@11.1.8 reflect-metadata@0.2.2 rxjs@7.8.2

# Auth stack
npm install @nestjs/jwt@11.0.1 @nestjs/passport@11.0.5 passport@0.7.0 passport-jwt@4.0.1 bcrypt@5.1.1
npm install -D @types/bcrypt@5.0.2 @types/passport-jwt@4.0.1

# Swagger
npm install @nestjs/swagger@11.2.1 swagger-ui-express@5.0.1

# Validation
npm install class-validator@0.14.2 class-transformer@0.5.1

# MongoDB stack
npm install @nestjs/mongoose@11.0.3 mongoose@8.15.2

# Session / cookies
npm install express-session@1.18.1 cookie-parser@1.4.7
npm install -D @types/express-session@1.18.0 @types/cookie-parser@1.4.9

# Extra utilities
npm install bcryptjs@3.0.2 @nestjs/config@4.0.2

npm install -D @types/bcryptjs@2.4.6

echo "📦 Building project..."

npm run build

echo "🚀 Starting NestJS..."

npm run start:prod
