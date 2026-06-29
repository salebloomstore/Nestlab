import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Example } from '../enums/example.enum';

export class CreateExampleDto {
  @ApiProperty({
    enum: Example,
    example: Example.TEST,
    description: 'Example container',
  })
  @IsEnum(Example)
  container!: Example;
}
