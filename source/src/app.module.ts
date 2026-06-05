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
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>(
          'MONGO_ADMINIST_SHARDE_MATTER',
        )}:${configService.get<string>(
          'MONGO_PASSWORD_SHARDE_MATTER',
        )}@${configService.get<string>(
          'MONGOS_ROUTER_DN_ADRS',
        )}:${configService.get<string>('PORT_OF_MONGOS')},${configService.get<string>(
          'MONGOS_ROUTER_HN_ADRS',
        )}:${configService.get<string>('PORT_OF_MONGOS')},${configService.get<string>(
          'MONGOS_ROUTER_SG_ADRS',
        )}:${configService.get<string>('PORT_OF_MONGOS')}/${configService.get<string>(
          'MONGO_DATABASE_SHARDE_MATTER',
        )}?authSource=admin`,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
