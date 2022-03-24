import faker from '@faker-js/faker';
import range from 'lodash.range';
import StatusFactory from 'src/tests/factories/status';
import { Log } from 'src/types/logs';

const logBody = (params = {}): Log => ({
  id: faker.datatype.number(),
  scheduleId: faker.datatype.number(),
  serverName: faker.commerce.productName(),
  endTime: faker.datatype.datetime().toDateString(),
  startTime: faker.datatype.datetime().toDateString(),
  status: StatusFactory.create(),
  ...params,
});

const LogsFactory = {
  create: (params?: Partial<Log>) => logBody(params),
  createMany: (count = 5, params?: Partial<Log>) => range(count).map(() => logBody(params)),
};

export default LogsFactory;
