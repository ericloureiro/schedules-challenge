import constate from 'constate';
import { useEffect, useState } from 'react';
import { getAllLogs } from 'src/api/logs';
import { getSchedules } from 'src/api/schedules';
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

const useQueryData = () => {
  const [state, setState] = useState<State>(initialState);

  const fetchAll = async () => {
    setState((current) => ({ ...current, loading: true }));

    try {
      const schedulesRequest = getSchedules();
      const logsRequest = getAllLogs();

      const [schedules, allLogs] = await Promise.all([schedulesRequest, logsRequest]);

      setState((current) => ({ ...current, loading: false, schedules, allLogs }));
    } catch (e) {
      setState((current) => ({ ...current, loading: false, error: e }));
    }
  };

  const selectSchedule = (selectedSchedule: Schedule) => {
    const selectedLogs = state.allLogs.filter(({ scheduleId }) => selectedSchedule.id === scheduleId);

    setState((current) => ({
      ...current,
      selectedLogs,
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

export const [QueryDataProvider, useQueryDataContext] = constate(useQueryData);
