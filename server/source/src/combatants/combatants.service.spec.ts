import { Test, TestingModule } from '@nestjs/testing';
import { CombatantsService } from './combatants.service';

describe('CombatantsService', () => {
  let service: CombatantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CombatantsService],
    }).compile();

    service = module.get<CombatantsService>(CombatantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
