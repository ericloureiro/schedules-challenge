import { Interval } from 'src/types/interval';

export type Schedule = {
  id: number;
  name: string;
  description: string;
  isRetired: boolean;
  tasksCount: number;
  startPoint: Date;
  endPoint: Date;
  dayOfWeek: number;
  dayOfMonth: number;
  startDate: Date;
  endDate: Date;
  intervalType?: Interval;
  timePeriod?: number;
};

export type SchedulesList = Schedule[];
