import React from 'react';
import ScrollableGrid from 'src/components-shared/ScrollableGrid';
import ScheduleCard from 'src/components/ScheduleCard';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import { Schedule } from 'src/types/schedules';

const SchedulesList = () => {
  const { selectSchedule, toggleScheduleRetire, schedules } = useQueryDataContext();

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
