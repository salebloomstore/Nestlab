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
