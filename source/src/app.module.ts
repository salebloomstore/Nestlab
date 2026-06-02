import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get(
          'MONGO_ADMINIST_SHARDE_MATTER',
        )}:${configService.get(
          'MONGO_PASSWORD_SHARDE_MATTER',
        )}@${configService.get(
          'MONGOS_ROUTER_DN_ADRS',
        )}:${configService.get('PORT_OF_MONGOS')},${configService.get(
          'MONGOS_ROUTER_HN_ADRS',
        )}:${configService.get('PORT_OF_MONGOS')},${configService.get(
          'MONGOS_ROUTER_SG_ADRS',
        )}:${configService.get('PORT_OF_MONGOS')}/${configService.get(
          'MONGO_DATABASE_SHARDE_MATTER',
        )}?authSource=admin`,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
