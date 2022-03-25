import styled from '@emotion/styled';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
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

const StyledCard = styled(Card)`
  display: flex;
  align-content: space-around;
  flex-direction: column;
  justify-content: center;
`;

const StyledCardActionArea = styled(CardActionArea)({
  flex: 1,
  alignItems: 'flex-start',
});

const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 8,
});

const ScheduleCard = (props: Props) => {
  const { schedule, onToggle, onSelect } = props;
  const { id, name, description, isRetired } = schedule;

  const ScheduleActions = useMemo(() => {
    const { Icon, StatusChip } = isRetired
      ? {
          Icon: StarBorderIcon,
          StatusChip: () => <Chip label={'Retired'} color={'error'} />,
        }
      : {
          Icon: StarIcon,
          StatusChip: () => <Chip label={'Active'} color={'success'} />,
        };

    return () => (
      <StyledCardActions>
        <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>Status</Typography>
          <StatusChip />
        </Stack>
        <IconButton className="toggle-button" onClick={onToggle}>
          <Icon color={'primary'} />
        </IconButton>
      </StyledCardActions>
    );
  }, [isRetired, onToggle]);

  return (
    <StyledCard className={`schedule-card-${id}`}>
      <StyledCardActionArea onClick={onSelect}>
        <CardHeader title={name}></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </StyledCardActionArea>
      <ScheduleActions />
    </StyledCard>
  );
};

export default ScheduleCard;
