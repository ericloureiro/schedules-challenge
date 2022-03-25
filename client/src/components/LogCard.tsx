import styled from '@emotion/styled';
import { Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react';
import { ChipColor } from 'src/types/colors';
import { Log } from 'src/types/logs';
import { Status } from 'src/types/status';

type Props = {
  log: Log;
};

const StatusMap: Record<Status, ChipColor> = {
  Pending: 'default',
  Running: 'primary',
  Terminated: 'error',
  Completed: 'success',
  Exception: 'warning',
};

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 180,
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
});

const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const LogCard = (props: Props) => {
  const { log } = props;
  const { serverName, status } = log;

  return (
    <StyledCard>
      <CardContent>
        <Typography>{serverName}</Typography>
      </CardContent>
      <StyledCardActions>
        <Chip color={StatusMap[status]} label={status} />
      </StyledCardActions>
    </StyledCard>
  );
};

export default LogCard;
