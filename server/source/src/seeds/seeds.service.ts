import { Injectable } from '@nestjs/common';
import { COMBATANTS_SEED } from './data/combatant.seed';
import { CombatantsService } from '../combatants/combatants.service';

@Injectable()
export class SeedsService {
  constructor(private readonly combatantsService: CombatantsService) {}

  async seedCombatant() {
    for (const data of COMBATANTS_SEED) {
      await this.combatantsService.create(data);
    }
  }

  async rundCombatant() {
    await this.combatantsService.enumEmpty();

    await this.seedCombatant();
  }

  async run() {
    await Promise.all([this.rundCombatant()]);
  }
}
