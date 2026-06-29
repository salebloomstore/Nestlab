import { Module } from '@nestjs/common';
import { QinShiHuangsService } from './combatants.service';
import { QinShiHuangsController } from './combatants.controller';
import { QinShiHuang, QinShiHuangSchema } from './schemas/combatant.schema';
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
