import { Injectable } from '@nestjs/common';
import { QINSHIHUANGS_SEED } from './data/qin-shi-huang.seed';
import { QinShiHuangsService } from '../qin-shi-huangs/qin-shi-huangs.service';

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
