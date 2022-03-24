import range from 'lodash.range';
import { Interval } from 'src/types/interval';

// TODO: add randomness to Interval enum
// const interval = (): Interval => getRandomEnumValue(Status);
const interval = (): Interval => 'Day';

const IntervalFactory = {
  create: () => interval(),
  createMany: (count = 5) => range(count).map(() => interval()),
};

export default IntervalFactory;
