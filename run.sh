#!/bin/bash

# =====================================================
# NESTJS BOOTSTRAP SCRIPT
# =====================================================

set -e
source /var/www/cache/.env

cd /var/www

npm install -g @nestjs/cli@11.0.10

echo "🚀 Checking NestJS project..."


# =========================
# CREATE PROJECT FIRST TIME
# =========================
if [ ! -f app/package.json ]; then
  echo "📦 Creating NestJS project..."

  npx @nestjs/cli@11.0.10 new app --package-manager npm --skip-git

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

# cat > tsconfig.json << EOF
# {
#   "compilerOptions": {
#     "module": "nodenext",
#     "moduleResolution": "nodenext",
#     "resolvePackageJsonExports": true,
#     "esModuleInterop": true,
#     "isolatedModules": true,
#     "declaration": true,
#     "removeComments": true,
#     "emitDecoratorMetadata": true,
#     "experimentalDecorators": true,
#     "allowSyntheticDefaultImports": true,
#     "target": "ES2023",
#     "sourceMap": true,
#     "outDir": "./dist",
#     "incremental": true,
#     "skipLibCheck": true,
#     "strictNullChecks": true,
#     "forceConsistentCasingInFileNames": true,
#     "noImplicitAny": false,
#     "strictBindCallApply": false,
#     "noFallthroughCasesInSwitch": false
#   }
# }
# EOF


  # =========================
  # APP MODULE (MONGO ONLY)
  # =========================
  echo "📄 Injecting MongoDB config..."

#   cat > src/app.module.ts << 'EOF'
# import { Module } from '@nestjs/common';
# import { AppController } from './app.controller';
# import { AppService } from './app.service';
# import { MongooseModule } from '@nestjs/mongoose';

# @Module({
#   imports: [
#     // CONNECT MONGODB
#     MongooseModule.forRoot(
#       process.env.MONGO_URI ||
#       `mongodb://${MONGO_ADMIN_CONFIG_SERVER}:${MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin`
#     )
#   ],
#   controllers: [AppController],
#   providers: [AppService],
# })
# export class AppModule {}
# EOF


  # =========================
  # MAIN (SWAGGER + ROOT ROUTE)
  # =========================
  echo "📄 Setup main.ts (Swagger + Root route)..."

#   cat > src/main.ts << 'EOF'
# import { NestFactory } from '@nestjs/core';
# import { AppModule } from './app.module';
# import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

# async function bootstrap() {
#   const app = await NestFactory.create(AppModule);

#   // SWAGGER
#   const config = new DocumentBuilder()
#     .setTitle('NestJS CRUD API')
#     .setDescription('User CRUD API')
#     .setVersion('1.0')
#     .build();

#   const document = SwaggerModule.createDocument(app, config);
#   SwaggerModule.setup('swagger', app, document);

#   await app.listen(3000);

#   console.log(`Server running: http://localhost`);
#   console.log(`Swagger: http://localhost/swagger`);
# }
# bootstrap();
# EOF

  echo "✅ Project created"
fi


# =========================
# ALWAYS ENSURE ENV
# =========================

cd /var/www/app

echo "🔧 Ensuring .env..."

cat > .env << EOF
MONGO_URI=mongodb://${MONGO_ADMIN_CONFIG_SERVER}:${MONGO_PASSWORD_CONFIG_SERVER}@mongo-router:27017/nestdb?authSource=admin
MONGO_ADMIN_CONFIG_SERVER=${MONGO_ADMIN_CONFIG_SERVER}
MONGO_PASSWORD_CONFIG_SERVER=${MONGO_PASSWORD_CONFIG_SERVER}
EOF


# =========================
# BUILD + RUN
# =========================

echo "📦 Installing dependencies..."

npm install -D typescript@5.8.3 ts-node@10.9.2 @types/node@22.15.30
npm install @nestjs/common@11.1.6 @nestjs/core@11.1.6 @nestjs/platform-express@11.1.6 reflect-metadata rxjs
npm install @nestjs/jwt@11.0.1 @nestjs/passport@11.0.5 passport@0.7.0 passport-jwt@4.0.1 bcrypt@5.1.1
npm install -D @types/bcrypt@5.0.2 @types/passport-jwt@4.0.1
npm install @nestjs/swagger@8.1.1 swagger-ui-express@5.0.1
npm install class-validator@0.14.2 class-transformer@0.5.1
npm install @nestjs/mongoose@11.0.3 mongoose@8.15.1
npm install express-session@1.18.1
npm install -D @types/express-session@1.18.0
npm install cookie-parser@1.4.7
npm install -D @types/cookie-parser@1.4.9
npm install bcryptjs@3.0.2
npm install -D @types/bcryptjs@2.4.6
npm install @nestjs/config@4.0.2
npm install -D typescript@5.8.3 ts-node@10.9.2 @types/node@22.15.30

echo "📦 Building project..."

npm run build

echo "🚀 Starting NestJS..."

npm run start:prod
