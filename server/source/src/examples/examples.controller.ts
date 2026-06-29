import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
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
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.examplesService.create(createExampleDto);
  }

  @Get()
  findAll() {
    return this.examplesService.findAll();
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
  findOne(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    return this.examplesService.findOne(_id);
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
  update(
    @Param('id', ParseObjectIdPipe) _id: Types.ObjectId,
    @Body() updateExampleDto: UpdateExampleDto,
  ) {
    return this.examplesService.update(_id, updateExampleDto);
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
  remove(@Param('id', ParseObjectIdPipe) _id: Types.ObjectId) {
    return this.examplesService.remove(_id);
  }
}
