import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Combatant as Combatants } from '../enums/combatant.enum';

export type CombatantDocument = HydratedDocument<Combatant>;

@Schema({
  timestamps: true,
})
export class Combatant {
  @Prop({
    required: true,
    unique: true,
    type: String,
    enum: Combatants,
  })
  container!: Combatants;
}

export const CombatantSchema = SchemaFactory.createForClass(Combatant);
