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
import { ExamplesService } from './examples.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@ApiTags('EXAMPLE')
@Controller('examples')
export class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}

  @Post()
  async create(@Body() createExampleDto: CreateExampleDto) {
    const result = await this.examplesService.create(createExampleDto);

    return {
      message: 'Create EXAMPLE success',
      result,
    };
  }

  @Get()
  async findAll() {
    const result = await this.examplesService.findAll();

    if (!result?.length) throw new NotFoundException('EXAMPLEs does not exist');

    return {
      message: 'Get all EXAMPLEs success',
      result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get EXAMPLE' })
  @ApiCreatedResponse({ description: 'EXAMPLE geted successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async findOne(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    const result = await this.examplesService.findOne(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Get EXAMPLE success',
      result,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update EXAMPLE' })
  @ApiCreatedResponse({ description: 'EXAMPLE updated successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async update(
    @Param('id', ParseObjectIdPipe) _id: Types.ObjectId,
    @Body() updateExampleDto: UpdateExampleDto,
  ) {
    const result = await this.examplesService.update(_id, updateExampleDto);

    return {
      message: 'Update EXAMPLE success',
      result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete EXAMPLE' })
  @ApiCreatedResponse({ description: 'EXAMPLE deleted successfully' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'MongoDB ObjectId',
    example: '6844e7c1f3c8d7b2f123456',
  })
  async remove(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    const result = await this.examplesService.remove(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Delete EXAMPLE success',
      result,
    };
  }
}
