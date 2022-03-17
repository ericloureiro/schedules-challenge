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
  const [{ error, loading, selectedSchedule, schedules, allLogs, selectedLogs }, setState] =
    useState<State>(initialState);

  const fetch = async <T>(path: string) => {
    setState((current) => ({ ...current, loading: true }));

    let json: T;

    try {
      const response = await fetchApi(path);

      json = await response.json();
    } catch (e) {
      setState((current) => ({ ...current, loading: false, error: e }));
    } finally {
      setState((current) => ({ ...current, loading: false }));
    }

    return json;
  };

  const fetchSchedules = async () => {
    const newSchedules = await fetch<SchedulesList>(SCHEDULES);

    setState((current) => ({ ...current, schedules: newSchedules }));
  };

  const fetchLogs = async () => {
    const newLogs = await fetch<LogsList>(SCHEDULE_LOGS);

    setState((current) => ({ ...current, allLogs: newLogs }));
  };

  const selectSchedule = (schedule: Schedule) => {
    const logs = allLogs.filter(({ scheduleId }) => schedule.id === scheduleId);

    setState((current) => ({
      ...current,
      selectedLogs: logs,
      selectedSchedule: schedule,
    }));
  };

  useEffect(() => {
    fetchSchedules();
    fetchLogs();
  }, []);

  return {
    error,
    loading,
    selectedLogs,
    schedules,
    selectedSchedule,
    selectSchedule,
    fetchSchedules,
    fetchLogs,
  };
};

export default useSchedules;

export const [SchedulesProvider, useSchedulesContext] = constate(useSchedules);
