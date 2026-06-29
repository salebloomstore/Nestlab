import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedsModule } from './seeds/seeds.module';
import { QinShiHuangsModule } from './qin-shi-huangs/qin-shi-huangs.module';

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

        const wukong = [
          {
            hsts: config.getOrThrow<string>('MONGOS_ROUTER_DN_ADRS'),
            ptdf: config.getOrThrow<string>('MONGOS_ROUTER_DN_PORT_OF'),
          },
          {
            hsts: config.getOrThrow<string>('MONGOS_ROUTER_HN_ADRS'),
            ptdf: config.getOrThrow<string>('MONGOS_ROUTER_HN_PORT_OF'),
          },
          {
            hsts: config.getOrThrow<string>('MONGOS_ROUTER_SG_ADRS'),
            ptdf: config.getOrThrow<string>('MONGOS_ROUTER_SG_PORT_OF'),
          },
        ];

        const data = config.getOrThrow<string>('MONGO_DATABASE_SHARDE_MATTER');

        const uri = `mongodb://${admi}:${pass}@${wukong.map((king) => `${king.hsts}:${king.ptdf}`).join(',')}/${data}?authSource=admin`;

        return { uri };
      },
    }),
    SeedsModule,
    QinShiHuangsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
