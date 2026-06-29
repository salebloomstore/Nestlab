import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QinShiHuang } from '../enums/combatant.enum';

export class CreateQinShiHuangDto {
  @ApiProperty({
    enum: QinShiHuang,
    example: QinShiHuang.TEST,
    description: 'QinShiHuang container',
  })
  @IsEnum(QinShiHuang)
  container!: QinShiHuang;
}
