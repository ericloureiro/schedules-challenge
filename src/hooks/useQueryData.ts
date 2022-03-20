import constate from 'constate';
import { useState } from 'react';
import { getAllLogs } from 'src/api/logs';
import { getAllSchedules, toggleSchedule } from 'src/api/schedules';
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
      const schedulesRequest = getAllSchedules();
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

  const toggleScheduleRetire = async (schedule: Schedule) => {
    const newSchedule = await toggleSchedule(schedule);

    setState(({ schedules: currentSchedules, ...current }) => {
      const schedules = [...currentSchedules];

      const index = schedules.findIndex(({ id }) => id === schedule.id);

      schedules[index] = newSchedule;

      return { ...current, schedules };
    });
  };

  return {
    ...state,
    selectSchedule,
    toggleScheduleRetire,
    fetchAll,
  };
};

export const [QueryDataProvider, useQueryDataContext] = constate(useQueryData);
