import { Grid } from '@mui/material';
import React, { useMemo } from 'react';
import PaddedTypography from 'src/components-shared/PaddedTypography';
import ScheduleCard from 'src/components/ScheduleCard';
import { Schedule, SchedulesList as SchedulesListType } from 'src/types/schedules';
import isEmpty from 'src/utils/isEmpty';

type Props = {
  selectSchedule: (schedule: Schedule) => void;
  toggleScheduleRetire: (schedule: Schedule) => Promise<void>;
  schedules: SchedulesListType;
  searchTerm: string;
};

const SchedulesList = (props: Props) => {
  const { selectSchedule, toggleScheduleRetire, schedules, searchTerm } = props;

  const onSelect = (schedule: Schedule) => () => selectSchedule(schedule);

  const onToggle = (schedule: Schedule) => () => toggleScheduleRetire(schedule);

  const filteredSchedules = useMemo(() => {
    if (isEmpty(searchTerm)) return schedules;

    const lowerCaseTerm = searchTerm.toLowerCase();

    return schedules.filter(
      ({ id, name, description }) =>
        id.toString().toLowerCase().includes(lowerCaseTerm) ||
        name.toLowerCase().includes(lowerCaseTerm) ||
        description.toLowerCase().includes(lowerCaseTerm)
    );
  }, [schedules, searchTerm]);

  if (searchTerm && isEmpty(schedules)) {
    return <PaddedTypography variant="h5">No schedules found on search!</PaddedTypography>;
  }

  return (
    <Grid style={{ padding: 16 }} rowSpacing={1} container>
      {filteredSchedules.map((schedule) => (
        <Grid key={`schedule-card-${schedule.id}`} item xs={12}>
          <ScheduleCard schedule={schedule} onSelect={onSelect(schedule)} onToggle={onToggle(schedule)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SchedulesList;
