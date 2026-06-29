import { PartialType } from '@nestjs/swagger';
import { CreateCombatantDto } from './create-combatant.dto';

export class UpdateCombatantDto extends PartialType(CreateCombatantDto) {}
