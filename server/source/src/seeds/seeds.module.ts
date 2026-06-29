import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { ExamplesModule } from '../examples/examples.module';

@Module({
  imports: [ExamplesModule],
  providers: [SeedsService],
  exports: [SeedsService],
})
export class SeedsModule {}
