import { PartialType } from '@nestjs/swagger';
import { CreateQinShiHuangDto } from './create-combatant.dto';

export class UpdateQinShiHuangDto extends PartialType(CreateQinShiHuangDto) {}
