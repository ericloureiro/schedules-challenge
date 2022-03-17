import { Status } from 'src/types/status';

export type Log = {
  id: number;
  startTime: Date;
  endTime: Date;
  status: Status;
  serverName: string;
  scheduleId: number;
};

export type LogsList = Log[];
