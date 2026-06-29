import { PartialType } from '@nestjs/swagger';
import { CreateQinShiHuangDto } from './create-qin-shi-huang.dto';

export class UpdateQinShiHuangDto extends PartialType(CreateQinShiHuangDto) {}
