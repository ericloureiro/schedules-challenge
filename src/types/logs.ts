import { Status } from 'src/types/status';

export type Log = {
  id: number;
  startTime: string;
  endTime: string;
  status: Status;
  serverName: string;
  scheduleId: number;
};

export type LogsList = Log[];
