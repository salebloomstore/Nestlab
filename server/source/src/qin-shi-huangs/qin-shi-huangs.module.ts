import { Module } from '@nestjs/common';
import { QinShiHuangsService } from './qin-shi-huangs.service';
import { QinShiHuangsController } from './qin-shi-huangs.controller';
import { QinShiHuang, QinShiHuangSchema } from './schemas/qin-shi-huang.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QinShiHuang.name,
        schema: QinShiHuangSchema,
      },
    ]),
  ],
  controllers: [QinShiHuangsController],
  providers: [QinShiHuangsService],
  exports: [QinShiHuangsService],
})
export class QinShiHuangsModule {}
