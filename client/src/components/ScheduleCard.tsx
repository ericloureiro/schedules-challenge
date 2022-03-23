import styled from '@emotion/styled';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import React, { useMemo } from 'react';
import { Schedule } from 'src/types/schedules';

type Props = {
  schedule: Schedule;
  onSelect: () => void;
  onToggle: () => Promise<void>;
};

const StyledCardActions = styled(CardActions)`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  flex: 1;
`;

const ScheduleCard = (props: Props) => {
  const { schedule, onToggle, onSelect } = props;
  const { id, name, description, isRetired } = schedule;

  const ScheduleActions = useMemo(() => {
    const { Icon, status, color } = isRetired
      ? {
          Icon: StarBorderIcon,
          status: 'Retired',
          color: 'error',
        }
      : {
          Icon: StarIcon,
          status: 'Active',
          color: 'primary',
        };

    return () => (
      <StyledCardActions>
        <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>Status</Typography>
          <Typography fontWeight={'bold'} color={color}>
            {status}
          </Typography>
        </Stack>
        <IconButton onClick={onToggle}>
          <Icon />
        </IconButton>
      </StyledCardActions>
    );
  }, [isRetired, onToggle]);

  return (
    <Card key={`schedule-card-${id}`} sx={{ margin: 4, minWidth: 275 }}>
      <CardActionArea onClick={onSelect}>
        <CardHeader title={name}></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ScheduleActions />
    </Card>
  );
};

export default ScheduleCard;
