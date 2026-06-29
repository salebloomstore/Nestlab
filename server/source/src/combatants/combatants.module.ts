import { Module } from '@nestjs/common';
import { CombatantsService } from './combatants.service';
import { CombatantsController } from './combatants.controller';
import { Combatant, CombatantSchema } from './schemas/combatant.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Combatant.name,
        schema: CombatantSchema,
      },
    ]),
  ],
  controllers: [CombatantsController],
  providers: [CombatantsService],
  exports: [CombatantsService],
})
export class CombatantsModule {}
