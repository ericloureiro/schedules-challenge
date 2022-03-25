import { Grid } from '@mui/material';
import React from 'react';
import PaddedTypography from 'src/components-shared/PaddedTypography';
import LogCard from 'src/components/LogCard';
import { LogsList as LogListType } from 'src/types/logs';
import { Schedule } from 'src/types/schedules';
import isEmpty from 'src/utils/isEmpty';

type Props = {
  logs: LogListType;
  selectedSchedule: Schedule | null;
};

const LogsList = (props: Props) => {
  const { logs, selectedSchedule } = props;

  if (!selectedSchedule) {
    return (
      <PaddedTypography color="white" variant="h5">
        Please, select a Schedule
      </PaddedTypography>
    );
  }

  if (isEmpty(logs)) {
    return (
      <PaddedTypography color="white" variant="h5">
        No logs found for schedule: {selectedSchedule.name}
      </PaddedTypography>
    );
  }

  return (
    <Grid style={{ padding: 8 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} container>
      {logs.map((log) => (
        <Grid key={`log-entry-${log.id}`} xs={12} sm={6} md={4} lg={3} item>
          <LogCard log={log} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LogsList;
