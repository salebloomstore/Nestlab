import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateCombatantDto } from './dto/create-combatant.dto';
import { UpdateCombatantDto } from './dto/update-combatant.dto';
import {
  Combatant,
  CombatantDocument,
} from './schemas/combatant.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoServerError } from 'mongodb';
import { Combatant as Combatants } from './enums/combatant.enum';

@Injectable()
export class CombatantsService {
  constructor(
    @InjectModel(Combatant.name)
    private readonly combatantModel: Model<CombatantDocument>,
  ) {}

  async create(createCombatantDto: CreateCombatantDto) {
    try {
      const existingCpu = await this.findByContainer(
        createCombatantDto.container,
      );
      if (existingCpu) {
        throw new ConflictException(
          `${createCombatantDto.container} already exists`,
        );
      }
      const result = await this.combatantModel.create(createCombatantDto);

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
      const result = await this.combatantModel.find();

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
      const result = await this.combatantModel.findById(_id);

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
    updateCombatantDto: UpdateCombatantDto,
  ) {
    try {
      if (updateCombatantDto.container) {
        const existingCpu = await this.findByContainer(
          updateCombatantDto.container,
        );
        if (existingCpu && !existingCpu._id.equals(_id)) {
          throw new ConflictException(
            `CPU  ${updateCombatantDto.container} already exists`,
          );
        }
      }

      const result = await this.combatantModel.findByIdAndUpdate(
        _id,
        updateCombatantDto,
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
      const result = await this.combatantModel.findByIdAndDelete(_id);

      return result;
    } catch (error: unknown) {
      if (error instanceof MongoServerError) {
        throw new BadRequestException(error.message);
      }

      throw error;
    }
  }

  async enumEmpty() {
    await Promise.all([this.combatantModel.deleteMany({})]);
  }

  findByContainer(container: Combatants) {
    const query = this.combatantModel.findOne({ container });

    return query;
  }
}
