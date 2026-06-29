import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { QinShiHuangsService } from './combatants.service';
import { CreateQinShiHuangDto } from './dto/create-combatant.dto';
import { UpdateQinShiHuangDto } from './dto/update-combatant.dto';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@ApiTags('COMBATANT')
@Controller('qin-shi-huangs')
export class QinShiHuangsController {
  constructor(private readonly qinShiHuangsService: QinShiHuangsService) {}

  @Post()
  @ApiOperation({ summary: 'Create COMBATANT' })
  async create(@Body() createQinShiHuangDto: CreateQinShiHuangDto) {
    const result = await this.qinShiHuangsService.create(createQinShiHuangDto);

    return {
      message: 'Create COMBATANT success',
      result,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all COMBATANTs' })
  async findAll() {
    const result = await this.qinShiHuangsService.findAll();

    if (!result?.length)
      throw new NotFoundException('COMBATANTs does not exist');

    return {
      message: 'Get all COMBATANTs success',
      result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get COMBATANT' })
  @ApiCreatedResponse({ description: 'COMBATANT geted successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async findOne(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    const result = await this.qinShiHuangsService.findOne(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Get COMBATANT success',
      result,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update COMBATANT' })
  @ApiCreatedResponse({ description: 'COMBATANT updated successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async update(
    @Param('id', ParseObjectIdPipe) _id: Types.ObjectId,
    @Body() updateQinShiHuangDto: UpdateQinShiHuangDto,
  ) {
    const result = await this.qinShiHuangsService.update(
      _id,
      updateQinShiHuangDto,
    );

    return {
      message: 'Update COMBATANT success',
      result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete COMBATANT' })
  @ApiCreatedResponse({ description: 'COMBATANT deleted successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async remove(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    const result = await this.qinShiHuangsService.remove(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Delete COMBATANT success',
      result,
    };
  }
}
