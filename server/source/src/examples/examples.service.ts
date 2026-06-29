import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example, ExampleDocument } from './schemas/example.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoServerError } from 'mongodb';

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

  findAll() {
    return `This action returns all examples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }

  findByContainer(container: string) {
    const query = this.exampleModel.findOne({ container });

    return query;
  }
}
