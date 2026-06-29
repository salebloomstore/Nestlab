import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { QinShiHuangsModule } from '../qin-shi-huangs/qin-shi-huangs.module';

@Module({
  imports: [QinShiHuangsModule],
  providers: [SeedsService],
  exports: [SeedsService],
})
export class SeedsModule {}
