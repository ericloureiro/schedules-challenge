import { Schedule } from 'src/types/schedules';
import faker from '@faker-js/faker';
import range from 'lodash.range';
import IntervalFactory from 'src/tests/factories/interval';

const scheduleBody = (params = {}): Schedule => ({
  id: faker.datatype.number(),
  dayOfWeek: faker.datatype.number(),
  dayOfMonth: faker.datatype.number(),
  description: faker.commerce.productDescription(),
  endDate: faker.datatype.datetime().toDateString(),
  endPoint: faker.datatype.datetime().toDateString(),
  isRetired: faker.datatype.boolean(),
  name: faker.commerce.productName(),
  tasksCount: faker.datatype.number(),
  startDate: faker.datatype.datetime().toDateString(),
  startPoint: faker.datatype.datetime().toDateString(),
  intervalType: IntervalFactory.create(),
  ...params,
});

const SchedulesFactory = {
  create: (params = {}) => scheduleBody(params),
  createMany: (count = 5, params = {}) => range(count).map(() => scheduleBody(params)),
};

export default SchedulesFactory;
