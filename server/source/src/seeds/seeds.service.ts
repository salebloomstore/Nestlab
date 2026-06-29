import { Injectable } from '@nestjs/common';
import { QINSHIHUANGS_SEED } from './data/combatant.seed';
import { QinShiHuangsService } from '../combatants/combatants.service';

@Injectable()
export class SeedsService {
  constructor(private readonly qinShiHuangsService: QinShiHuangsService) {}

  async seedQinShiHuang() {
    for (const data of QINSHIHUANGS_SEED) {
      await this.qinShiHuangsService.create(data);
    }
  }

  async rundQinShiHuang() {
    await this.qinShiHuangsService.enumEmpty();

    await this.seedQinShiHuang();
  }

  async run() {
    await Promise.all([this.rundQinShiHuang()]);
  }
}
