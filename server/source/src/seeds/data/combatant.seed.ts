import { QinShiHuang as QinShiHuangs } from '../../combatants/enums/combatant.enum';
import { CreateQinShiHuangDto } from '../../combatants/dto/create-combatant.dto';

const values = Object.values(QinShiHuangs);

export const QINSHIHUANGS_SEED: CreateQinShiHuangDto[] = values.map(
  (value) => ({
    container: value,
  }),
);
