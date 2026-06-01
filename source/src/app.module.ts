import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = `mongodb://${process.env.MONGO_ADMINIST_SHARDE_MATTER}:${process.env.MONGO_PASSWORD_CONFIG_SERVER}@${process.env.MONGOS_ROUTER_DN_ADRS}:${process.env.PORT_OF_MONGOS},${process.env.MONGOS_ROUTER_HN_ADRS}:${process.env.PORT_OF_MONGOS},${process.env.MONGOS_ROUTER_SG_ADRS}:${process.env.PORT_OF_MONGOS}/${process.env.MONGO_DATABASE_CONFIG_SERVER}?authSource=admin`;

@Module({
  imports: [MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
