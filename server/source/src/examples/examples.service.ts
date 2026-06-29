import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example, ExampleDocument } from './schemas/example.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoServerError } from 'mongodb';
import { Example as Examples } from '../examples/enums/example.enum';

@Injectable()
export class ExamplesService {
  constructor(
    @InjectModel(Example.name)
    private readonly exampleModel: Model<ExampleDocument>,
  ) {}

  async create(createExampleDto: CreateExampleDto) {
    try {
      const existingCpu = await this.findByContainer(
        createExampleDto.container,
      );
      if (existingCpu) {
        throw new ConflictException(
          `${createExampleDto.container} already exists`,
        );
      }
      const result = await this.exampleModel.create(createExampleDto);

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
      const result = await this.exampleModel.find();

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
      const result = await this.exampleModel.findById(_id);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async update(_id: Types.ObjectId, updateExampleDto: UpdateExampleDto) {
    try {
      if (updateExampleDto.container) {
        const existingCpu = await this.findByContainer(
          updateExampleDto.container,
        );
        if (existingCpu && !existingCpu._id.equals(_id)) {
          throw new ConflictException(
            `CPU  ${updateExampleDto.container} already exists`,
          );
        }
      }

      const result = await this.exampleModel.findByIdAndUpdate(
        _id,
        updateExampleDto,
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
      const result = await this.exampleModel.findByIdAndDelete(_id);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  findByContainer(container: Examples) {
    const query = this.exampleModel.findOne({ container });

    return query;
  }
}
