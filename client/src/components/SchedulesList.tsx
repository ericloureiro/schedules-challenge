import React from 'react';
import ScrollableGrid from 'src/components-shared/ScrollableGrid';
import ScheduleCard from 'src/components/ScheduleCard';
import { Schedule, SchedulesList as SchedulesListType } from 'src/types/schedules';

type Props = {
  selectSchedule: (schedule: Schedule) => void;
  toggleScheduleRetire: (schedule: Schedule) => Promise<void>;
  schedules: SchedulesListType;
};

const SchedulesList = (props: Props) => {
  const { selectSchedule, toggleScheduleRetire, schedules } = props;

  const onSelect = (schedule: Schedule) => () => selectSchedule(schedule);

  const onToggle = (schedule: Schedule) => () => toggleScheduleRetire(schedule);

  return (
    <ScrollableGrid item sx={{ display: { xs: 'flex', md: 'block' }, flexDirection: { xs: 'row', md: 'column' } }}>
      {schedules.map((schedule) => (
        <ScheduleCard
          key={`schedule-card-${schedule.id}`}
          schedule={schedule}
          onSelect={onSelect(schedule)}
          onToggle={onToggle(schedule)}
        />
      ))}
    </ScrollableGrid>
  );
};

export default SchedulesList;
