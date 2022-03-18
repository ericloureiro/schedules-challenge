import { fetchApi } from 'src/api/fetch';
import { SCHEDULES } from 'src/constants/api';
import { Schedule, SchedulesList } from 'src/types/schedules';

export const getSchedules = () => fetchApi<SchedulesList>(SCHEDULES);

export const toggleSchedule = ({ id, isRetired }: Schedule) => {
  return fetchApi<Schedule>(SCHEDULES + '/' + id, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ isRetired: !isRetired }),
  });
};
