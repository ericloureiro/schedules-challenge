import { fetchApi } from 'src/api/fetch';
import { SCHEDULES } from 'src/constants/api';
import { SchedulesList } from 'src/types/schedules';

export const getSchedules = () => fetchApi<SchedulesList>(SCHEDULES);
