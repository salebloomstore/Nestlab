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
import { QinShiHuangsService } from './qin-shi-huangs.service';
import { CreateQinShiHuangDto } from './dto/create-qin-shi-huang.dto';
import { UpdateQinShiHuangDto } from './dto/update-qin-shi-huang.dto';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@ApiTags('EXAMPLE')
@Controller('qin-shi-huangs')
export class QinShiHuangsController {
  constructor(private readonly qinShiHuangsService: QinShiHuangsService) {}

  @Post()
  async create(@Body() createQinShiHuangDto: CreateQinShiHuangDto) {
    const result = await this.qinShiHuangsService.create(createQinShiHuangDto);

    return {
      message: 'Create EXAMPLE success',
      result,
    };
  }

  @Get()
  async findAll() {
    const result = await this.qinShiHuangsService.findAll();

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
    const result = await this.qinShiHuangsService.findOne(_id);

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
    @Body() updateQinShiHuangDto: UpdateQinShiHuangDto,
  ) {
    const result = await this.qinShiHuangsService.update(
      _id,
      updateQinShiHuangDto,
    );

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
    const result = await this.qinShiHuangsService.remove(_id);

    if (!result) throw new NotFoundException('CPU does not exist');

    return {
      message: 'Delete EXAMPLE success',
      result,
    };
  }
}
