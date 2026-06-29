import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { QinShiHuangsModule } from '../combatants/combatants.module';

@Module({
  imports: [QinShiHuangsModule],
  providers: [SeedsService],
  exports: [SeedsService],
})
export class SeedsModule {}
