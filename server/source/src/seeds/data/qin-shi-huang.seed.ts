import { QinShiHuang as QinShiHuangs } from '../../qin-shi-huangs/enums/qin-shi-huang.enum';
import { CreateQinShiHuangDto } from '../../qin-shi-huangs/dto/create-qin-shi-huang.dto';

const values = Object.values(QinShiHuangs);

export const QINSHIHUANGS_SEED: CreateQinShiHuangDto[] = values.map(
  (value) => ({
    container: value,
  }),
);
