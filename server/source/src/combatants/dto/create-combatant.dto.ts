import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Combatant } from '../enums/combatant.enum';

export class CreateCombatantDto {
  @ApiProperty({
    enum: Combatant,
    example: Combatant.TEST,
    description: 'Combatant container',
  })
  @IsEnum(Combatant)
  container!: Combatant;
}
