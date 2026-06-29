import { Combatant as Combatants } from '../../combatants/enums/combatant.enum';
import { CreateCombatantDto } from '../../combatants/dto/create-combatant.dto';

const values = Object.values(Combatants);

export const COMBATANTS_SEED: CreateCombatantDto[] = values.map((value) => ({
  container: value,
}));
