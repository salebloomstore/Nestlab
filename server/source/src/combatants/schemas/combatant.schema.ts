import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { QinShiHuang as QinShiHuangs } from '../enums/combatant.enum';

export type QinShiHuangDocument = HydratedDocument<QinShiHuang>;

@Schema({
  timestamps: true,
})
export class QinShiHuang {
  @Prop({
    required: true,
    unique: true,
    enum: QinShiHuangs,
  })
  container!: QinShiHuangs;
}

export const QinShiHuangSchema = SchemaFactory.createForClass(QinShiHuang);
