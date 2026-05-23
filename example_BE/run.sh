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

@Module({
  imports: [
    // CONNECT MONGODB
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
      `mongodb://${process.env.MONGO_ADMIN_CONFIG_SV}:${process.env.MONGO_PASSWORD_CONFIG_SV}@mongo-router:27017/authentication_db?authSource=admin`
    )
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
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SV}:${MONGO_PASSWORD_CONFIG_SV}@mongo-router:27017/nestdb?authSource=admin
MONGO_ADMIN_CONFIG_SV=${MONGO_ADMIN_CONFIG_SV}
MONGO_PASSWORD_CONFIG_SV=${MONGO_PASSWORD_CONFIG_SV}
EOF


# =========================
# BUILD + RUN
# =========================

echo "📦 Installing dependencies..."

npm install -D typescript ts-node @types/node
npm install @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata rxjs
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/bcrypt @types/passport-jwt
npm install @nestjs/swagger swagger-ui-express
npm install class-validator class-transformer
npm install @nestjs/mongoose mongoose
npm install express-session
npm install -D @types/express-session
npm install cookie-parser
npm install -D @types/cookie-parser
npm install bcryptjs
npm install -D @types/bcryptjs
npm install @nestjs/config
npm install

echo "📦 Building project..."

npm run build

echo "🚀 Starting NestJS..."

npm run start:prod
