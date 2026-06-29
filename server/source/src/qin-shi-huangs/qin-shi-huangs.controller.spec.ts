import { Test, TestingModule } from '@nestjs/testing';
import { QinShiHuangsController } from './qin-shi-huangs.controller';
import { QinShiHuangsService } from './qin-shi-huangs.service';

describe('QinShiHuangsController', () => {
  let controller: QinShiHuangsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QinShiHuangsController],
      providers: [QinShiHuangsService],
    }).compile();

    controller = module.get<QinShiHuangsController>(QinShiHuangsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
