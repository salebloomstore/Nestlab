import { Test, TestingModule } from '@nestjs/testing';
import { QinShiHuangsService } from './combatants.service';

describe('QinShiHuangsService', () => {
  let service: QinShiHuangsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QinShiHuangsService],
    }).compile();

    service = module.get<QinShiHuangsService>(QinShiHuangsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
