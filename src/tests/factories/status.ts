import { Status } from 'src/types/status';
import range from 'lodash.range';

// TODO: add randomness to Status enum
// const statusBody = (): Status => getRandomEnumValue(Status);
const statusBody = (): Status => 'Completed';

const StatusFactory = {
  create: () => statusBody(),
  createMany: (count = 1) => range(count).map(() => statusBody()),
};

export default StatusFactory;
