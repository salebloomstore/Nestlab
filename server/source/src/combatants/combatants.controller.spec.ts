import { Test, TestingModule } from '@nestjs/testing';
import { QinShiHuangsController } from './combatants.controller';
import { QinShiHuangsService } from './combatants.service';

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
