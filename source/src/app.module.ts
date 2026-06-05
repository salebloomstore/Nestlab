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
      useFactory: (config: ConfigService) => {
        const uri = `mongodb://${config.getOrThrow<string>(
          'MONGO_ADMINIST_SHARDE_MATTER',
        )}:${config.getOrThrow<string>(
          'MONGO_PASSWORD_SHARDE_MATTER',
        )}@${config.getOrThrow<string>(
          'MONGOS_ROUTER_DN_ADRS',
        )}:${config.getOrThrow<string>(
          'PORT_OF_MONGOS',
        )},${config.getOrThrow<string>(
          'MONGOS_ROUTER_HN_ADRS',
        )}:${config.getOrThrow<string>(
          'PORT_OF_MONGOS',
        )},${config.getOrThrow<string>(
          'MONGOS_ROUTER_SG_ADRS',
        )}:${config.getOrThrow<string>(
          'PORT_OF_MONGOS',
        )}/${config.getOrThrow<string>(
          'MONGO_DATABASE_SHARDE_MATTER',
        )}?authSource=admin`;

        return { uri };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
