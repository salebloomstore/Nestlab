import { Test, TestingModule } from '@nestjs/testing';
import { CldisService } from './cldis.service';

describe('CldisService', () => {
  let service: CldisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CldisService],
    }).compile();

    service = module.get<CldisService>(CldisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
