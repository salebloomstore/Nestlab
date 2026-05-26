import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // CONNECT MONGODB
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
      `mongodb://${process.env.MONGO_ADMIN_CONFIG_SERVER}:${process.env.MONGO_PASSWORD_CONFIG_SERVER}@mongos-router-dn:27017,mongos-router-hn:27017,mongos-router-sg:27017/admin?authSource=admin`
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
