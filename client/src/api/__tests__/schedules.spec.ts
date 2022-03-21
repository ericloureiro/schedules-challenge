import { getAllSchedules, toggleSchedule } from 'src/api/schedules';
import { SCHEDULES } from 'src/constants/api';
import { BASE_URL } from 'src/constants/config';
import SchedulesFactory from 'src/tests/factories/schedules';
import { mockSchedules } from 'src/tests/mocks';

describe('schedules', () => {
  it('should GET all schedules', async () => {
    fetchMock.once(JSON.stringify(mockSchedules), { url: BASE_URL + '/' + SCHEDULES });

    const response = await getAllSchedules();

    expect(response).toMatchObject(mockSchedules);
  });

  it('should PATCH a schedule', async () => {
    const mockSchedule = SchedulesFactory.create();

    fetchMock.once(JSON.stringify(mockSchedule), {
      url: BASE_URL + '/' + SCHEDULES,
      headers: { 'Content-type': 'application/json' },
    });

    const response = await toggleSchedule(mockSchedule);

    expect(response).toMatchObject(mockSchedule);
  });
});
