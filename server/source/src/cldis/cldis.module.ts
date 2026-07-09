import { Module } from '@nestjs/common';
import { CldisService } from './cldis.service';

@Module({
  providers: [CldisService],
  exports: [CldisService],
})
export class CldisModule {}
