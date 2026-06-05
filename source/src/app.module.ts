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
        const admi = config.getOrThrow<string>('MONGO_ADMINIST_SHARDE_MATTER');
        const pass = config.getOrThrow<string>('MONGO_PASSWORD_SHARDE_MATTER');

        const hsts = [
          config.getOrThrow<string>('MONGOS_ROUTER_DN_ADRS'),
          config.getOrThrow<string>('MONGOS_ROUTER_HN_ADRS'),
          config.getOrThrow<string>('MONGOS_ROUTER_SG_ADRS'),
        ];

        const ptdf = config.getOrThrow<string>('PORT_OF_MONGOS');
        const data = config.getOrThrow<string>('MONGO_DATABASE_SHARDE_MATTER');

        const uri = `mongodb://${admi}:${pass}@${hsts.map((hee) => `${hee}:${ptdf}`).join(',')}/${data}?authSource=admin`;

        return { uri };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
