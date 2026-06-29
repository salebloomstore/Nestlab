import { Example as Examples } from '../../examples/enums/example.enum';
import { CreateExampleDto } from '../../examples/dto/create-example.dto';

const values = Object.values(Examples);

export const EXAMPLES_SEED: CreateExampleDto[] = values.map((value) => ({
  container: value,
}));
