import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateQinShiHuangDto } from './dto/create-qin-shi-huang.dto';
import { UpdateQinShiHuangDto } from './dto/update-qin-shi-huang.dto';
import {
  QinShiHuang,
  QinShiHuangDocument,
} from './schemas/qin-shi-huang.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoServerError } from 'mongodb';
import { QinShiHuang as QinShiHuangs } from './enums/qin-shi-huang.enum';

@Injectable()
export class QinShiHuangsService {
  constructor(
    @InjectModel(QinShiHuang.name)
    private readonly qinShiHuangModel: Model<QinShiHuangDocument>,
  ) {}

  async create(createQinShiHuangDto: CreateQinShiHuangDto) {
    try {
      const existingCpu = await this.findByContainer(
        createQinShiHuangDto.container,
      );
      if (existingCpu) {
        throw new ConflictException(
          `${createQinShiHuangDto.container} already exists`,
        );
      }
      const result = await this.qinShiHuangModel.create(createQinShiHuangDto);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.qinShiHuangModel.find();

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async findOne(_id: Types.ObjectId) {
    try {
      const result = await this.qinShiHuangModel.findById(_id);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async update(
    _id: Types.ObjectId,
    updateQinShiHuangDto: UpdateQinShiHuangDto,
  ) {
    try {
      if (updateQinShiHuangDto.container) {
        const existingCpu = await this.findByContainer(
          updateQinShiHuangDto.container,
        );
        if (existingCpu && !existingCpu._id.equals(_id)) {
          throw new ConflictException(
            `CPU  ${updateQinShiHuangDto.container} already exists`,
          );
        }
      }

      const result = await this.qinShiHuangModel.findByIdAndUpdate(
        _id,
        updateQinShiHuangDto,
        {
          returnDocument: 'after',
        },
      );

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async remove(_id: Types.ObjectId) {
    try {
      const result = await this.qinShiHuangModel.findByIdAndDelete(_id);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async enumEmpty() {
    await Promise.all([this.qinShiHuangModel.deleteMany({})]);
  }

  findByContainer(container: QinShiHuangs) {
    const query = this.qinShiHuangModel.findOne({ container });

    return query;
  }
}
