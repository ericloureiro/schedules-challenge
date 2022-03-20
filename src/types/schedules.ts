import { Interval } from 'src/types/interval';

export type Schedule = {
  id: number;
  name: string;
  description: string;
  isRetired: boolean;
  tasksCount: number;
  startPoint: string;
  endPoint: string;
  dayOfWeek: number;
  dayOfMonth: number;
  startDate: string;
  endDate: string;
  intervalType?: Interval;
  timePeriod?: number;
};

export type SchedulesList = Schedule[];
