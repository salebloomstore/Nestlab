import { Injectable } from '@nestjs/common';
import { EXAMPLES_SEED } from './data/example.seed';
import { ExamplesService } from '../examples/examples.service';

@Injectable()
export class SeedsService {
  constructor(private readonly examplesService: ExamplesService) {}

  async seedExample() {
    for (const data of EXAMPLES_SEED) {
      await this.examplesService.create(data);
    }
  }

  async run() {
    await Promise.all([this.seedExample()]);
  }
}
