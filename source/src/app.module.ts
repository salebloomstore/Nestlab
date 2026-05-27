import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = `mongodb://${process.env.MONGO_ADMIN_CONFIG_SERVER}:${process.env.MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin`;

@Module({
  imports: [MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
