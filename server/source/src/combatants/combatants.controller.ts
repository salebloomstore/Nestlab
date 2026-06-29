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
import { CombatantsService } from './combatants.service';
import { CreateCombatantDto } from './dto/create-combatant.dto';
import { UpdateCombatantDto } from './dto/update-combatant.dto';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@ApiTags('COMBATANT')
@Controller('combatants')
export class CombatantsController {
  constructor(private readonly combatantsService: CombatantsService) {}

  @Post()
  @ApiOperation({ summary: 'Create COMBATANT' })
  async create(@Body() createCombatantDto: CreateCombatantDto) {
    const result = await this.combatantsService.create(createCombatantDto);

    return {
      message: 'Create COMBATANT success',
      result,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all COMBATANTs' })
  async findAll() {
    const result = await this.combatantsService.findAll();

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
    const result = await this.combatantsService.findOne(_id);

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
    @Body() updateCombatantDto: UpdateCombatantDto,
  ) {
    const result = await this.combatantsService.update(
      _id,
      updateCombatantDto,
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
    const result = await this.combatantsService.remove(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Delete COMBATANT success',
      result,
    };
  }
}
