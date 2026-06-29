import { Test, TestingModule } from '@nestjs/testing';
import { CombatantsController } from './combatants.controller';
import { CombatantsService } from './combatants.service';

describe('CombatantsController', () => {
  let controller: CombatantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CombatantsController],
      providers: [CombatantsService],
    }).compile();

    controller = module.get<CombatantsController>(CombatantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
