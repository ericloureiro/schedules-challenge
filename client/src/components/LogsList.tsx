import { Card, Typography } from '@mui/material';
import React from 'react';
import ScrollableGrid from 'src/components-shared/ScrollableGrid';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import isEmpty from 'src/utils/isEmpty';

const LogsList = () => {
  const { selectedLogs } = useQueryDataContext();

  return (
    <ScrollableGrid gap={2} style={{ margin: 8, minWidth: 500 }} container>
      {isEmpty(selectedLogs) ? (
        <p>Please, select a Schedule</p>
      ) : (
        selectedLogs.map(({ id, serverName, status, startTime, endTime }) => (
          <Card style={{ padding: 4, width: 250, height: 180 }} key={`log-entry-${id}`}>
            <Typography>{id}</Typography>
            <Typography>{serverName}</Typography>
            <Typography>{status}</Typography>
            <Typography>{startTime}</Typography>
            <Typography>{endTime}</Typography>
          </Card>
        ))
      )}
    </ScrollableGrid>
  );
};

export default LogsList;
