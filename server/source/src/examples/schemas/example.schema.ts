import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Example as Examples } from '../enums/example.enum';

export type ExampleDocument = HydratedDocument<Example>;

@Schema({
  timestamps: true,
})
export class Example {
  @Prop({
    required: true,
    unique: true,
    enum: Examples,
  })
  container!: Examples;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);
