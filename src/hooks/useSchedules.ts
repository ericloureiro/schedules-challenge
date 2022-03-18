import constate from 'constate';
import { useEffect, useState } from 'react';
import { fetchApi } from 'src/api/fetch';
import { SCHEDULES, SCHEDULE_LOGS } from 'src/constants/api';
import { LogsList } from 'src/types/logs';
import { Schedule, SchedulesList } from 'src/types/schedules';

type State = {
  selectedSchedule?: Schedule;
  schedules: SchedulesList;
  allLogs: LogsList;
  selectedLogs: LogsList;
  loading: boolean;
  error?: unknown;
};

const initialState: State = {
  schedules: [],
  selectedLogs: [],
  allLogs: [],
  loading: false,
};

const useSchedules = () => {
  const [state, setState] = useState<State>(initialState);

  const fetchAll = async () => {
    setState((current) => ({ ...current, loading: true }));

    try {
      const schedulesRequest = fetchApi<SchedulesList>(SCHEDULES);
      const logsRequest = fetchApi<LogsList>(SCHEDULE_LOGS);

      const [schedules, allLogs] = await Promise.all([schedulesRequest, logsRequest]);

      setState((current) => ({ ...current, loading: false, schedules, allLogs }));
    } catch (e) {
      setState((current) => ({ ...current, loading: false, error: e }));
    }
  };

  const selectSchedule = (selectedSchedule: Schedule) => {
    const logs = state.allLogs.filter(({ scheduleId }) => selectedSchedule.id === scheduleId);

    setState((current) => ({
      ...current,
      selectedLogs: logs,
      selectedSchedule,
    }));
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    ...state,
    selectSchedule,
    fetchAll,
  };
};

export default useSchedules;

export const [SchedulesProvider, useSchedulesContext] = constate(useSchedules);
