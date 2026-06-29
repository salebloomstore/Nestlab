import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { CombatantsModule } from '../combatants/combatants.module';

@Module({
  imports: [CombatantsModule],
  providers: [SeedsService],
  exports: [SeedsService],
})
export class SeedsModule {}
