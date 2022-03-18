import { fetchApi } from 'src/api/fetch';
import { SCHEDULE_LOGS } from 'src/constants/api';
import { LogsList } from 'src/types/logs';

export const getAllLogs = () => fetchApi<LogsList>(SCHEDULE_LOGS);
